"use client"

import { useBreadcrumbs } from '@/hooks/use-breadcrumbs';
import { useEffect } from 'react';

export default function Page() {
    // set page breadcrumbs
    const { updateBreadcrumbs } = useBreadcrumbs()
    useEffect(() => {
        updateBreadcrumbs([
            { label: "Page Name", to: "/path" },
        ])
        return () => {
            updateBreadcrumbs([])
        }
    }, [])

    return (
        <main>

        </main>
    );
}
