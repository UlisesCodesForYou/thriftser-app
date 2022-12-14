import Image from 'next/image'
import Link from "next/link";

export const Notifications = () => {
    return (
        <>
            <div className="bg-white h-screen flex flex-col h-screen justify-between">
                <div className="sticky w-full top-0 h-10">
                    <header className='text-lg font-bold text-white bg-blue-900 text-center h-10 grid place-content-center'>Notifications</header>
                    <div className="w-full h-auto relative bg-white">
                        <div className="bg-white px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto mb-3 mt-3">
                            <div className="w-full flex items-center justify-between">
                                <span className="font-medium text-sm text-slate-400">New Notification</span>
                                <button className="-mr-1 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center">
                                    <svg className="h-2 w-2 fill-current items-center" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                                </button>
                            </div>
                            <div className="flex items-center mt-2 rounded-lg px-1 py-1 cursor-pointer">
                                <div className="relative flex flex-shrink-0 items-end">
                                    <Image className="h-16 w-16 rounded-full" src="https://picsum.photos/id/244/900/900" width={50} height={50} alt=""/>
                                    <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
                                </div>
                                <div className="ml-3">
                                    <span className="font-semibold tracking-tight text-xs">John Doe</span>
                                    <span className="text-xs leading-none opacity-50">reacted to your comment:</span>
                                    <p className="text-xs leading-4 pt-2 italic opacity-70">Did you buy those shoes??</p>
                                    <span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">a few seconds ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white  px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto mb-3">
                            <div className="w-full flex items-center justify-between">
                                <span className="font-medium text-sm text-slate-400">New Notification</span>
                                <button className="-mr-1 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center">
                                    <svg className="h-2 w-2 fill-current items-center" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                                </button>
                            </div>
                            <div className="flex items-center mt-2 rounded-lg px-1 py-1 cursor-pointer">
                                <div className="relative flex flex-shrink-0 items-end">
                                    <Image className="h-16 w-16 rounded-full" src="https://picsum.photos/id/1027/150/150" width={50} height={50} alt="" />
                                    <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
                                </div>
                                <div className="ml-3">
                                    <span className="font-semibold tracking-tight text-xs">Vintage Levi </span>
                                    <span className="text-xs leading-none opacity-50">reacted to your comment:</span>
                                    <p className="text-xs leading-4 pt-2 italic opacity-70">This is the comment...</p>
                                    <span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">a few seconds ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white  px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto mb-3">
                            <div className="w-full flex items-center justify-between">
                                <span className="font-medium text-sm text-slate-400">New Notification</span>
                                <button className="-mr-1 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center">
                                    <svg className="h-2 w-2 fill-current items-center" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                                </button>
                            </div>
                            <div className="flex items-center mt-2 rounded-lg px-1 py-1 cursor-pointer">
                                <div className="relative flex flex-shrink-0 items-end">
                                    <Image className="h-16 w-16 rounded-full" src="https://picsum.photos/id/244/900/900" width={50} height={50} alt=""/>
                                    <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
                                </div>
                                <div className="ml-3">
                                    <span className="font-semibold tracking-tight text-xs">Jane Doe</span>
                                    <span className="text-xs leading-none opacity-50">reacted to your comment:</span>
                                    <p className="text-xs leading-4 pt-2 italic opacity-70">This is the comment...</p>
                                    <span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">a few seconds ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white  px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto mb-3">
                            <div className="w-full flex items-center justify-between">
                                <span className="font-medium text-sm text-slate-400">New Notification</span>
                                <button className="-mr-1 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center">
                                    <svg className="h-2 w-2 fill-current items-center" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                                </button>
                            </div>
                            <div className="flex items-center mt-2 rounded-lg px-1 py-1 cursor-pointer">
                                <div className="relative flex flex-shrink-0 items-end">
                                    <Image className="h-16 w-16 rounded-full" src="https://picsum.photos/id/1027/150/150" width={50} height={50} alt=""/>
                                    <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
                                </div>
                                <div className="ml-3">
                                    <span className="font-semibold tracking-tight text-xs">Jane Doe</span>
                                    <span className="text-xs leading-none opacity-50">reacted to your comment:</span>
                                    <p className="text-xs leading-4 pt-2 italic opacity-70">This is the comment...</p>
                                    <span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">a few seconds ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <footer className="sticky bottom-0 left-0 z-20 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                    <div className='flex mb-.5'>
                        <div className='flex m-auto'>
                            <ul className="flex space-x-12 mt-.5">
                                <li>
                                    <Link href="/homePage">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/search">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    </svg>

                                </li>
                                <li>
                                    <Link href='/userSettings'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/notifications'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                                            <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>

        </>
    )
}