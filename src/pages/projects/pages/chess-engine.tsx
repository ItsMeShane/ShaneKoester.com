import { useBreadcrumbs } from "@/hooks/use-breadcrumbs"
import { useEffect } from "react"

export default function ChessEngine() {
    // set page breadcrumbs 
    const { updateBreadcrumbs } = useBreadcrumbs()
    useEffect(() => {
        updateBreadcrumbs([
            { label: "Projects", to: "/projects" },
            { label: "Chess Engine" },
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