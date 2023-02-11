import React, { useState, Fragment, Component } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Logo from "../assets/beyaz-logo.png";
import { Menu, Transition } from "@headlessui/react";
import { TbHeadphones } from "react-icons/tb";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between min-h-0 fixed top-0 left-0 z-30 py-[23px] bg-[#15284B]/100 items-center w-full h-[72px] shadow-lg text-white">
      <div className="container relative max-w-[1490px] flex justify-start items-center">
        <Link to="/">
          <img className="flex justify-center items-center w-full h-8 cursor-pointer md:pl-16 my-3" src={Logo} alt="/" />
        </Link>

        <ul className="hidden lg:flex text-xs cursor-pointer ml-6 text-white">
          <li className="p-3 font-bold hover:text-[#15284B] hover:bg-white">
            <Menu as="div" className="relative inline-block text-left">
              <Link to="/about">HAKKIMIZDA</Link>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 shadow-lg bg-white divide-y divide-gray-100 focus:outline-none"></Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="p-3 font-bold hover:text-[#15284B] hover:bg-white">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button>ÜRÜNLERİMİZ</Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/e-ticaret"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-[#15284B]"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          E-Ticaret Hizmetlerimiz
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          İleri Seviye Bulut E-Ticaret Çözümleri
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          E-İhracat Çözümleri
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          İleri Seviye Bulut E-Ticaret Çözümleri
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          İleri Seviye Bulut E-Ticaret Çözümleri
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          İleri Seviye Bulut E-Ticaret Çözümleri
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>

          <li className="p-3 font-bold hover:text-[#15284B] hover:bg-white">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button>
                <Link to="/e-ihracat">E-İHRACAT</Link>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 shadow-lg bg-white divide-y divide-gray-100 focus:outline-none"></Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="p-3 font-bold hover:text-[#15284B] hover:bg-white">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button>REFERANSLARIMIZ</Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Tüm Referanslar
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Müşteri Yorumları
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="p-3 font-bold hover:text-[#15284B] hover:bg-white">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button>
                <Link to="/blog">BLOG</Link>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none"></Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="p-3 font-bold hover:text-[#15284B] hover:bg-white">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button>
                <Link to="/contact">BİZE ULAŞIN</Link>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
                  <Link to="/contact"></Link>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <a href="tel:+90 216 706 8051" className="flex justify-center text-center text-sm text-[#fff] font-bold fixed right-0 mt-2 mx-40 px-20"><TbHeadphones className="mr-1" size={20}/>+90 216 706 80 51 - 7/24</a>
          <button className="flex justify-center items-center fixed right-0 text-sm font-bold px-[20px] py-[10px] mr-16 text-[#fff] bg-[#00c753] hover:bg-[#fff] hover:text-[#00c753]">Ücretsiz Deneyin</button>
        </ul>
        
        <div onClick={handleNav} className="block lg:hidden fixed right-0 pr-2 z-auto">
          {!nav ? (
            <AiOutlineClose className="w-5 h-5 cursor-pointer" />
          ) : (
            <AiOutlineMenu className="w-5 h-5 cursor-pointer" />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[90%] h-full border-r border-r-gray-900 bg-[#15284B] ease-out z-30 duration-500"
              : "fixed left-[-100%]"
          }
        >
          <div>
            <h1 className="w-full text-3xl font-bold text-white cursor-pointer"></h1>
          </div>
          <ul className="pt-6">
            <li className="p-4 font-bold text-white/80 border-b border-gray-500 cursor-pointer">
              <Link to="/about">HAKKIMIZDA</Link>
            </li>
            <li className="p-4 font-bold text-white/80 border-b border-gray-500 cursor-pointer">
              <Link to="/products">ÜRÜNLERİMİZ</Link>
            </li>
            <li className="p-4 font-bold text-white/80 border-b border-gray-500 cursor-pointer">
              <Link to="/e-ihracat">E-İHRACAT</Link>
            </li>
            <li className="p-4 font-bold text-white/80 border-b border-gray-500 cursor-pointer">
              <Link to="/referances">REFERANSLARIMIZ</Link>
            </li>
            <li className="p-4 font-bold text-white/80 border-b border-gray-500 cursor-pointer">
              <Link to="/blog">BLOG</Link>
            </li>
            <li className="p-4 font-bold text-white/80 cursor-pointer">
              <Link to="/contact">BİZE ULAŞIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
