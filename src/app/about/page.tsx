import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import SectionName from "@/components/section-name/SectionName";
import React from "react";

function AboutPage() {
   return (
      <section>
         <SectionName pageName="About Us" />
         <div className="mt-[80px]">
            <About />
         </div>
         <Footer />
      </section>
   );
}

export default AboutPage;
