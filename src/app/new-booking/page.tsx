import NewBooking from "@/components/bookings/NewBooking";
import Footer from "@/components/footer/Footer";
import SectionName from "@/components/section-name/SectionName";
import React from "react";

function NewBookingPage() {
   return (
      <section>
         <SectionName pageName="New Booking" />
         <NewBooking />
         <Footer />
      </section>
   );
}

export default NewBookingPage;
