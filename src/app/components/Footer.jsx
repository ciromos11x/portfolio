import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image src="/images/utility/CIMO.png" width={200} height={100} alt='logo'/>
        <p className="text-slate-600">Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;
