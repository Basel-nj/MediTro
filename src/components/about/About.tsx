import React from "react";
import image1 from "../../../public/assets/pic-1.ad1ed7ee8284087fe9ee.jpg";
import image2 from "../../../public/assets/pic-2.0593bc2fd8a13cf8c19f.jpg";
import image3 from "../../../public/assets/pic-3.fa689b1037dbf69567a3.jpg";
import Image from "next/image";
import AboutServices from "./AboutServices";
import AboutSectionImages from "./AboutSectionImages";

function About() {
   return (
      <main className="relative flex gap-[20px] flex-col lg:flex-row h-full w-full px-3 md:px-[50px]">
         <div className="relative grow min-w-[45%]">
            <ul className="flex flex-wrap">
               <li className="inline-flex px-[10px] mb-[20px] w-[40%]">
                  <Image
                     src={image1}
                     width={350}
                     height={350}
                     alt=""
                     className=" rounded-[0_30px_30px] md:rounded-[0_60px_60px] ml-auto mt-auto w-full"
                  />
               </li>
               <li className="inline-flex px-[10px] mb-[20px] w-[55%]">
                  <Image
                     src={image2}
                     width={350}
                     height={350}
                     alt=""
                     className="rounded-[30px_0_30px_30px] md:rounded-[60px_0_60px_60px] mr-auto mt-auto w-full"
                  />
               </li>
               <li className="inline-flex px-[10px] mb-[20px] w-[40%]">
                  <Image
                     src={image3}
                     width={200}
                     height={200}
                     alt=""
                     className="rounded-[30px_30px_30px_0] md:rounded-[60px_60px_60px_0] ml-auto mb-auto "
                  />
               </li>
               <li className="inline-flex px-[10px] mb-[20px] w-[60%]">
                  <div
                     className="bg-[#e6e7ff] rounded-[30px_30px_0_30px] md:rounded-[60px_60px_0_60px] text-[#565acf] block text-[120px] font-bold leading-[75px] px-0 pt-[60px] pb-[30px] relative text-center w-[220px] z-[2] 
                     after:border-[2px] after:border-[#565acf] after:rounded-[30px_30px_0_30px] md:after:rounded-[60px_60px_0_60px] after:h-full after:left-[10px] after:absolute after:top-[10px] after:w-full after:z-[-1]"
                  >
                     20
                     <span className="text-[--main-color] block text-[18px]">
                        Year Experience
                     </span>
                  </div>{" "}
               </li>
            </ul>
         </div>
         <div className="grow ">
            <h3 className="special-heading-orange">About Us</h3>
            <h4 className="text-[32px] md:text-[44px] text-[--main-color] font-bold my-[30px] leading-[1.5]">
               The Great Place Of Medical Hospital Center
            </h4>
            <p className="leading-[24px] text-[#333]">
               We provide the special tips and advice’s of heath care treatment
               and high level of best technology involve in the our hospital.
            </p>

            <AboutServices />
         </div>
         <AboutSectionImages />
      </main>
   );
}

export default About;
