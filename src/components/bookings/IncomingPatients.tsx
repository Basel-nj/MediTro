import React, { useEffect, useState } from "react";
import TabTitle from "./TabTitle";
import PatientCard from "./PatientCard";
import { IPatient } from "@/interfaces/interface";
import HandleEmptyData from "./HandleEmptyData";

function IncomingPatients() {
   const [patients, setPatients] = useState<IPatient[] | null>(null);

   useEffect(() => {
      if (typeof localStorage !== "undefined") {
         const preBooking = localStorage.getItem("preBooking");
         preBooking && setPatients(JSON.parse(preBooking));
      }
   }, []);

   return (
      <main>
         <TabTitle title="Incoming Patients " />
         <div className="mt-[20px] md:mt-[60px] flex items-center gap-[20px] md:gap-[25px] flex-wrap">
            {patients && patients.length > 0 ? (
               patients.map((patient) => (
                  <PatientCard
                     key={patient.id}
                     data={patient}
                     setData={setPatients}
                  />
               ))
            ) : (
               <HandleEmptyData />
            )}
         </div>
      </main>
   );
}

export default IncomingPatients;
