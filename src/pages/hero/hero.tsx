"use client"
import "./styles/react-grid-layout.css"
import "./styles/react-resizable.css"
import type React from "react"

import { useMemo, useState } from "react"
import { Move, ChevronDown, RefreshCcw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { cn, getFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from "@/lib/utils"
import { type Layouts, Responsive, WidthProvider } from "react-grid-layout"
import { Button } from "@/components/ui/button"
import { defaultLayouts } from "./default-layouts"
import AboutMeWidget from "./widget-components/about-me"
import ProjetsWidget from "./widget-components/projects"
import ChatWidget from "./widget-components/chat"
import WorkWidget from "./widget-components/work/work"
import ContactWidget from "./widget-components/contact"
import applyConditionalWidgetSizing from "./conditional-widget-sizing"

export type Widget = {
    title: string
    component: React.ReactNode
}

const widgetComponents: Widget[] = [
    {
        title: 'My Projects',
        component: <ProjetsWidget />,
    },
    {
        title: 'About Me',
        component: <AboutMeWidget />,
    },
    {
        title: 'Chat',
        component: <ChatWidget />,
    },
    {
        title: 'My Work',
        component: <WorkWidget />,
    },
    {
        title: 'Contact',
        component: <ContactWidget />,
    },
]

export default function Home() {

    const [layouts, setLayouts] = useState<Layouts>(() => {
        const savedLayouts = getFromLocalStorage("sk_layouts") as Layouts | null
        if (savedLayouts) {
            return savedLayouts
        }
        return defaultLayouts
    })
    const [currentBreakpoint, setCurrentBreakpoint] = useState<{ bp: string, cols: number }>({ bp: 'lg', cols: 5 })

    const ResponsiveGridLayout = useMemo(() => WidthProvider(Responsive), [])

    return (
        <main>
            <Button variant={'destructive'} className="m-3 fixed top-18 right-2 cursor-pointer z-10"
                onClick={() => {
                    removeFromLocalStorage('sk_layouts')
                    setLayouts(defaultLayouts)
                }}><RefreshCcw /></Button>
            <section className="pb-20">
                <ResponsiveGridLayout
                    className="layout"
                    layouts={layouts}
                    isBounded={true}
                    useCSSTransforms={true}
                    breakpoints={{ lg: 996, md: 768, sm: 480 }}
                    onBreakpointChange={(bp, cols) => setCurrentBreakpoint({ bp: String(bp), cols: cols })}
                    onLayoutChange={(_, newLayouts) => {
                        setLayouts(newLayouts)
                        saveToLocalStorage("sk_layouts", newLayouts)
                    }}
                    cols={{ lg: 5, md: 2, sm: 1 }}
                    draggableHandle=".widget-drag-handle"
                    resizeHandles={["se"]}
                    onResize={(layout, oldLayoutItem, layoutItem, placeholder) => { applyConditionalWidgetSizing(currentBreakpoint, layout, oldLayoutItem, layoutItem, placeholder) }}
                    resizeHandle={
                        <button
                            title="Resize"
                            tabIndex={-1}
                            className="rounded-tl-2xl absolute right-0 bottom-0 flex items-end justify-end w-7 h-7 cursor-se-resize"
                            onMouseDown={(e) => {
                                e.preventDefault()
                            }}
                        >
                            <ChevronDown className="rotate-315" strokeOpacity={0.75} />
                        </button>
                    }
                    margin={[10, 10]}
                    containerPadding={[0, 0]}
                >
                    {widgetComponents.map((widget) => {
                        return (
                            <Card
                                key={widget.title}
                                className={cn("overflow-hidden h-full w-full pt-3 pb-0 shadow-none gap-0 rounded-sm")}
                            >
                                <CardHeader className="flex flex-row items-center justify-between z-10 px-4">
                                    <div className="widget-drag-handle cursor-move flex items-center gap-2">
                                        <Move
                                            strokeWidth={1.5}
                                            className={`w-5 h-5 min-w-5 min-h-5`}
                                            onMouseDown={(e) => { e.preventDefault() }}
                                        />
                                        <CardTitle className="text-base select-none">{widget.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className={`p-4 w-full h-full flex items-center justify-center overflow-hidden`}>
                                    {widget.component}
                                </CardContent>
                            </Card>
                        )
                    })}
                </ResponsiveGridLayout>
            </section>
        </main>
    )
}
