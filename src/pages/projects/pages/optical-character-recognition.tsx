import { useBreadcrumbs } from "@/hooks/use-breadcrumbs";
import { useEffect } from "react";

export default function OpticalCharacterRecognition() {
    // set page breadcrumbs
    const { updateBreadcrumbs } = useBreadcrumbs()
    useEffect(() => {
        updateBreadcrumbs([
            { label: "Projects", to: '/projects' },
            { label: "Optical Character Recognition" },
        ])
        return () => {
            updateBreadcrumbs([])
        }
    }, [])

    return (
        <main>
            <iframe src="https://opticalcharacterrecognition.onrender.com/" width="100%" height="100%" className="bg-blue-100">
                <p>Your browser does not support iframes.</p>
                <p>You can open this project in a new tab.</p>
                <p><a href="https://opticalcharacterrecognition.onrender.com/" target="_blank" className="text-blue-300">https://opticalcharacterrecognition.onrender.com/</a></p>
            </iframe>
        </main>
    )
}