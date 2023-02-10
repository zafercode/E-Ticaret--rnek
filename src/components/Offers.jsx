import React from "react";
import {
  BsCheckLg,
  BsHeadphones,
  BsPercent,
  BsSearch,
} from "react-icons/bs";

const Offers = () => {
  return (
    <div className="relative grid md:flex md:grid-cols-3 justify-center items-center my-auto bg-[#E7EAEF] w-full h-auto md:h-[350px]">
      <div className="bg-white m-4 w-full h-60 md:h-[250px]">
        <h1 className="text-xl text-[#15284B] font-bold flex justify-center items-center p-4 mx-auto md:text-xl">
          Gelişmiş ve Esnek{" "}
          <BsCheckLg size={25} className="ml-4 text-green-400" />
        </h1>
        <p className="text-lg px-6 block mx-auto text-[#15284B]">
          Benzersiz bulut e-ticaret altyapısı ile trendleri zaman ve para
          kaybetmeden yakalayın. Satışlarınızı arttırın ve operasyonel
          yüklerinizi hafifletin.
        </p>
      </div>
      <div className="bg-white m-4 w-full h-60 md:h-[250px]">
        <h1 className="text-xl text-[#15284B] font-bold flex justify-center items-center p-4 mx-auto md:text-xl">
          7/24 Teknik Destek{" "}
          <BsHeadphones size={25} className="ml-4 text-green-400" />
        </h1>
        <p className="text-lg px-6 block mx-auto text-[#15284B]">
          Sadece Procollec'te olan 7/24 telefon ve ticket desteği ile kesintisiz
          hizmet alın. Procollec Akademi'de her hafta ücretsiz sınıf ve uygulamalı
          eğitimlerimize katılın.
        </p>
      </div>
      <div className="bg-white m-4 w-full h-60 md:h-[250px]">
        <h1 className="text-xl text-[#15284B] font-bold flex justify-center items-center p-4 mx-auto md:text-xl">
          SEO Optimizasyonu{" "}
          <BsSearch size={25} className="ml-4 text-green-400" />
        </h1>
        <p className="text-lg px-6 block mx-auto text-[#15284B]">
          Muhteşem SEO uyumu ve esnek E-Ticaret SEO modülleri ile arama
          motorlarında üst sıralarda yer alın. Seo için ihtiyacınız olan herşey
          panelinizde.
        </p>
      </div>
      <div className="bg-white m-4 w-full h-60 md:h-[250px]">
        <h1 className="text-xl text-[#15284B] font-bold flex justify-center items-center p-4 mx-auto md:text-xl">
          Promosyonlar <BsPercent size={25} className="ml-4 text-green-400" />
        </h1>
        <p className="text-lg px-6 block mx-auto text-[#15284B]">
          Özel kampanya robotu ile kampanyalar kurgulayın, üyelerinize promosyon
          ve çekler tanımlayın. Sürpriz kampanyalar yaparak herkesi şaşırtın.
        </p>
      </div>
    </div>
  );
};

export default Offers;
