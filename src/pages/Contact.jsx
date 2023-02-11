import React, { useState } from "react";
import ComImg from "../assets/tower.jpeg";
import { IoCallSharp } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import Modal from "../components/Modal";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [show, toggleShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="contactouteline bg-[#E7EAEE] mt-12">
        <div className="container m-auto">
          <div className="contact-head">
            <h1 className="text-[#14284B] text-center text-2xl font-extrabold py-[40px] pt-20">
              İletişim
            </h1>
          </div>
          <div class="grid grid-cols-2 gap-2 max-[600px]:grid-cols-1 lg:px-[160px]">
            <div className="contact-form w-full p-5">
              <form action="" className="rounded">
                <input
                  type="name"
                  name=""
                  id="name"
                  placeholder="Firma Adı.."
                  className="shadow appearance-none border rounded w-full mb-4 py-3 px-3 focus:outline-none focus:shadow-outline text-start text-[#14284B]"
                />
                <input
                  type="name"
                  name=""
                  id="name"
                  placeholder="Yetkili Kişi.."
                  className="shadow appearance-none border rounded w-full mb-4 py-3 px-3 focus:outline-none focus:shadow-outline text-start text-[#14284B]"
                />
                <input
                  type="phone"
                  name=""
                  id="phone"
                  placeholder="Telefon Numarası.."
                  className="shadow appearance-none border rounded w-full mb-4 py-3 px-3 focus:outline-none focus:shadow-outline text-start text-[#14284B]"
                />
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="Email.."
                  className="shadow appearance-none border rounded w-full mb-4 py-4 px-3 focus:outline-none focus:shadow-outline text-start text-[#14284B]"
                />
                <textarea
                  type="text"
                  name=""
                  id="message"
                  placeholder="Mesaj\Not.."
                  className="shadow border rounded w-full h-[120px] mb-4  px-3 focus:outline-none focus:shadow-outline text-start text-[#14284B]"
                ></textarea>
              </form>
              <div className="kvkk px-1 ">
                <div className="kvkkinfo">
                  <p className="text-sm">
                    Şirketimizin gizlilik ve güvenlik politikaları çerçevesinde
                    sağladığınız kişisel verilerin, Ticimax Aydınlatma Metninde
                    yer alan değerler ile sınırlı ve ölçülü olmak kaydı ile
                    rızanıza dayanarak
                  </p>
                  {show && (
                    <p className="text-sm">
                      {" "}
                      işlenebileceğini ve “Formu Gönder” butonuna basarak
                      kişisel verilerinizin Aydınlatma Metninde belirtilen
                      kapsamlarda işlenmesine izin vermiş olacağınızı
                      hatırlatmak isteriz.
                      <br />
                      <br />
                      Kişisel verileriniz işlenmesine ilişkin detaylı bilgiye
                      ulaşmak için
                      <a href="" className="underline" target="_blank">
                        {" "}
                        Ticimax Kişisel Verilerin Korunmasına Yönelik Aydınlatma
                        ve Gizlilik Politikamızı{" "}
                      </a>
                      inceleyebilirsiniz.
                    </p>
                  )}
                </div>
                <div className="kvkkbtn">
                  <a
                    className="text-[14px] text-[#428bca] cursor-pointer underline ml-5"
                    onClick={() => toggleShow(!show)}
                  >
                    {show ? "Kısalt" : "Devamını Oku"}
                  </a>
                </div>
              </div>
              <button className="bg-[#00c753] hover:bg-[#009d42] text-white text-center p-2 w-full mt-2">
                Formu Gönder
              </button>
            </div>
            <div className="rightblock p-5 w-full">
              <div className="contactblock">
                <div className="blockhead w-full h-[521px] rounded-md bg-cover bg-[#15284b] text-[#fff]">
                  <p className="blocktitle1 font-semibold p-8 text-4xl">
                    Genel Merkez
                  </p>
                  <p className="blocktitle1 font-normal pl-8 text-2xl">
                    Quick Tower
                  </p>
                  <ul className="list-none pl-8 mt-5">
                    <li className="hover:underline p-1 flex cursor-pointer pt-2">
                      <IoCallSharp size={32} className="pr-3" />
                      <a href="tel:+90 216 706 8051">+90 216 706 8051</a>
                    </li>
                    <li className="hover:underline p-1 flex cursor-pointer">
                      <GrMail size={32} className="pr-3" />
                      <a href="mailto:destek@procollec.com">
                        destek@procollec.com
                      </a>
                    </li>
                    <li className="hover:underline p-1 pr-5 flex cursor-pointer">
                      <IoLocationSharp size={42} className="pr-3" />
                      <a
                        href="https://goo.gl/maps/rEVgaSHkxMYNCvFB9"
                        target="_blank"
                      >
                        İçerenköy Mh. Topçu İbrahim Sk. Quick Tower Plaza No: 8
                        -10D Ataşehir İstanbul Türkiye
                      </a>
                    </li>
                  </ul>
                  <div className="mt-10 ml-8">
                    <Modal />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-head  mt-[50px]">
            <h1 className="text-[#14284B] text-center font-semibold text-3xl">
              Procollec Teknoloji - Esenler
            </h1>
          </div>
          <div class="grid grid-cols-2 gap-2 max-[600px]:grid-cols-1 lg:px-[160px] mt-[20px]">
            <div className="pl-5 pt-5 w-full max-[600px]: pr-2">
              <div className="contactblock ">
                <div className="block-head w-full h-[400px] rounded-md bg-cover text-[#fff] ">
                  <img src={ComImg} alt="" className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="contact-form w-full pl-2">
              <div className="blockhead w-full h-[500px] rounded-md text-[#15284b]">
                <p className="blocktitle1 font-semibold pt-6 text-2xl">
                  Procollec Tekstilkent Şubesi
                </p>
                <ul className="list-none mt-2">
                  <li className="hover:underline p-1 flex cursor-pointer pt-4">
                    <IoCallSharp size={32} className="pr-3" />
                    <a href="tel:+90 212 803 9970">+90 212 803 9970</a>
                  </li>
                  <li className="hover:underline p-1 flex cursor-pointer">
                    <GrMail size={32} className="pr-3" />
                    <a href="mailto:destek@procollec.com">
                      destek@procollec.com
                    </a>
                  </li>
                  <li className="hover:underline p-1 pr-5 flex cursor-pointer">
                    <IoLocationSharp size={38} className="pr-3" />
                    <a
                      href="https://goo.gl/maps/33UJFYMTbzGZBbYm6"
                      target="_blank"
                    >
                      Oruç Reis Mah. Tekstilkent Cad. Tekstilkent A Giriş A2
                      Blok No:60 Esenler İstanbul Türkiye
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Map />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
