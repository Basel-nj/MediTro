"use client";
import Footer from "@/components/footer/Footer";
import SectionName from "@/components/section-name/SectionName";
import React, { useState } from "react";
import { Tabs } from "rsuite";
import PatientsWaitingList from "@/components/bookings/PatientsWaitingList";
import IncomingPatients from "@/components/bookings/IncomingPatients";
import CurrentPatient from "@/components/bookings/CurrentPatient";
import Link from "next/link";

function Bookings() {
   const [isClicked, setIsClicked] = useState(false);

   return (
      <section>
         <SectionName pageName="Bookings" />
         <div className="px-[10px] md:px-[60px] mt-[60px] relative">
            <div className="mb-[30px] md:m-0 flex justify-center md:justify-end px-3 md:w-fit md:absolute top-[2px] right-3 z-10">
               <Link
                  href="/new-booking"
                  className="grow max-w-[400px] flex items-center justify-center rounded-[16px] md:rounded-[10px] bg-[--btn-color] py-3 md:py-2 px-5 w-fit text-white text-[16px] hover:scale-105 transition-all duration-300 hover:text-white"
               >
                  New Booking
               </Link>
            </div>

            <Tabs
               defaultActiveKey="1"
               className="text-[16px] sm:text-[22px]"
               onSelect={() => setIsClicked(!isClicked)}
            >
               <Tabs.Tab
                  eventKey="1"
                  title={
                     <p>
                        <span className="hidden sm:inline">Patients </span>
                        Waiting
                     </p>
                  }
               >
                  <PatientsWaitingList />
               </Tabs.Tab>
               <Tabs.Tab
                  eventKey="2"
                  title={
                     <p>
                        <span className="hidden sm:inline">Patients </span>
                        Incoming
                     </p>
                  }
               >
                  <IncomingPatients />
               </Tabs.Tab>
               <Tabs.Tab eventKey="3" title="Current Patinint">
                  <CurrentPatient isClicked={isClicked} />
               </Tabs.Tab>
            </Tabs>
         </div>

         <Footer />
      </section>
   );
}

export default Bookings;
