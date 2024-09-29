import React, { useEffect, useState } from "react";
import TabTitle from "./TabTitle";
import PatientCard from "./PatientCard";
import { IPatient } from "@/interfaces/interface";
import HandleEmptyData from "./HandleEmptyData";

function CurrentPatient({ isClicked }: { isClicked: boolean }) {
   const [patient, setPatient] = useState<IPatient | null>(null);

   useEffect(() => {
      if (typeof localStorage !== "undefined") {
         const currentPatient = localStorage.getItem("currentPatient");
         currentPatient && setPatient(JSON.parse(currentPatient));
      }
   }, [isClicked]);

   return (
      <main>
         <TabTitle title="Current Patinint" />
         {patient ? (
            <div className="mt-[80px] px-[40px] flex justify-center items-center">
               <PatientCard data={patient} setCurrentPatient={setPatient} />
            </div>
         ) : (
            <HandleEmptyData />
         )}
      </main>
   );
}

export default CurrentPatient;
