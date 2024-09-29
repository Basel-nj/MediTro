"use client";
import React from "react";
import TimeIcon from "@rsuite/icons/Time";
import AdminIcon from "@rsuite/icons/Admin";
import WavePointIcon from "@rsuite/icons/WavePoint";
import DocPassIcon from "@rsuite/icons/DocPass";

function AboutServices() {
   const services = [
      {
         id: 1,
         icon: <TimeIcon className="text-[30px] mx-2" />,
         title: "24 Hours Service",
         color: "#b2f0fb",
      },
      {
         id: 2,
         icon: <AdminIcon className="text-[30px] mx-2" />,
         title: "Professional Doctors",
         color: "#a4fcc4",
      },
      {
         id: 3,
         icon: <WavePointIcon className="text-[30px] mx-2" />,
         title: "Emergency Help",
         color: "#ffbdbc",
      },
      {
         id: 4,
         icon: <DocPassIcon className="text-[30px] mx-2" />,
         title: "Organize Appointments",
         color: "#e2c4ff",
      },
   ];

   return (
      <div className="flex items-center gap-[30px] flex-wrap my-[50px]">
         {services.map((service) => (
            <div
               key={service.id}
               className="flex justify-end items-center rounded-lg min-w-[225px] h-[55px] grow sm:w-[calc(50%_-_15px)] border overflow-hidden relative group cursor-pointer"
               style={{
                  borderColor: service.color,
               }}
            >
               <div
                  className="w-[85px] h-[85px] absolute top-[-16px] left-[-10px] rounded-[50%] flex justify-center items-center "
                  style={{
                     backgroundColor: service.color,
                  }}
               >
                  {service.icon}
               </div>
               <p className="text-center w-[calc(100%_-_85px)] text-[--btn-color] font-bold px-2 py-4 md:text-[18px] group-hover:text-[--alt-color] transition-all duration-300">
                  {service.title}
               </p>
            </div>
         ))}
      </div>
   );
}

export default AboutServices;
