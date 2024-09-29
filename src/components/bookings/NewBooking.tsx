"use client";
import Image from "next/image";
import React from "react";
import { DatePicker, Input, InputPicker, Message, useToaster } from "rsuite";
import LandingBookingImage from "../../../public/assets/mobile.f82d73222992d2101a09.png";
import LandingBookingImage2 from "../../../public/assets/women.eb5c49c523f7d6240d33.png";
import image1 from "../../../public/assets/download (7).png";
import image2 from "../../../public/assets/download (8).png";
import image3 from "../../../public/assets/download (9).png";
import image4 from "../../../public/assets/download (10).png";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IPatientForm {
   name: string;
   phoneNumber: string;
   bookingType: "Pre Booking" | "Direct Booking" | "Emergency Case" | "";
   date: Date;
   bloodType: string;
}

function NewBooking() {
   const toaster = useToaster();

   const images = [
      {
         id: 1,
         src: image1,
         className:
            "hidden sm:block absolute top-[50%] left-[50px] translate-x-[50%] animate__customTranslate",
         width: 70,
         hieght: 70,
         alt: "image-1",
      },
      {
         id: 2,
         src: image2,
         className:
            "absolute bottom-[50px] left-[50%] z-[-1]  animate__customTranslate-2",
         width: 80,
         hieght: 80,
         alt: "image-2",
      },
      {
         id: 3,
         src: image3,
         className: "absolute top-[20%] left-[0px] ",
         width: 60,
         hieght: 60,
         alt: "image-3",
      },
      {
         id: 4,
         src: image4,
         className: "absolute top-[0px] right-[0] animate__customTranslate-2",
         width: 100,
         hieght: 100,
         alt: "image-4",
      },
   ];

   const bookingsTypes = [
      "Pre Booking",
      "Direct Booking",
      "Emergency Case",
   ].map((item) => ({ label: item, value: item }));

   const bookingValidationSchema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
      bookingType: Yup.string()
         .oneOf(["Pre Booking", "Direct Booking", "Emergency Case", ""])
         .required("Booking Type is required"),
      date: Yup.date()
         .typeError("Please enter a valid date")
         .test("date", "You Can not Add A Past Date", (value, context) => {
            let selectedDate = value;
            let curruntDate = new Date();
            return (
               selectedDate &&
               Math.floor(curruntDate.getTime() / 60000) <=
                  Math.floor(selectedDate.getTime() / 60000)
            );
         })
         .required("Date is required"),
      bloodType: Yup.string().required("Blood Type is required"),
   });

   const {
      handleSubmit,
      register,
      setValue,
      formState: { errors },
      reset,
   } = useForm<IPatientForm>({
      resolver: yupResolver(bookingValidationSchema),
      defaultValues: {
         name: "",
         phoneNumber: "",
         bookingType: "",
         date: new Date(),
         bloodType: "",
      },
   });

   const submitBooking: SubmitHandler<IPatientForm> = (data: any) => {
      if (data.bookingType === "Emergency Case") {
         localStorage.setItem("currentPatient", JSON.stringify(data));
      } else if (data.bookingType === "Pre Booking") {
         let patients = localStorage.getItem("preBooking");
         if (patients) {
            const newPatients = JSON.parse(patients);
            let id =
               newPatients.length > 0
                  ? newPatients[newPatients.length - 1].id + 1
                  : 1;
            newPatients.push({ id, ...data });
            localStorage.setItem("preBooking", JSON.stringify(newPatients));
         } else {
            let id = 1;
            const newPatient = { id, ...data };
            localStorage.setItem("preBooking", JSON.stringify([newPatient]));
         }
      } else if (data.bookingType === "Direct Booking") {
         let patients = localStorage.getItem("directBooking");
         if (patients) {
            const newPatients = JSON.parse(patients);
            let id =
               newPatients.length > 0
                  ? newPatients[newPatients.length - 1].id + 1
                  : 1;
            newPatients.push({ id, ...data });
            localStorage.setItem("directBooking", JSON.stringify(newPatients));
         } else {
            let id = 1;
            const newPatient = { id, ...data };
            localStorage.setItem("directBooking", JSON.stringify([newPatient]));
         }
      }
      reset();
      setValue("date", new Date());
      toaster.push(message, { placement: "bottomEnd", duration: 5000 });
   };

   const message = (
      <Message showIcon type={"success"} closable>
         Appointment Has Been Booked Successfully.
      </Message>
   );

   return (
      <section className="relative my-[80px]">
         <main className="px-[10px] sm:px-[30px]">
            <div className="bg-[#f5f5fc] rounded-[40px] relative z-[1]">
               <div className="flex items-center justify-center flex-wrap p-[10px] sm:p-[50px] ">
                  <div className="grow max-w-[400px] min-h-[580px] border border-[--btn-color] rounded-[20px]">
                     <div className="sm:ml-[15px] sm:mt-[15px] h-full sm:h-[calc(100%_+_25px)]  bg-white w-full sm:w-[415px] px-[15px] sm:px-[30px] py-[30px] rounded-[20px] flex flex-col">
                        <h3 className="text-[26px] text-[--main-color] font-bold text-center">
                           Book Appointment
                        </h3>
                        <form
                           className="mt-[30px]"
                           onSubmit={handleSubmit(submitBooking)}
                        >
                           <Input
                              placeholder="Full Name"
                              className="my-[10px] py-3"
                              {...register("name")}
                              onChange={(value) => setValue("name", value)}
                              style={{
                                 borderColor: errors.name && "red",
                              }}
                           />
                           <p className="text-red-400">
                              {errors.name && errors.name.message}
                           </p>
                           <Input
                              placeholder="Phone  Number"
                              className="my-[10px] py-3"
                              {...register("phoneNumber")}
                              onChange={(value) =>
                                 setValue("phoneNumber", value)
                              }
                              style={{
                                 borderColor: errors.phoneNumber && "red",
                              }}
                           />
                           <p className="text-red-400">
                              {errors.phoneNumber && errors.phoneNumber.message}
                           </p>
                           <Input
                              placeholder="Blood Type"
                              className="my-[10px] py-3"
                              {...register("bloodType")}
                              onChange={(value) => setValue("bloodType", value)}
                              style={{
                                 borderColor: errors.bloodType && "red",
                              }}
                           />

                           <p className="text-red-400">
                              {errors.bloodType && errors.bloodType.message}
                           </p>
                           <InputPicker
                              placeholder="Booking type"
                              data={bookingsTypes}
                              className="my-[10px] py-3 w-full"
                              size="sm"
                              {...register("bookingType")}
                              onChange={(value) =>
                                 setValue("bookingType", value)
                              }
                              style={{
                                 borderColor: errors.bookingType && "red",
                              }}
                           />
                           <p className="text-red-400">
                              {errors.bookingType && errors.bookingType.message}
                           </p>
                           <DatePicker
                              format="yyyy-MM-dd HH:mm"
                              placeholder="Booking Date"
                              className="my-[10px] py-4 w-full"
                              size="lg"
                              {...register("date")}
                              onChange={(value) =>
                                 value && setValue("date", value)
                              }
                              style={{
                                 borderColor: errors.date && "red",
                              }}
                           />
                           <p className="text-red-400">
                              {errors.date && errors.date.message}
                           </p>

                           <button
                              className="mt-[30px] text-[18px] mx-auto w-fit px-7 py-3 flex items-center justify-center rounded-[10px] text-white bg-[--alt-color]"
                              type="submit"
                           >
                              Appointment Now
                           </button>
                        </form>
                     </div>
                  </div>
                  <div className="grow sm:ml-[50px] relative w-[400px] mt-[50px]">
                     <Image
                        src={LandingBookingImage}
                        width={600}
                        height={800}
                        alt="moile-image"
                        className="max-w-full"
                     />
                     <Image
                        src={LandingBookingImage2}
                        width={230}
                        height={230}
                        alt="moile-image"
                        className="absolute right-0 bottom-[20px] w-[40%] max-w-[260px] animate__customTranslate-2"
                     />

                     {images.map((image) => (
                        <Image
                           key={image.id}
                           src={image.src}
                           width={image.width}
                           height={image.hieght}
                           alt={image.alt}
                           className={image.className}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </main>
      </section>
   );
}

export default NewBooking;
