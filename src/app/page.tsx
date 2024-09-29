import Image from "next/image";
import heroSectionImage from "../../public/assets/doctor.7c2bc96d67d3eba1d64a.png";
import Header from "@/components/header/Header";
import HeroSectionImages from "@/components/hero-images/HeroSectionImages";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";

export default function Home() {
   return (
      <>
         <section className="relative hero h-[1000px] md:h-[130vh]">
            <Header />
            <main className="relative py-[50px] md:py-0 flex bg-transparent min-h-[calc(100vh_-_75px)] px-[30px] md:px-[50px]  items-center gap-y-[40px] gap-x-[70px] flex-col md:flex-row">
               <div className="text-[--main-color]">
                  <h3 className="special-heading text-[16px] md:text-[20px] ">
                     We Provide All Health Care Solution
                  </h3>
                  <h4 className="text-[30px] md:text-[40px] font-bold my-[20px] leading-[1.6]">
                     Protect Your Health And Take Care To Of Your Health
                  </h4>
                  <button className="animate__animated animate__bounce w-[120px] h-[45px] md:w-[180px] md:h-[50px] text-center flex items-center justify-center mt-10  text-white rounded-[10px] bg-[--alt-color] p-4 shadow-[0_5px_20px_0_rgba(241,119,50,10.3)]">
                     Read More
                  </button>
               </div>
               <div className="grow basis-[50%] animate__customTranslate">
                  <Image
                     src={heroSectionImage}
                     width={400}
                     height={200}
                     alt="hero"
                  />
               </div>
               <HeroSectionImages />
            </main>
         </section>
         <div className="pt-[60px]">
            <About />
         </div>

         <Footer />
      </>
   );
}
