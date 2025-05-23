import { useBreadcrumbs } from "@/hooks/use-breadcrumbs"
import { useEffect } from "react"

export default function AILearnsToDrive() {
    // set page breadcrumbs
    const { updateBreadcrumbs } = useBreadcrumbs()
    useEffect(() => {
        updateBreadcrumbs([
            { label: "Projects", to: '/projects' },
            { label: "AI Learns to Drive" },
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