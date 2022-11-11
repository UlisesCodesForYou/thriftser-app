import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

export const HomePage = () => {

    const [isLiked, setIsLiked] = useState<boolean>(false)

    const liked = () => {
        setIsLiked(true)
    }

    return (
        <>
            {/*##### FIXED HEADER SECTION #######*/}
            <div className='min-h-screen bg-blue-600'>
                <nav className='sticky w-full z-20 top-0 left-0 bg-blue-600'>
                    <div className='p-4 text-white bg-gray'>
                        <div className='flex justify-between items-center mb-2'>
                            <h1 className='text-2xl uppercase text-left font-extrabold'>Thriftster</h1>
                            <Link href='/messages'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-2xl mr-2 m-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
                                </svg>
                            </Link>
                            <Link href="/mapPage">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-2xl mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                                </svg>
                            </Link>
                        </div>

                    </div>
                </nav>


                {/*##### MAIN PAGE BODY CONTENT SECTION ########*/}

                {/*####### TOP IMAGE AND USER NAME SECTION ########*/}

                <div className='flex justify-center mb-3'>
                    <div className='bg-white w-96'>
                        <div className='px-4 py-3 flex items-center justify-between'>
                            <div className='flex items-center font-bold'>
                                <div className='mr-2'>
                                    <Image className="h-8 w-8 rounded-full" width={50} height={50}
                                           src="https://picsum.photos/id/1027/150/150" alt=''/>
                                </div>
                                <span>Shirt Girl</span>
                            </div>
                            <div className='float-right'>
                                <div>
                                    <i className='font-extrabold'>+</i>
                                </div>
                            </div>
                        </div>


                        {/*######## MAIN FEED PICTURE AND FEATURES SECTION ######*/}
                        <div className='pr-4 pl-4 '>
                            <Image src="https://picsum.photos/id/244/900/900" width={500} height={500} alt=''/>
                        </div>
                        <div className='p-4'>
                            <div className='flex justify-between items-center mb-2'>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-2xl mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-2xl mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                                    </svg>

                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"/>
                                    </svg>

                                </div>
                            </div>


                            {/*##### COMMENT SECTION #####*/}
                            <div className='font-bold'>
                                25 likes
                            </div>
                            <div>
                                <a href='' className='text-grey-400'> View all comments</a>
                            </div>
                            <div>
                                <div>
                                    <span className='font-bold'>Pants guy</span>
                                    <span> Nice find!</span>
                                </div>
                                <div>
                                    <span className='font-bold'>PreLovedGoods</span>
                                    <span> Where did you find this? It looks great!</span>
                                </div>
                            </div>
                            <small className='text-grey-400'>2 hours ago</small>
                            <div className='flex justify-between items-center mt-3'>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/>
                                    </svg>

                                    <input type='text' name='comment' id=''
                                           className='bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-700'/>
                                </div>
                                <button className='px-3 py-2 text-purple-900 bg-grey-400 focus:bg-gray-300'>Post
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex justify-center mt-.25 mb-3'>
                    <div className='bg-white w-96'>
                        <div className='px-4 py-3 flex items-center justify-between'>
                            <div className='flex items-center font-bold'>
                                <div className='mr-2'>
                                    <Image className="h-8 w-8 rounded-full" width={50} height={50}
                                           src="https://picsum.photos/id/1027/150/150" alt=''/>
                                </div>
                                <span>Shirt Girl</span>
                            </div>
                            <div className='float-right'>
                                <div>
                                    <i className='font-extrabold'>+</i>
                                </div>
                            </div>
                        </div>


                        {/*######## MAIN FEED PICTURE AND FEATURES SECTION ######*/}
                        <div className='pr-4 pl-4 '>
                            <Image src="https://picsum.photos/id/244/900/900" width={500} height={500} alt=''/>
                        </div>
                        <div className='p-4'>
                            <div className='flex justify-between items-center mb-2'>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-2xl mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-2xl mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                                    </svg>

                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"/>
                                    </svg>

                                </div>
                            </div>


                            {/*##### COMMENT SECTION #####*/}
                            <div className='font-bold'>
                                25 likes
                            </div>
                            <div>
                                <a href='' className='text-grey-400'> View all comments</a>
                            </div>
                            <div>
                                <div>
                                    <span className='font-bold'>Pants guy</span>
                                    <span> Nice find!</span>
                                </div>
                                <div>
                                    <span className='font-bold'>PreLovedGoods</span>
                                    <span> Where did you find this? It looks great!</span>
                                </div>
                            </div>
                            <small className='text-grey-400'>2 hours ago</small>
                            <div className='flex justify-between items-center mt-3'>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/>
                                    </svg>

                                    <input type='text' name='comment' id=''
                                           className='bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-700'/>
                                </div>
                                <button className='px-3 py-2 text-purple-900 bg-grey-400 focus:bg-gray-300'>Post
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/*#### FOOTER SECTION ######*/}
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
