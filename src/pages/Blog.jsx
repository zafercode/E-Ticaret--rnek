import React from "react";
import "../index.css";
import BlogResim from "../assets/blog.jpeg.jpeg";
import { GoSearch } from "react-icons/go";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[url('https://www.ticimax.com/App_Themes/Default/css/images/blogtopBg.jpg')] h-80 w-full flex flex-row justify-around items-center bg-cover bg-center bg-no-repeat mt-14">
        <div className="flex flex-col p-8">
          <h1 className="flex justify-center text-white font-bold text-xl md:text-3xl mb-6">
            Procollec Blog Yazısı Başlığı
          </h1>
          <p className="text-white font-medium text-base md:text-lg mb-6">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque
            rem dolorum et aliquid, libero itaque inventore, corporis quos
            doloremque
          </p>
        </div>
      </div>
      <div className="container m-auto mt-20 p-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 md:gap-12">
          <div className="col-span-2 grid grid-cols-2 gap-6">
            <div className="">
              <img src={BlogResim} className="h-[200px] w-full object-revert" />
              <h1 className="font-semibold text-2xl mb-2 text-[#444] mt-2">
                Yazı Başlığı{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                neque rem dolorum et aliquid, libero itaque inventore, corporis
                quos doloremque, voluptas quas eum repudiandae adipisci alias
                magni in porro saepe.
              </p>
              <li className="text-green-500 mt-3 list-none">07 şubat 2023</li>
            </div>
            <div className="">
              <img src={BlogResim} className="h-[200px] w-full object-revert" />
              <h1 className="font-semibold text-2xl mb-2 text-[#444] mt-2">
                Yazı Başlığı{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                neque rem dolorum et aliquid, libero itaque inventore, corporis
                quos doloremque, voluptas quas eum repudiandae adipisci alias
                magni in porro saepe.
              </p>
              <li className="text-green-500 mt-3 list-none">07 şubat 2023</li>
            </div>
            <div className="">
              <img src={BlogResim} className="h-[200px] w-full object-revert" />
              <h1 className="font-semibold text-2xl mb-2 text-[#444]">
                Yazı Başlığı{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                neque rem dolorum et aliquid, libero itaque inventore, corporis
                quos doloremque, voluptas quas eum repudiandae adipisci alias
                magni in porro saepe.
              </p>
              <li className="text-green-500 mt-3 list-none">07 şubat 2023</li>
            </div>
            <div className="">
              <img src={BlogResim} className="h-[200px] w-full object-revert" />
              <h1 className="font-semibold text-2xl mb-2 text-[#444]">
                Yazı Başlığı{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                neque rem dolorum et aliquid, libero itaque inventore, corporis
                quos doloremque, voluptas quas eum repudiandae adipisci alias
                magni in porro saepe.
              </p>
              <li className="text-green-500 mt-3 list-none">07 şubat 2023</li>
            </div>
            <div className="">
              <img src={BlogResim} className="h-[200px] w-full object-revert" />
              <h1 className="font-semibold text-2xl mb-2 text-[#444]">
                Yazı Başlığı{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                neque rem dolorum et aliquid, libero itaque inventore, corporis
                quos doloremque, voluptas quas eum repudiandae adipisci alias
                magni in porro saepe.
              </p>
              <li className="text-green-500 mt-3 list-none">07 şubat 2023</li>
            </div>
          </div>
          <div className="min-h-[50px] mt-8 xl:mt-0">
            <form>
              <label
                for="search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <GoSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="search"
                  id="search"
                  class="block outline-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute right-2.5 bottom-2.5 bg-[#15284B] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="bg-slate-100 min-h-min w-full mt-10 rounded-xl p-5">
              <h1 className="font-semibold text-xl text-slate-700 mb-3 text-center">
                İletişim Formu
              </h1>
              <input
                type="text"
                placeholder="Firma Adı"
                className="w-full xl:w-[85%] focus:border-blue-500 outline-none border border-gray-300 border-solid p-2 rounded-md mr-2 mb-4"
              />
              <input
                type="text"
                placeholder="Ad - Soyad"
                className="w-full xl:w-[85%] focus:border-blue-500 outline-none  border border-gray-300 border-solid p-2 rounded-md mb-4"
              />
              <input
                type="text"
                placeholder="E-Mail"
                className="w-full xl:w-[85%] focus:border-blue-500 outline-none border border-gray-300 border-solid p-2 rounded-md mr-2 mb-4"
              />
              <input
                type="text"
                placeholder="Telefon"
                className="w-full xl:w-[85%] focus:border-blue-500 outline-none border border-gray-300 border-solid p-2 rounded-md mb-4"
              />
              <textarea className="focus:border-blue-500 h-40 resize-none outline-none border border-gray-300 border-solid p-2 rounded-md mb-4 w-full"></textarea>
              <button className="bg-[#15284B] py-2 px-5 text-white rounded-lg hover:text-[#15284B] hover:bg-[#fff]">
                Gönder
              </button>
            </div>
            <div className="bg-slate-100 min-h-min w-full mt-10 rounded-xl p-5">
              <h1 className="font-semibold text-2xl text-slate-700 mb-3">
                Yeni Yazılar
              </h1>
              <ul className="mb-6 list-disc ml-4 ">
                <li className="">Yeni Bir Yazı başlığı 1</li>
                <li className="mb-1 text-sm">Yeni Bir Yazı başlığı 2</li>
                <li className="mb-1 text-sm">Yeni Bir Yazı başlığı 3</li>
                <li className="mb-1 text-sm">Yeni Bir Yazı başlığı 4</li>
                <li className="mb-1 text-sm">Yeni Bir Yazı başlığı 5</li>
                <li className="mb-1 text-sm">Yeni Bir Yazı başlığı 6</li>
                <li className="mb-1 text-sm">Yeni Bir Yazı başlığı 7</li>
                <li className="mb-1 text-sm">Yeni Bir Yazı başlığı 8</li>
                <li className="mb-1 text-sm">Yeni Bir Yazı başlığı 9</li>
              </ul>

              <h1 className="font-semibold text-2xl text-slate-700 mb-3">
                Popüler Yazılar
              </h1>
              <ul className="mb-6 list-disc ml-4 ">
                <li className="mb-1 text-sm">Popüler Bir Yazı başlığı 1</li>
                <li className="mb-1 text-sm">Popüler Bir Yazı başlığı 2</li>
                <li className="mb-1 text-sm">Popüler Bir Yazı başlığı 3</li>
                <li className="mb-1 text-sm">Popüler Bir Yazı başlığı 4</li>
                <li className="mb-1 text-sm">Popüler Bir Yazı başlığı 5</li>
                <li className="mb-1 text-sm">Popüler Bir Yazı başlığı 6</li>
                <li className="mb-1 text-sm">Popüler Bir Yazı başlığı 7</li>
                <li className="mb-1 text-sm">Popüler Bir Yazı başlığı 8</li>
                <li className="mb-1 text-sm">Popüler Bir Yazı başlığı 9</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
