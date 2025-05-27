"use client"

import { useState, useEffect, useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from "react-router-dom"
import { projects } from "@/pages/projects/project-data"
import UnderlineAnimation from "@/components/custom/hover-animations"
import { cn } from "@/lib/utils"

export default function ProjectsWidget() {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal")
  const containerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect

        setContainerHeight(height)

        const newOrientation = width > height * 1.2 ? "horizontal" : "vertical"
        setOrientation(newOrientation)
      }
    })

    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  const getCarouselClasses = () => {
    return orientation === "vertical" ? "h-full" : "w-full h-full"
  }

  const getItemStyles = () => {
    if (orientation === "horizontal") {
      return {
        height: `${containerHeight}px`,
        flex: "0 0 auto",
      }
    }
    return {
      flexBasis: "100%",
    }
  }

  return (
    <div ref={containerRef} className="w-full h-full">
      <Carousel
        orientation={orientation}
        opts={{
          align: "start",
          loop: true,
          skipSnaps: true,
          dragFree: false,
          containScroll: "trimSnaps",
        }}
        ref={carouselRef}
        className={cn(getCarouselClasses(), "w-full h-full")}
      >
        <CarouselContent className={orientation === "vertical" ? "h-full -mt-4" : "-ml-4 h-full"}>
          {projects.map((project) => (
            <CarouselItem
              key={project.title}
              className={orientation === "vertical" ? "pt-4" : "pl-4"}
              style={getItemStyles()}
            >
              <Link to={project.url} className="block h-full">
                <div className="group/underline-animation relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <img
                    src={project.thumbnailPath || `/public/image-not-found.jpg`}
                    alt={`${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/underline-animation:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 select-none w-full h-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent overflow-hidden p-4 transition-all duration-300 ease-out group-hover/underline-animation:h-32">
                    <UnderlineAnimation>
                      <h3 className="text-white text-lg font-semibold transition-transform duration-300 line-clamp-1">
                        {project.title}
                      </h3>
                    </UnderlineAnimation>
                    <p className="text-gray-200 text-sm mt-2 opacity-0 transition-opacity duration-300 group-hover/underline-animation:opacity-100 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={` mx-10 opacity-75`} />
        <CarouselNext className={`mx-10 opacity-75`} />
      </Carousel>
    </div>
  )
}
