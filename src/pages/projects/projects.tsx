"use client"

import { projects, ProjectSchema } from "./project-data";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useBreadcrumbs } from "@/hooks/use-breadcrumbs";

export default function Projects() {
    // set page breadcrumbs
    const { updateBreadcrumbs } = useBreadcrumbs()
    useEffect(() => {
        updateBreadcrumbs([
            { label: "Projects" },
        ])
        return () => {
            updateBreadcrumbs([])
        }
    }, [])

    return (
        <main className="flex flex-col gap-12 justify-center items-center">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-wrap justify-center gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </main>
    )
}

function ProjectCard({ project }: { project: ProjectSchema }) {

    return (
        <Link
            to={project.url}
            className="block w-full max-w-[400px] bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all hover:shadow-lg hover:-translate-y-1"
        >
            <div className="relative h-44 w-full overflow-hidden">
                <img src={project.thumbnailPath || "public/image-not-found.jpg"} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
            </div>
        </Link>
    )
}

