import React from "react";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="flex bg-red-500 p-6 gap-3">
    <Link href="\">home page</Link>
    <Link href="\about">About</Link>
    <Link href="\adress">Adress</Link>

    </div>
     )
    }
    export default Footer