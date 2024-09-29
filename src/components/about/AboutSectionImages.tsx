import Image from "next/image";
import React from "react";
import image1 from "../../../public/assets/download (12).png";
import image2 from "../../../public/assets/download (2).png";
import image3 from "../../../public/assets/download (13).png";
import image4 from "../../../public/assets/download (4).png";
function AboutSectionImages() {
   const images = [
      {
         id: 1,
         src: image1,
         className: "absolute bottom-0 left-[60%]",
         width: 50,
         hieght: 50,
         alt: "image-1",
      },
      {
         id: 2,
         src: image2,
         className:
            "hidden sm:block absolute left-[10px] bottom-[40%] md:bottom-[10px] z-[-1] animate__customTranslate-2",
         width: 80,
         hieght: 80,
         alt: "image-5",
      },
      {
         id: 3,
         src: image3,
         className:
            "hidden sm:block absolute bottom-[40%] right-0  md:bottom-[-20px] md:right-[10%] z-[-1]  animate__customTranslate-2",
         width: 100,
         hieght: 100,
         alt: "image-3",
      },
      {
         id: 4,
         src: image4,
         className:
            "absolute left-2 sm:left-[100px] top-[-20px] lg:top-[30px] z-[-1] animate__customTranslate",
         width: 80,
         hieght: 80,
         alt: "image-3",
      },
      {
         id: 5,
         src: image4,
         className:
            "absolute top-[-35px] right-[20%] md:top-0 md:right-[10%] z-[-1] animate__customRotation",
         width: 80,
         hieght: 80,
         alt: "image-4",
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
   return <div></div>;
}

export default AboutSectionImages;
