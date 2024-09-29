import React from "react";

function Footer() {
   const date = new Date();
   return (
      <footer className="h-[70px]  mt-[90px]">
         <p className="w-[90%] border-t text-[16px] border-[--btn-color] py-[20px] mx-auto text-center">
            Copyright &copy; {date.getFullYear()} Design & Developed by{" "}
            <span className="text-[--alt-color]">Basel </span>
         </p>
      </footer>
   );
}

export default Footer;
