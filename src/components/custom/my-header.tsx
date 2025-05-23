"use client"

import React, { useState } from "react"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useBreadcrumbs } from "@/hooks/use-breadcrumbs"
import { useIsMobile } from "@/hooks/use-mobile"

export default function MyHeader() {

    const { breadcrumbs } = useBreadcrumbs()
    const [open, setOpen] = useState(false)
    const ITEMS_TO_DISPLAY = useIsMobile() ? 2 : 3
    const showEllipsis = breadcrumbs.length > ITEMS_TO_DISPLAY
    const hiddenItems = showEllipsis ? breadcrumbs.slice(1, breadcrumbs.length - (ITEMS_TO_DISPLAY - 1)) : []
    const visibleItems = showEllipsis ? [breadcrumbs[0], ...breadcrumbs.slice(breadcrumbs.length - (ITEMS_TO_DISPLAY - 1))] : breadcrumbs
    return (
        <header className="sticky top-0 border-b h-16 bg-inherit shrink-0 px-4 flex items-center flex-nowrap z-40">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mx-4" />
            <Breadcrumb>
                <BreadcrumbList>
                    {/* first item is always visible & only be linked if not home*/}
                    <BreadcrumbItem>
                        {breadcrumbs.length > 1 ?
                            <BreadcrumbLink to={visibleItems[0]?.to || "#"}>{visibleItems[0]?.label}</BreadcrumbLink>
                            :
                            <BreadcrumbPage>{visibleItems[0]?.label}</BreadcrumbPage>
                        }
                    </BreadcrumbItem>

                    {/* show ellipsis if needed */}
                    {showEllipsis && (
                        <>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <DropdownMenu open={open} onOpenChange={setOpen}>
                                    <DropdownMenuTrigger className="flex items-center gap-1" aria-label="Toggle menu">
                                        <BreadcrumbEllipsis className="h-4 w-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        {hiddenItems.map((item, index) => (
                                            <DropdownMenuItem key={index}>
                                                <a href={item.to || "#"}>{item.label}</a>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </BreadcrumbItem>
                        </>
                    )}

                    {/* render the remaining visible items */}
                    {visibleItems.slice(1).map((item, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {index === visibleItems.length - 2 ? (
                                    <BreadcrumbPage className="max-w-32 truncate md:max-w-none">{item.label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink to={item.to || ""} className="max-w-32 truncate md:max-w-none">
                                        {item.label}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </header>
    );
}


