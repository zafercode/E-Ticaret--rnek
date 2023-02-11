import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="bg-[#E7EAEF]">
      <Navbar />
      <div className="mt-14">
        <h1 className="font-bold text-center text-lg md:text-2xl text-[#15284B] pt-10">
          Bizi tanıyın
        </h1>
        <h6 className="lex justify-items-start text-sm  mx-16 md:mx-[200px] pt-6 text-gray-400 font-bold">
          "Sorun Değil, Çözüm Üretiriz!"
        </h6>
        <p className="flex justify-center text-sm items-center mx-16 md:mx-[200px] text-[#15284B] pt-6">
          Ticimax Bilişim Teknolojileri A.Ş., ağırlıklı olarak e-ticaret
          yazılımları, özel e-ticaret çözümleri ve tasarım hizmetleri vermek
          üzere kurulmuştur. Ticimax, güçlü altyapısı ve 15 yılı aşkın tecrübesi
          ve 180+ uzman personeli ile müşterilerinin e-ticaret alanındaki
          rekabetlerini güçlendirmesine yardım etmektedir.
        </p>
        <p className="flex justify-center text-sm items-center mx-16 md:mx-[200px] text-[#15284B] pt-6">
          Ticimax, aralarında Türkiye'nin en büyük e-ticaret sitelerininde yer
          aldığı 14.000 'in üzerinde firmaya e-ticaret altyapı hizmeti
          sağlamaktadır. Geliştirilen güçlü altyapısı ile kullanıcılarına
          yalnızca Türkiye'de değil, dünya genelinde satış yapma imkanı
          sağlamaktadır.
        </p>
        <p className="flex justify-center text-sm items-center mx-16 md:mx-[200px] text-[#15284B] pt-6">
          BÜDOTEK’te bulunan Ar-Ge merkezlerinde, müşterilerinin e-ticaret
          alanında başarıyı yakalamaları için devamlı olarak altyapısına
          yenilikler katmakta ve yazılım güncellemeleri sunmaktadır. Yapmış
          olduğu ödüllü projeler ile "Başarı Hikayeleri" yaratmış ve kısa
          zamanda sektörün takip edilen lider firması olmuştur.
        </p>
        <p className="flex justify-center text-sm items-center mx-16 md:mx-[200px] text-[#15284B] pt-6">
          Aynı zamanda İstanbul Ataşehir’de bulunan Allianz Tower merkez
          ofisimizde , müşterilerimize Türkiye'de tek olarak 7/24 telefon
          desteği hizmetini sağlamaktayız.
        </p>
        <p className="flex justify-center text-sm items-center mx-16 md:mx-[200px] text-[#15284B] pt-6">
          Bununla birlikte binamızda bulunan akademimizde yine tek olarak
          uygulamalı e-ticaret eğitimlerini de vermekteyiz. Ticimax sadece
          e-ticaret yazılım satışı yapmayıp aynı zamanda e-ticaret sektörüne
          katkı sağlamak amacıyla Türkiye'de tam 50’den fazla ilde toplamda 300
          'den fazla e-ticaret konferansı, seminer ve binlerce eğitim
          düzenlemiştir. Üniversitelerde girişimcilik ve e-ticaret dersleri
          vermenin yanı sıra e-ticaret yapmak isteyen kişi ve kurumlara ücretsiz
          e-ticaret ve dijital pazarlama eğitimleri vererek birçok kişi ve
          kurumu e-ticaret ile tanıştırmıştır.
        </p>
        <span className="flex justify-items-start text-sm  mx-16 md:mx-[200px] pt-6 text-gray-400 font-bold">Güvenlik ve Kalite Belgelerimiz </span>
      </div>
      <Footer />
    </div>
  );
};

export default About;
