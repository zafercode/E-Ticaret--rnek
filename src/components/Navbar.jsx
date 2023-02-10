import React, { useState, Fragment, Component } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Logo from "../assets/beyaz-logo.png";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Ecommercepage1 from "../pages/Ecommercepage1";
import About from "../pages/About";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between fixed top-0 z-30 bg-[#15284B] items-center w-full mx-auto h-20 shadow-lg text-white px-4">
      <div className="cursor-pointer ml-4">
        <Link to="/">
          <img className="w-full h-10" src={Logo} alt="/" />
        </Link>
      </div>

      <ul className="hidden lg:flex sm:text-sm cursor-pointer">
      <li className="p-5 mr-10 font-bold hover:text-[#15284B] hover:bg-white rounded-md">
        <Menu as="div" className="relative inline-block text-left">
        <Link to='/about'>HAKKIMIZDA</Link>
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
      
          </Menu.Items>
        </Transition>
      </Menu>
        </li>
        <li className="p-5 mr-10 font-bold hover:text-[#15284B] hover:bg-white rounded-md">
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
          <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/e-ticaret" 
                    className={classNames(
                      active ? "bg-gray-100 text-[#15284B]" : "text-gray-700",
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
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
                    to='/'
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
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

        <li className="p-5 mr-10 font-bold hover:text-[#15284B] hover:bg-white rounded-md">
        <Menu as="div" className="relative inline-block text-left">
        <Menu.Button><Link to='/e-ihracat'>E-İHRACAT</Link></Menu.Button>
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
      
          </Menu.Items>
        </Transition>
      </Menu>
        </li>
        <li className="p-5 mr-10 font-bold hover:text-[#15284B] hover:bg-white rounded-md">
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
          <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
        <li className="p-5 mr-10 font-bold hover:text-[#15284B] hover:bg-white rounded-md">
        <Menu as="div" className="relative inline-block text-left">
        <Menu.Button><Link to="/blog">BLOG</Link></Menu.Button>
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
          
          </Menu.Items>
        </Transition>
      </Menu>
        </li>
        <li className="p-5 mr-10 font-bold hover:text-[#15284B] hover:bg-white rounded-md">
        <Menu as="div" className="relative inline-block text-left">
        <Menu.Button><Link to="/contact">BİZE ULAŞIN</Link></Menu.Button>
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
          <a href="/contact"></a>
          </Menu.Items>
        </Transition>
      </Menu>
        </li>
      </ul>
      <div onClick={handleNav} className="block lg:hidden">
        {!nav ? (
          <AiOutlineClose className="w-5 h-5 cursor-pointer" />
        ) : (
          <AiOutlineMenu className="w-5 h-5 cursor-pointer" />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#15284B] ease-out z-30 duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div>
          <h1 className="w-full text-3xl font-bold text-white cursor-pointer"></h1>
        </div>
        <ul className="pt-6">
          <li className="p-4 font-bold text-white/80 border-b border-gray-500 cursor-pointer">
            ÜRÜNLERİMİZ
          </li>
          <li className="p-4 font-bold text-white/80 border-b border-gray-500 cursor-pointer">
            E-İHRACAT
          </li>
          <li className="p-4 font-bold text-white/80 border-b border-gray-500 cursor-pointer">
            REFERANSLARIMIZ
          </li>
          <li className="p-4 font-bold text-white/80 border-b border-gray-500 cursor-pointer">
            BLOG
          </li>
          <li className="p-4 font-bold text-white/80 cursor-pointer">
            BİZE ULAŞIN
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
