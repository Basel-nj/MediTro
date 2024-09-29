"use client";
import React, { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import Link from "next/link";
import SearchIcon from "@rsuite/icons/Search";
import MenuIcon from "@rsuite/icons/Menu";
import { links } from "./links";
import { Drawer } from "rsuite";
import CloseIcon from "@rsuite/icons/Close";

function Header() {
   const [isScrolled, setIsScrolled] = useState(false);

   const [openDrawer, setOpenDrawer] = useState(false);

   const handleScroll = () => {
      window.requestAnimationFrame(() => {
         const scrollPosition = window.pageYOffset;
         setIsScrolled(scrollPosition > 50);
      });
   };
   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <>
         <header
            className={`bg-transparent sticky top-0 left-0 py-3 px-8	 flex justify-between items-center h-[75px] z-[3] ${
               isScrolled ? "bg-white" : "bg-transparent"
            }`}
         >
            <div>
               <Logo />
            </div>
            <nav className="hidden md:flex justify-self-end w-[70%]  justify-between items-center">
               <div className="flex items-center gap-[40px] grow">
                  {links.map((link) => (
                     <Link
                        key={link.name}
                        href={link.path}
                        className="underline-none font-semibold text-[--main-color] text-[18px] hover:text-[--alt-color] transition-all duration-300"
                     >
                        {link.name}
                     </Link>
                  ))}
               </div>

               <SearchIcon className="font-bold text-[--main-color] text-[22px] cursor-pointer" />
            </nav>

            <MenuIcon
               className="block md:hidden font-bold text-[--main-color] text-[22px] cursor-pointer"
               onClick={() => setOpenDrawer(!openDrawer)}
            />
         </header>
         <Drawer
            size={"full"}
            placement="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
         >
            <Drawer.Header closeButton={false}>
               <Drawer.Title className="flex justify-between items-center">
                  {" "}
                  <Logo />
                  <CloseIcon onClick={() => setOpenDrawer(false)} />
               </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body className="px-6">
               <nav className="flex flex-col items-center gap-[40px] grow">
                  {links.map((link) => (
                     <Link
                        key={link.name}
                        href={link.path}
                        className="block w-full text-center underline-none font-semibold text-[--main-color] text-[18px] hover:text-[--alt-color] transition-all duration-300 px-2 pb-[20px] border-b border-[#e5e5e5]"
                     >
                        {link.name}
                     </Link>
                  ))}
               </nav>
            </Drawer.Body>
         </Drawer>
      </>
   );
}

export default Header;
