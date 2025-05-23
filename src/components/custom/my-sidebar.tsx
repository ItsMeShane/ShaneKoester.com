import * as React from "react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import UnderlineAnimation from "./hover-animations"

const data = [
    {
        title: "Projects",
        url: "/",
        items: [
            {
                title: "AI Learns to Drive",
                url: "/projects/ai-learns-to-drive",
            },
            {
                title: "Optical Character Recognition",
                url: "/projects/optical-character-recognition",
            },
            {
                title: "Interactive 3D Engine",
                url: "/projects/interactive-3d-engine",
            },
            {
                title: "Chess Engine",
                url: "/projects/chess-engine",
            },
            {
                title: "Spotify Tracker",
                url: "/projects/spotify-tracker",
            },
        ],
    },
    {
        title: "Work",
        url: "/",
        items: [
            {
                title: "Ontario Power Generation",
                url: "/work/ontario-power-generation",
            },
            {
                title: "Mind by Design",
                url: "/work/mind-by-design",
            },
        ],
    },
    {
        title: "Education",
        url: "/",
        items: [
            {
                title: "Centennial College",
                url: "/education/centennial-college",
            },
        ],
    },
    {
        title: "External Links",
        url: "/",
        items: [
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/",
                newTab: true,
            },
            {
                title: "GitHub",
                url: "https://github.com/ItsMeShane",
                newTab: true,
            },
            {
                title: "YouTube",
                url: "https://www.youtube.com/",
                newTab: true,
            },
        ],
    },
]

export function MySidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader className="items-center justify-center py-10">
                <UnderlineAnimation className="font-semibold text-2xl">
                    <Link to={'/'}>Shane Koester</Link>
                </UnderlineAnimation>
            </SidebarHeader>
            <hr className="mx-4" />
            <SidebarContent className="pb-25">
                {data.map((item) => (
                    <SidebarGroup key={item.title}>
                        <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {item.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild isActive={false}>
                                            <Link to={item.url} target={String(item.url).charAt(0) === '/' ? '_self' : '_blank'}>{item.title}</Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}

