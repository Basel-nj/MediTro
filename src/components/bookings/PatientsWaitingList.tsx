import React, { useEffect, useState } from "react";
import TabTitle from "./TabTitle";
import PatientCard from "./PatientCard";
import { IPatient } from "@/interfaces/interface";
import HandleEmptyData from "./HandleEmptyData";

function PatientsWaitingList() {
   const [patients, setPatients] = useState<IPatient[] | null>(null);

   useEffect(() => {
      if (typeof localStorage !== "undefined") {
         const directBooking = localStorage.getItem("directBooking");
         directBooking && setPatients(JSON.parse(directBooking));
      }
   }, []);

   return (
      <main>
         <TabTitle title="Patients Waiting List" />
         <div className="mt-[40px] md:mt-[60px] flex items-center gap-[20px] md:gap-[25px] flex-wrap">
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

export default PatientsWaitingList;
