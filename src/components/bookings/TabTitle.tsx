import React from "react";

function TabTitle({ title }: { title: string }) {
   return (
      <h4 className="text-[24px] sm:text-[28px] font-bold text-[--btn-color] hover:text-[--alt-color] transition-all duration-300 text-center px-[20px] mt-[20px] md:mt-[40px]">
         {title}
      </h4>
   );
}

export default TabTitle;
