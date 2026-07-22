"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { cn } from "@/lib/utils";
import { getProjectImages } from "@/lib/projects-data";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ProjectGallery({ project }: { project: { title: string; id: string | number; images?: string[] | Record<string, string>; image?: string; mobileImage?: string; } }) {
  const projectImages = getProjectImages(project);
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setCurrentSlide(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (!isPreviewOpen) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        api?.scrollPrev();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        api?.scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [api, isPreviewOpen]);

  return (
    <div className="mb-12">
      <div className="relative">
        <Carousel className="w-full" setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {projectImages.map((image, index) => (
              <CarouselItem key={`${project.id}-${index}`}>
                <div className="relative w-full h-[420px] overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`${project.title} preview ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {projectImages.length > 1 && (
            <>
              <CarouselPrevious className="-left-3 sm:-left-10" />
              <CarouselNext className="-right-3 sm:-right-10" />
            </>
          )}
        </Carousel>

        {projectImages.length > 0 && (
          <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-background/85 px-3 py-2 text-sm font-medium shadow-sm backdrop-blur transition hover:bg-background"
              >
                <Expand className="h-4 w-4" />
                View full image
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl p-3 sm:p-4">
              <div className="relative h-[75vh] w-full overflow-hidden rounded-md">
                <Image
                  src={projectImages[currentSlide]}
                  alt={`${project.title} full preview ${currentSlide + 1}`}
                  fill
                  className="object-contain"
                />

                <button
                  type="button"
                  onClick={() => api?.scrollPrev()}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 shadow-sm backdrop-blur hover:bg-background"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => api?.scrollNext()}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 shadow-sm backdrop-blur hover:bg-background"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <p className="px-1 text-center text-sm text-muted-foreground">
                Image {currentSlide + 1} of {projectImages.length}
              </p>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {projectImages.length > 1 && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {projectImages.map((image, index) => (
            <button
              key={`${project.id}-thumb-${index}`}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "relative h-14 w-20 overflow-hidden rounded-md border-2 transition-all",
                currentSlide === index
                  ? "border-primary scale-[1.02]"
                  : "border-transparent opacity-70 hover:opacity-100"
              )}
              aria-label={`Show image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${project.title} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {projectImages.length > 1 && (
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Viewing image {currentSlide + 1} of {projectImages.length}
        </p>
      )}
    </div>
  );
}
