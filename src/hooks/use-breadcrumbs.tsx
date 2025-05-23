"use client"

import { useEffect } from "react"
import { createContext, useContext, useState, type ReactNode } from "react"

export type BreadcrumbItem = {
  label: string
  to?: string 
}

type BreadcrumbContextType = {
  breadcrumbs: BreadcrumbItem[]
  setBreadcrumbs: (breadcrumbs: BreadcrumbItem[]) => void
  updateBreadcrumbs: (newBreadcrumbs: BreadcrumbItem[]) => void
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined)

export const BreadcrumbProvider = ({ children }: { children: ReactNode }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([{ label: "Home", to: "/" }])

  // Function to update breadcrumbs - this preserves the Home link and adds new items
  const updateBreadcrumbs = (newBreadcrumbs: BreadcrumbItem[]) => {
    setBreadcrumbs([{ label: "Home", to: "/" }, ...newBreadcrumbs])
  }

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs, updateBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  )
}

export const useBreadcrumbs = () => {
  const context = useContext(BreadcrumbContext)
  if (context === undefined) {
    throw new Error("useBreadcrumbs must be used within a BreadcrumbProvider")
  }
  return context
}


export function usePageBreadcrumbs(breadcrumbs: BreadcrumbItem[]) {
  const { updateBreadcrumbs } = useBreadcrumbs()

  useEffect(() => {
    updateBreadcrumbs(breadcrumbs)

    return () => {
      // Optional: reset to default when component unmounts
      // updateBreadcrumbs([]);
    }
  }, [updateBreadcrumbs, JSON.stringify(breadcrumbs)])
}
