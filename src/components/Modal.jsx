import React, { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [show,toggleShow] = useState(false)
  return (
    <div>
      <button
        className="bg-white text-[#061d4c] font-bold text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-5 ease-linear transition-all duration-500"
        type="button"
        onClick={() => setShowModal(true)}>
        Biz Sizi Arayalım
      </button>
      {showModal ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-2">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-10 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                  </button>
                <div className="text-center justify-center p-5 rounded-t">
                  <h3 className="text-3xl font-extrabold text-center text-[#14284B]">
                    Biz Sizi Arayalım
                  </h3>
                  <p className="text-[#15284b] text-md px-20 pt-5 flex font-semibold max-[640px]:px-0">
                    Merak ettiğiniz tüm sorularınız için iletişim bilgilerinizi girin,uzman ekibimiz en kısa zamanda size yardımcı olsun!
                    </p>
                </div>
                {/*body*/}
                <div className="relative p-6 flex text-center max-[640px]:block">
                    <div className="border-r-2 max-[640px]:border-r-0">
                        <span className="my-4 text-[#061d4c] text-2xl leading-relaxed font-extrabold italic">Dilerseniz;</span><br />
                        <span className="my-4 text-[#061d4c] text-lg leading-relaxed font-medium">Müşteri Destek Hattı</span><br />
                        <span className="my-4 text-[#769ac2] text-2xl underline leading-relaxed font-extrabold"><a href="tel:+90 212 803 9970">+90 212 803 9970</a></span><br />
                        <span className="my-4 text-[#061d4c] text-lg leading-relaxed font-medium">telefonumuzdan bize ulaşabilirsiniz.</span>
                  </div>
                  <div className="max-[640px]:mt-5 md:pl-3">
                    <form action="">
                        <input type="name" name="" id="name" placeholder='İsim Soyisim..' className='shadow appearance-none border rounded w-full mb-4 py-2 px-3 focus:outline-none focus:shadow-outline text-start text-[#14284B]' />
                        <input type="email" name="" id="email" placeholder='Email..' className='shadow appearance-none border rounded w-full mb-4 py-2 px-3 focus:outline-none focus:shadow-outline text-start text-[#14284B]' />
                        <input type="phone" name="" id="phone" placeholder='Telefon Numarası..' className='shadow appearance-none border rounded w-full mb-4 py-2 px-3 focus:outline-none focus:shadow-outline text-start text-[#14284B]' />
                    </form>
                    <div className="kvkk px-1 ">
                        {/* <div className="kvkkinfo ">
                         <p className='text-sm text-black'>Şirketimizin gizlilik ve güvenlik politikaları</p>
                         {show&&<p className="text-black"> çerçevesinde sağladığınız kişisel verilerin,
                                Ticimax Aydınlatma Metninde yer alan değerler ile sınırlı ve ölçülü olmak kaydı ile rızanıza dayanarak
                             işlenebileceğini
                                ve “Formu Gönder” butonuna basarak kişisel verilerinizin Aydınlatma Metninde belirtilen kapsamlarda işlenmesine izin
                                vermiş olacağınızı hatırlatmak isteriz.
                                <br /><br />
                                Kişisel verileriniz işlenmesine ilişkin detaylı bilgiye ulaşmak için
                                <a href="" className='underline' target='_blank'> Ticimax Kişisel Verilerin Korunmasına Yönelik Aydınlatma ve Gizlilik Politikamızı </a>
                                inceleyebilirsiniz.
                            </p>}
                        </div>
                        <div className="kvkkbtn">
                            <a className='text-[14px] text-[#428bca] cursor-pointer underline ml-5' onClick={() => toggleShow(!show)}>{show ? "Kısalt" : "Devamını Oku"}</a>
                        </div> */}
                        <button className='bg-[#00c753] hover:bg-[#009d42] text-white text-center p-2 w-full mt-2'>Formu Gönder</button>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
}