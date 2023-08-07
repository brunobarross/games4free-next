'use client'
 
import { createContext, useEffect, useState } from 'react'
 
export const GlobalContext = createContext({})
 
export default function GlobalProvider({ children }) {
  const [sidebarOpen, setSideBarOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)
  
  return <GlobalContext.Provider value={{sidebarOpen, setSideBarOpen}}>{children}</GlobalContext.Provider>
}