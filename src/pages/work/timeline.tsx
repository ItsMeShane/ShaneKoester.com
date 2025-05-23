"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import UnderlineAnimation from "@/components/custom/hover-animations"
import { Link } from "react-router-dom"

interface TimelineProps {
  children: ReactNode
}

function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border" />
      <div className="space-y-12">{children}</div>
    </div>
  )
}

interface TimelineItemProps {
  startDate: string
  endDate: string
  title: string
  establishment: string
  establishmentURL: string
  icon: LucideIcon
  iconColor?: string
  position: "left" | "right"
  children?: ReactNode
}

function TimelineItem({
  startDate,
  endDate,
  title,
  establishment,
  establishmentURL,
  icon: Icon,
  iconColor = "bg-primary",
  position = "left",
  children,
}: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (itemRef.current) observer.observe(itemRef.current)
    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current)
    }
  }, [])

  return (
    <div
      ref={itemRef}
      className={cn(
        "flex w-full items-center justify-start flex-col lg:flex-row",
        position === "right" && "lg:flex-row-reverse"
      )}
    >
      <div
        className={cn(
          "w-full lg:w-1/2 p-4 transition-all duration-700",
          position === "left" ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8",
          isVisible
            ? "opacity-100 translate-x-0"
            : position === "left"
              ? "opacity-0 translate-x-0 lg:-translate-x-10"
              : "opacity-0 translate-x-0 lg:translate-x-10"
        )}
      >
        <div
          className={cn(
            "bg-card border rounded-lg p-6 shadow-md",
            isVisible ? "opacity-100" : "opacity-0",
            "transition-opacity duration-700 delay-300"
          )}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <Link to={establishmentURL} target="_blank">
            <UnderlineAnimation offsetY="0.8rem">
              <p className="text-muted-foreground mb-4">{establishment}</p>
            </UnderlineAnimation>
          </Link>
          {children}
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col items-center justify-center z-10 mt-4 lg:mt-0 m-0 p-0",
          isVisible ? "opacity-100" : "opacity-0",
          "transition-opacity duration-500 delay-200"
        )}
      >
        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", iconColor)}>
          {Icon ? <Icon className="h-5 w-5 text-white" /> : <span className="h-5 w-5" />}
        </div>
        <span className="text-sm font-medium mt-1 whitespace-nowrap">{startDate} - {endDate}</span>
      </div>

      <div
        className={cn(
          "hidden lg:block w-1/2 transition-all duration-700",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0"
        )}
      />
    </div>
  )
}

export { Timeline, TimelineItem }
