import React from 'react'
import './style.css';
import '../index.css';
import { GoSearch } from 'react-icons/go'
const BlogContent = () => {
    return (
        <div>
            <div className="bg-blog-img-mobil md:bg-blog-img h-80 w-full flex flex-row justify-around items-center bg-cover bg-center bg-no-repeat">
                <div className='flex flex-col'>
                    <h1 className='text-white font-bold text-xl md:text-3xl mb-6'>Procollec Blog Yazısı Başlığı</h1>
                </div>
            </div>
            <div className='container m-auto mt-20 p-4'>
                <div className="grid grid-cols-1 xl:grid-cols-3 md:gap-12">
                    <div className="col-span-2 grid gap-6">
                        <div>
                            <h1 className='text-xl md:text-3xl font-bold mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            <img src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='mb-5'/>
                            <p className='w-full mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus orci, efficitur non varius sit amet, faucibus ut tortor. Mauris convallis posuere justo, non gravida nibh egestas ac. Pellentesque eget venenatis sem. Phasellus eget finibus enim. Suspendisse id libero quis ligula finibus tempor. Integer id diam est. In efficitur augue non posuere ultricies. Sed nec interdum massa. Sed vulputate iaculis justo, eu condimentum lorem venenatis sed. Vestibulum gravida tincidunt pellentesque. Nam dictum iaculis porta. Nulla facilisi. Pellentesque vulputate maximus condimentum. Nullam quis quam non tellus euismod mattis at quis augue. Integer est purus, mattis eget vestibulum eu, viverra sit amet lorem.
                            </p>
                            <h1 className='text-xl md:text-3xl font-bold mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            <img src="https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='mb-5'/>
                            <p className='w-full mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus orci, efficitur non varius sit amet, faucibus ut tortor. Mauris convallis posuere justo, non gravida nibh egestas ac. Pellentesque eget venenatis sem. Phasellus eget finibus enim. Suspendisse id libero quis ligula finibus tempor. Integer id diam est. In efficitur augue non posuere ultricies. Sed nec interdum massa. Sed vulputate iaculis justo, eu condimentum lorem venenatis sed. Vestibulum gravida tincidunt pellentesque. Nam dictum iaculis porta. Nulla facilisi. Pellentesque vulputate maximus condimentum. Nullam quis quam non tellus euismod mattis at quis augue. Integer est purus, mattis eget vestibulum eu, viverra sit amet lorem.
                            </p>
                            <h1 className='text-xl md:text-3xl font-bold mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            <img src="https://images.pexels.com/photos/7310202/pexels-photo-7310202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='mb-5'/>
                            <p className='w-full mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus orci, efficitur non varius sit amet, faucibus ut tortor. Mauris convallis posuere justo, non gravida nibh egestas ac. Pellentesque eget venenatis sem. Phasellus eget finibus enim. Suspendisse id libero quis ligula finibus tempor. Integer id diam est. In efficitur augue non posuere ultricies. Sed nec interdum massa. Sed vulputate iaculis justo, eu condimentum lorem venenatis sed. Vestibulum gravida tincidunt pellentesque. Nam dictum iaculis porta. Nulla facilisi. Pellentesque vulputate maximus condimentum. Nullam quis quam non tellus euismod mattis at quis augue. Integer est purus, mattis eget vestibulum eu, viverra sit amet lorem.
                            </p>
                            <h1 className='text-xl md:text-3xl font-bold mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            <img src="https://images.pexels.com/photos/6995146/pexels-photo-6995146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='mb-5'/>
                            <p className='w-full mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus orci, efficitur non varius sit amet, faucibus ut tortor. Mauris convallis posuere justo, non gravida nibh egestas ac. Pellentesque eget venenatis sem. Phasellus eget finibus enim. Suspendisse id libero quis ligula finibus tempor. Integer id diam est. In efficitur augue non posuere ultricies. Sed nec interdum massa. Sed vulputate iaculis justo, eu condimentum lorem venenatis sed. Vestibulum gravida tincidunt pellentesque. Nam dictum iaculis porta. Nulla facilisi. Pellentesque vulputate maximus condimentum. Nullam quis quam non tellus euismod mattis at quis augue. Integer est purus, mattis eget vestibulum eu, viverra sit amet lorem.
                            </p>
                        </div>
                    </div>
                    <div className="min-h-[50px] w-full">
                        <form>
                            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <GoSearch className='w-5 h-5 text-gray-500 dark:text-gray-400' />
                                </div>
                                <input type="search" id="search" class="block outline-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-[#15284B] hover:bg-[#15284B] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                        <div className="bg-slate-100 min-h-min w-full mt-10 rounded-xl p-5">
                            <h1 className='font-semibold text-xl text-slate-700 mb-3 text-center'>İletişim Formu</h1>
                            <input type="text" placeholder='Firma Adı' className='w-[100%] xl:w-[49%] focus:border-blue-500 outline-none border border-gray-300 border-solid p-2 rounded-md mr-2 mb-4' />
                            <input type="text" placeholder='Ad - Soyad' className='w-[100%] xl:w-[49%] focus:border-blue-500 outline-none  border border-gray-300 border-solid p-2 rounded-md mb-4' />
                            <input type="text" placeholder='E-Mail' className='w-[100%] xl:w-[49%] focus:border-blue-500 outline-none border border-gray-300 border-solid p-2 rounded-md mr-2 mb-4' />
                            <input type="text" placeholder='Telefon' className='w-[100%] xl:w-[49%] focus:border-blue-500 outline-none border border-gray-300 border-solid p-2 rounded-md mb-4' />
                            <textarea className='focus:border-blue-500 h-40 resize-none outline-none border border-gray-300 border-solid p-2 rounded-md mb-4 w-full'></textarea>
                            <button className='bg-[#15284B] py-2 px-5 text-white rounded-lg'>Gönder</button>
                        </div>
                        <div className="bg-slate-100 min-h-min w-full mt-10 rounded-xl p-5">
                            <h1 className='font-semibold text-2xl text-slate-700 mb-3'>Yeni Yazılar</h1>
                            <ul className='mb-6 list-disc ml-4 '>
                                <li className=''>Yeni Bir Yazı başlığı 1</li>
                                <li className='mb-1 text-sm'>Yeni Bir Yazı başlığı 2</li>
                                <li className='mb-1 text-sm'>Yeni Bir Yazı başlığı 3</li>
                                <li className='mb-1 text-sm'>Yeni Bir Yazı başlığı 4</li>
                                <li className='mb-1 text-sm'>Yeni Bir Yazı başlığı 5</li>
                                <li className='mb-1 text-sm'>Yeni Bir Yazı başlığı 6</li>
                                <li className='mb-1 text-sm'>Yeni Bir Yazı başlığı 7</li>
                                <li className='mb-1 text-sm'>Yeni Bir Yazı başlığı 8</li>
                                <li className='mb-1 text-sm'>Yeni Bir Yazı başlığı 9</li>
                            </ul>
                            <h1 className='font-semibold text-2xl text-slate-700 mb-3'>Popüler Yazılar</h1>
                            <ul className='mb-6 list-disc ml-4 '>
                                <li className='mb-1 text-sm'>Popüler Bir Yazı başlığı 1</li>
                                <li className='mb-1 text-sm'>Popüler Bir Yazı başlığı 2</li>
                                <li className='mb-1 text-sm'>Popüler Bir Yazı başlığı 3</li>
                                <li className='mb-1 text-sm'>Popüler Bir Yazı başlığı 4</li>
                                <li className='mb-1 text-sm'>Popüler Bir Yazı başlığı 5</li>
                                <li className='mb-1 text-sm'>Popüler Bir Yazı başlığı 6</li>
                                <li className='mb-1 text-sm'>Popüler Bir Yazı başlığı 7</li>
                                <li className='mb-1 text-sm'>Popüler Bir Yazı başlığı 8</li>
                                <li className='mb-1 text-sm'>Popüler Bir Yazı başlığı 9</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlogContent