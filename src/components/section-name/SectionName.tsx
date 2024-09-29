"use client";
import React from "react";
import Header from "../header/Header";
import { Breadcrumb } from "rsuite";
import Image from "next/image";
import image1 from "../../../public/assets/section-title-image-1.png";
import image2 from "../../../public/assets/section-title-image-2.png";

function SectionName({ pageName }: { pageName: string }) {
   const images = [
      {
         id: 1,
         src: image1,
         className:
            "absolute top-[25%] right-[30px] sm:right-[80px] animate__customRotation",
         width: 80,
         hieght: 80,
         alt: "image-1",
      },
      {
         id: 2,
         src: image2,
         className:
            "absolute bottom-0 left-[30px] sm:bottom-[25%] sm:left-[120px] animate__customTranslate-2",
         width: 120,
         hieght: 120,
         alt: "image-2",
      },
   ];

   return (
      <header className="relative main-title-section h-[400px]">
         <Header />
         <div className="flex items-center justify-center pt-[100px] pb-[40px]">
            <h3 className="text-[60px] font-bold text-center text-[--main-color]">
               {pageName}
            </h3>
         </div>

         <div className="mx-auto min-w-fit w-[240px] h-[50px]  bg-[--btn-color] rounded-[10px] shadow-[0_5px_30px_0_rgba(86,90,207,0.3)] px-[30px] py-[12px] cursor-pointer">
            <Breadcrumb className="text-white text-[16px]">
               <Breadcrumb.Item href="/" className="!hover:text-[--alt-color]">
                  <div className="flex items-center gap-4">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-home"
                     >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                     </svg>
                     <span>Home</span>
                  </div>
               </Breadcrumb.Item>
               <Breadcrumb.Item
                  active
                  className="text-white hover:text-[--alt-color]"
               >
                  {pageName}
               </Breadcrumb.Item>
            </Breadcrumb>
         </div>

         {images.map((image) => (
            <Image
               key={image.id}
               src={image.src}
               className={image.className}
               alt={image.alt}
               width={image.width}
               height={image.hieght}
            />
         ))}
      </header>
   );
}

export default SectionName;
