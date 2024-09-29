"use client";

import React from "react";
import image1 from "../../../public/assets/download (1).png";
import image2 from "../../../public/assets/download (2).png";
import image3 from "../../../public/assets/download (3).png";
import image4 from "../../../public/assets/download (4).png";
import image5 from "../../../public/assets/download (5).png";
import Image from "next/image";

function HeroSectionImages() {
   const images = [
      {
         id: 1,
         src: image1,
         className: "absolute bottom-0 left-[40%]",
         width: 80,
         hieght: 80,
         alt: "image-1",
      },
      {
         id: 2,
         src: image2,
         className:
            "absolute bottom-[60px] right-0 sm:right-[20%] md:bottom-[50px] md:right-[10%] z-[-1]  animate__customTranslate-2",
         width: 80,
         hieght: 80,
         alt: "image-2",
      },
      {
         id: 3,
         src: image3,
         className: "absolute left-[100px] top-0 lg:top-[70px]",
         width: 40,
         hieght: 40,
         alt: "image-3",
      },
      {
         id: 4,
         src: image4,
         className:
            "absolute top-[-35px] right-[20%] md:top-2 md:right-[40%] animate__customTranslate",
         width: 80,
         hieght: 80,
         alt: "image-4",
      },
      {
         id: 5,
         src: image5,
         className:
            "absolute left-0 top-[40%] md:top-[70%] z-[-1] animate__customTranslate",
         width: 80,
         hieght: 80,
         alt: "image-5",
      },
   ];
   return (
      <>
         {images.map((image) => (
            <Image
               key={image.id}
               src={image.src}
               className={image.className}
               alt={image.alt}
               width={image.width}
               height={image.hieght}
            />
         ))}
      </>
   );
}

export default HeroSectionImages;
