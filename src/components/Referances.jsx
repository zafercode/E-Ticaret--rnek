import React from "react";
import Sap from "../assets/sap.png";
import Veeam from "../assets/Veeam.png";
import Ticimax from "../assets/ticimax.png";
import Microsoft from "../assets/microsoft-procollec.png";
import Hpe from "../assets/hpe_procollec.png";
import LogoProcollec from "../assets/logo-procollec.png";
import Aruba from "../assets/aruba-procollec.png";
import Wmware from "../assets/vmware-png-logo.png";

const Referances = () => {
  return (
    <div className="relative max-w-[1400px] w-full h-[400px] p-5">
      <div>
        <h1 className="flex justify-center text-[#15284B] text-xl md:text-3xl font-bold">
          Türkiye'nin E-ticaret Yazılımını Tercih Ettiler!
        </h1>
        <p className="flex text-sm justify-center mt-4 md:text-base">
          Binlerce işletme, e-ticaret sitesini Procollec'e emanet etti. Onlar
          işlerine bakarken, biz altyapımızı her gün geliştiriyoruz.
        </p>
      </div>
      <div className="flex justify-center mx-auto my-20">
        <div></div>
        <img className="flex object-contain justify-between px-16" src={Sap} alt="/" />
        <img className="flex object-contain justify-between px-16" src={Veeam} alt="/" />
        <img className="flex object-contain justify-between px-16" src={Ticimax} alt="/" />
        <img className="flex object-contain justify-between px-16" src={Microsoft} alt="/" />
      </div>
      <div className="flex justify-center items-center mx-auto my-20">
        <img className="flex object-contain justify-between px-16" src={Hpe} alt="/" />
        <img className="flex object-contain justify-between px-16" src={LogoProcollec}alt="/"/>
        <img className="flex object-contain justify-between px-16" src={Aruba} alt="/" />
        <img className="flex object-contain justify-between px-16" src={Wmware} alt="/" />
      </div>
    </div>
  );
};

export default Referances;
