import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";

function Logo() {
   return (
      <Link href="/">
         <Image src={logo} width={170} height={50} alt="logo" />
      </Link>
   );
}

export default Logo;
