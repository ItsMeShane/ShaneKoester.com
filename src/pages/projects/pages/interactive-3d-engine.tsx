import { useBreadcrumbs } from "@/hooks/use-breadcrumbs";
import { useEffect } from "react";

export default function Interactive3DEngine() {
    // set page breadcrumbs 
    const { updateBreadcrumbs } = useBreadcrumbs()
    useEffect(() => {
        updateBreadcrumbs([
            { label: "Projects", to: "/projects" },
            { label: "Interactive 3D Engine" },
        ])
        return () => {
            updateBreadcrumbs([])
        }
    }, [])

    return (
        <main>

        </main>
    )
}