"use client";
import { Sidebar } from 'phosphor-react';
import React from 'react';
import Navbar from '../components/Navbar';

export const GlobalContext = React.createContext();
export const GlobalStorage = ({ children }) => {
  const [sidebarOpen, setSideBarOpen] = React.useState(false);
  
  return (
    <GlobalContext.Provider
      value={{
        sidebarOpen,
        setSideBarOpen,
       
      }}
    >
      <Sidebar/>
      <Navbar/>
    </GlobalContext.Provider>
  );
};
