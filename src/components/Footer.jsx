import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Comlogo from "../assets/gri-logo.png";
import { BsTruck } from "react-icons/bs";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { BiTimer } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[#fff] text-[#14284B] justify-center mt-20">
      <div className="grid grid-cols-2 gap-10 px-8 py-5 sm:grid-cols-12 md:grid-cols-4 justify-center max-[600px]:grid-cols-1 border-b">
        <div class="icon-group flex justify-center align-middle">
          <div className="desc-icon pr-5 pt-2 justify-center align-middle">
            <BsTruck size={40} />
          </div>
          <div className="description">
            <h2 className="font-semibold text-center text-L">HIZLI TESLİMAT</h2>
            <p className='text-center'>Siparişleriniz en kısa sürede elinize ulaşır.</p>
          </div>
        </div>
        <div className="icon-group flex justify-center align-middle">
          <div className="desc-icon pr-5 pt-2 justify-center align-middle">
            <AiOutlineCreditCard size={40} />
          </div>
          <div className="description">
            <h2 className="font-semibold text-center text-L">
              GÜVENLİ ALIŞVERİŞ
            </h2>
            <p className='text-center'>Güvenli ve kolay ödeme sistemi</p>
          </div>
        </div>
        <div className="icon-group flex justify-center align-middle">
          <div className="desc-icon pr-5 pt-2 justify-center align-middle">
            <BsCardChecklist size={40} />
          </div>
          <div className="description">
            <h2 className="font-semibold text-center text-lg">
              GENİŞ ÜRÜN YELPAZESİ
            </h2>
            <p className='text-center'>Binlerce ürün ve kampanya seçeneği</p>
          </div>
        </div>
        <div className="icon-group flex justify-center align-middle">
          <div className="desc-icon pr-5 pt-2 justify-center align-middle">
            <BiTimer size={40} />
          </div>
          <div className="description">
            <h2 className="font-semibold text-center text-L">7/24 DESTEK</h2>
            <p className='text-center'>Öneri ve şikayetlerinizi bize iletebilirsiniz.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 px-8 py-5 sm:grid-cols-12 md:grid-cols-4 justify-center max-[600px]:grid-cols-1">
        <div className="">
          <div className="com-logo pt-3">
            <a href="#">
              <img src={Comlogo} alt="" className="w-30 h-10" />
            </a>
          </div>
          <div className="pt-7 auto-cols-auto relative">
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              velit enim iste rerum. Iusto eligendi recusandae delectus, a
              praesentium aperiam dolore similique odio tenetur eum modi
              sapiente quis impedit consectetur?
            </p>
          </div>
          <div className="pt-3 ">
            <h3 className="font-semibold mb-2">Bize Ulaşın :</h3>
            <form className="flex" action="">
              <input
                type="email"
                name=""
                id="email"
                placeholder="Email.."
                className="rounded text-start w-60 h-12 text-[#14284B]"
              />
              <button className="border border-solid bg-[#14284B] text-[#fff] p-2 ml-3 hover:bg-[#fff] hover:text-[#14284B] rounded-md max-[600px]:ml-1">
                Gönder
              </button>
            </form>
          </div>
          <div className="social-media-icons text-4xl pt-9 flex justify-start">
            <a target='_blank' href="#" className="">
              <FaFacebookSquare />
            </a>
            <a target='_blank' href="https://www.instagram.com/procollec_tr/" className="pl-3">
              <FaInstagramSquare />
            </a>
            <a target='_blank' href="https://twitter.com/procollec" className="pl-3">
              <FaTwitterSquare />
            </a>
            <a target='_blank' href="https://www.linkedin.com/company/procollec-teknoloji/"  className="pl-3">
              <FaLinkedin className=""/>
            </a>
          </div>
        </div>
        <div className="">
          <h3 className="text-3xl pb-3 font-semibold">Kurumsal</h3>
          <ul className="list-none">
            <a href="about">
              <li className="hover:underline p-1">Hakkımızda</li>
            </a>
            <a href="#">
              <li className="hover:underline p-1">Gizlilik Sözleşmesi</li>
            </a>
            <a href="#">
              <li className="hover:underline p-1">Üyelik Sözleşmesi</li>
            </a>
            <a href="#">
              <li className="hover:underline p-1">İletişim</li>
            </a>
            <a href="#">
              <li className="hover:underline p-1">Satış Politikası</li>
            </a>
            <a href="#">
              <li className="hover:underline p-1">İade Politikası</li>
            </a>
            <a href="#">
              <li className="hover:underline p-1">Sıkça Sorulan Sorular</li>
            </a>
            <a href="#">
              <li className="hover:underline p-1">Sipariş Takip</li>
            </a>
            <a href="#">
              <li className="hover:underline p-1">Havale Bildirimleri</li>
            </a>
          </ul>
        </div>
        <div className="">
          <h3 className="text-3xl pb-3 font-semibold">Kategoriler</h3>
          <ul className="list-none">
            <a href="#">
              <li className="hover:underline p-1">Bilgisayar Sistemleri</li>
            </a>
            <a href="#">
              <li className="hover:underline p-1">Bilgisayar Bileşenleri</li>
            </a>
            <a href="#">
              <li className="hover:underline p-1">Veri Depoları</li>
            </a>
            <a href="#">
              <li className="hover:underline p-1">Çevre Birimler</li>
            </a>
            <a href="#">
              <li className="hover:underline p-1">Ağ</li>
            </a>
          </ul>
        </div>
        <div className="">
          <h3 className="text-3xl pb-3 font-semibold">Bize Ulaşın</h3>
          <ul className="list-none">
            <li className="p-1">
              Haftaiçi 09:00 - 22:00 Cumartesi 11:00 - 22:00 saatleri arasında
              ulaşabilirsiniz.
            </li>
            <li className="hover:underline p-1 flex cursor-pointer pt-4">
              <IoCallSharp size={32} className="pr-3" />
              <a href="tel:+90 216 706 8051">+90 216 706 8051</a>
            </li>
            <li className="hover:underline p-1 flex cursor-pointer">
              <GrMail size={32} className="pr-3" />
              <a href="mailto:destek@procollec.com">destek@procollec.com</a>
            </li>
            <li className="hover:underline p-1 flex cursor-pointer">
              <IoLocationSharp size={52} className="pr-3" />
              <a href="https://goo.gl/maps/rEVgaSHkxMYNCvFB9" target="_blank">
                İçerenköy Mh. Topçu İbrahim Sk. Quick Tower Plaza No: 8 -10D
                Ataşehir İstanbul Türkiye
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
