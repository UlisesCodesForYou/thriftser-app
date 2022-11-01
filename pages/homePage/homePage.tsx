import Image from 'next/image'

export const HomePage = () => {
    return (
        <>
            <div className='min-h-screen bg-blue-600'>
                <div className='p-4 text-white bg-gray'>
                    <div className='flex justify-between items-center mb-2'>
                        <h1 className='text-2xl uppercase text-left font-extrabold'>Thriftster</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-2xl mr-2 m-auto">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-2xl mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                        </svg>
                    </div>

                </div>
                <div className='flex justify-center mt-.25 mb-3'>
                    <div className='bg-white w-96'>
                        <header className='px-4 py-3 flex items-center justify-between'>
                            <div className='flex items-center font-bold'>
                                 <span className='mr-2'>
                                       <Image className="h-8 w-8 rounded-full" width='50' height='50'
                                              src="https://picsum.photos/id/1027/150/150"/>
                                 </span>
                                <span>Shirt Girl</span>
                            </div>
                            <div className='float-right'>
                                <span>
                                    <i className='font-extrabold'>+</i>
                                </span>
                            </div>
                        </header>
                        <div className='pr-4 pl-4'>
                            <Image src="https://picsum.photos/id/244/900/900" width='500' height='500'/>
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



        </>
    )
}
