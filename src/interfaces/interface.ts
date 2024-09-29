export interface IPatient {
   id: number;
   name: string;
   phoneNumber: string;
   bookingType: "Pre Booking" | "Direct Booking" | "Emergency Case" | "";
   date: Date;
   bloodType: string;
}
