"use clinet";
import React, { useState } from "react";
import CalendarIcon from "@rsuite/icons/Calendar";
import PhoneFillIcon from "@rsuite/icons/PhoneFill";
import DragableIcon from "@rsuite/icons/Dragable";
import { Message, useToaster } from "rsuite";
import { IPatient } from "@/interfaces/interface";

function formatISO8601ToReadable(timestamp: Date) {
   const date = new Date(timestamp);
   const year = date.getFullYear();
   const month = String(date.getMonth() + 1).padStart(2, "0");
   const day = String(date.getDate()).padStart(2, "0");
   return `${year}-${month}-${day} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
}

function PatientCard({
   data,
   setData,
   setCurrentPatient,
}: {
   data: IPatient;
   setData?: React.Dispatch<React.SetStateAction<IPatient[] | null>>;
   setCurrentPatient?: React.Dispatch<React.SetStateAction<IPatient | null>>;
}) {
   const toaster = useToaster();

   const handleRemovePatinet = (patientToRemove: IPatient) => {
      if (typeof localStorage !== "undefined") {
         const preBooking = localStorage.getItem("preBooking");
         const patients = preBooking && JSON.parse(preBooking);
         const filteredPatients = patients.filter((patient: IPatient) => {
            return patientToRemove.id !== patient.id;
         });

         setData && setData(filteredPatients as IPatient[]);
         localStorage.setItem("preBooking", JSON.stringify(filteredPatients));
         toaster.push(removeBookingMessage, {
            placement: "bottomEnd",
            duration: 5000,
         });
      }
   };

   const handleTreatment = (patientToTreatment: IPatient) => {
      if (typeof localStorage !== "undefined") {
         const currentPatient = { ...patientToTreatment, bookingType: "" };
         localStorage.setItem("currentPatient", JSON.stringify(currentPatient));
         setCurrentPatient && setCurrentPatient(currentPatient as IPatient);
         const directBooking = localStorage.getItem("directBooking");
         const patients = directBooking && JSON.parse(directBooking);
         const filteredPatients = patients.filter((patient: IPatient) => {
            return patientToTreatment.id !== patient.id;
         });

         setData && setData(filteredPatients as IPatient[]);

         localStorage.setItem(
            "directBooking",
            JSON.stringify(filteredPatients)
         );
         toaster.push(removingToTreatmentMessage, {
            placement: "bottomEnd",
            duration: 5000,
         });
      }
   };

   const removeBookingMessage = (
      <Message showIcon type={"success"} closable>
         The Appointment Has Been Removed Successfully
      </Message>
   );

   const removingToTreatmentMessage = (
      <Message showIcon type={"success"} closable>
         The Patient Was Taken To The Treatment Room.{" "}
      </Message>
   );

   return (
      <div className="shadow-md p-[20px] border border-[--alt-color] rounded-lg w-full max-w-[390px]">
         <div className="flex items-center gap-3 mb-[15px]">
            <h4 className="text-[22px] font-semibold grow">{data.name}</h4>
            <p className="text-[--btn-color] font-bold">{data.bloodType}</p>
         </div>

         <div className="flex items-center w-fit gap-3 mb-[15px]">
            <CalendarIcon className="text-[--alt-color] text-[18px]" />
            <p className="text-[--alt-color] text-[15px]">
               {formatISO8601ToReadable(data.date)}
            </p>
         </div>

         <div className="flex items-center w-fit gap-3 mb-[15px]">
            <PhoneFillIcon className="text-[--alt-color] text-[18px]" />
            <p className="text-black text-[15px]">{data.phoneNumber}</p>
         </div>

         <div className="flex justify-between mt-[30px]">
            {data.bookingType === "Direct Booking" && (
               <button
                  className="w-fit py-2 px-4 rounded-md bg-[--btn-color] text-white text-[16px] text-center"
                  onClick={() => handleTreatment(data)}
               >
                  Treatment
               </button>
            )}

            {data.bookingType === "Pre Booking" && (
               <button
                  className="w-fit py-2 px-4 rounded-md bg-[--btn-color] text-white text-[16px] text-center"
                  onClick={() => handleRemovePatinet(data)}
               >
                  Remove
               </button>
            )}

            <div className="ml-auto flex items-center w-fit gap-3 justify-self-end">
               <DragableIcon className="text-[--alt-color] text-[18px]" />
               <p className="text-black text-[15px]">
                  {data.bookingType ? data.bookingType : "Current Patinint"}
               </p>
            </div>
         </div>
      </div>
   );
}

export default PatientCard;
