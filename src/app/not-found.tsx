import Footer from "@/components/footer/Footer";
import SectionName from "@/components/section-name/SectionName";
import Link from "next/link";
import React from "react";

function NotFoundPage() {
   return (
      <section className="relative">
         <SectionName pageName="Page Not Found" />

         <main className="mx-[20px] py-[50px] flex items-center justify-center flex-col gap-[20px]">
            <h3 className="font-bold text-[130px] md:text-[180px] leading-[180px] md:mb-[15px] text-[--main-color]">
               4
               <span className="pageNotFound w-[100px] md:w-[145px] aspect-square" />
               4
            </h3>
            <h4 className="text-[--main-color] text-[32px] md:text-[40px] min-w-[200px] max-w-[600px] text-center leading-[1.6] font-bold">
               The Page you were looking for, couldn't be found.
            </h4>
            <p className="mb-[10px] min-w-[200px] max-w-[600px] text-center leading-[1.6] font-bold">
               The page you are looking for might have been removed, had its
               name changed, or is temporarily unavailable.
            </p>
            <Link
               href="/"
               className="block text-white bg-[--btn-color] py-3 px-7 rounded-lg text-center my-[10px] hover:text-white"
            >
               Back To Home
            </Link>
         </main>
         <Footer />
      </section>
   );
}

export default NotFoundPage;
