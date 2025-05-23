import { useBreadcrumbs } from "@/hooks/use-breadcrumbs";
import { useEffect } from "react";

export default function SpotifyTracker() {
    // set page breadcrumbs
    const { updateBreadcrumbs } = useBreadcrumbs()
    useEffect(() => {
        updateBreadcrumbs([
            { label: "Projects", to: '/projects' },
            { label: "Spotify Tracker" },
        ])
        return () => {
            updateBreadcrumbs([])
        }
    }, [])

    return (
        <>
            <main>

            </main>
        </>
    )
}