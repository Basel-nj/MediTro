import Link from "next/link";
import React from "react";

function HandleEmptyData() {
   return (
      <div className="mx-auto mt-[50px] px-[40px] flex justify-center items-center flex-col gap-3">
         <h1 className="text-[20px] md:text-[30px]">No Patient Found</h1>
         <Link
            href="/new-booking"
            className="block text-[--btn-color] text-[20px] hover:text-[--alt-color]"
         >
            Add A Patient Booking
         </Link>
      </div>
   );
}

export default HandleEmptyData;
