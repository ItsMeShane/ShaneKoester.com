"use client"

import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import UnderlineAnimation from "@/components/custom/hover-animations"
import { projects } from "../projects/project-data"

export default function Hero() {
  return (
    <main className="dark">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl font-mono">Shane Koester</h1>
              <p className="text-gray-400">Software Engineer</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hi, I'm Shane. I'm a software engineer with 2 years of professional experience
              specializing in intelligent automation. Currently, I work as a Software
              Engineer at Ontario Power Generation where I design and build high-quality,
              scalable web applications.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-gray-400 text-sm bg-gray-800 h-[400px] flex items-center justify-center">
              <p>box</p>
            </div>
          </div>
        </div>

        <div className="space-y-8 2">
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">
                <Link to="/projects">
                  <UnderlineAnimation>
                    My Projects
                  </UnderlineAnimation>
                </Link>
              </h2>
              <Button variant="ghost" size="icon" className="">
                <Link to='/projects' className="w-full h-full flex justify-center items-center">
                  <span className="sr-only">View all projects</span><ChevronRight />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {projects.slice(0, 3).map((project, index) => (
                <div key={index}>
                    <Link to={project.url} key={index}>
                      <div
                        className="group/underline-animation relative aspect-square rounded-lg overflow-hidden"
                      >
                        <img
                          src={project.thumbnailPath || `/public/image-not-found.jpg`}
                          alt={`Project ${index}`}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className="absolute bottom-0 left-0 w-full h-15 bg-gradient-to-t from-background/80 via-background/50 to-transparent overflow-hidden p-4 transition-all duration-300 ease-out group-hover/underline-animation:h-29"
                        >
                          <UnderlineAnimation>
                            <h3
                              className="text-white text-lg font-semibold transition-transform duration-300"
                            >
                              {project.title}
                            </h3>
                          </UnderlineAnimation>
                          <p
                            className=" text-gray-300 text-sm mt-2 opacity-0 transition-opacity duration-300 group-hover/underline-animation:opacity-100">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">
                <Link to="/work">
                  <UnderlineAnimation>
                    My Work
                  </UnderlineAnimation>
                </Link>
              </h2>
              <Button variant="ghost" size="icon" className="">
                <Link to='/work' className="w-full h-full flex justify-center items-center">
                  <span className="sr-only">View all Work</span><ChevronRight />
                </Link>
              </Button>
            </div>
            <div className="flex gap-4 bg-blue-600 rounded-xl p-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-24 h-24 bg-white rounded-xl" />
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
              <h2 className="text-2xl font-mono mb-4">Contact</h2>
              <Button variant="ghost" size="icon" className="absolute right-4 top-4">
                <span className="sr-only">Contact me</span>→
              </Button>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}

