import Image from "next/image";

export default function Footer() {
    return (
        <div>
            <div className="grid grid-cols-12 pb-2">
                <div className="col-span-1">
                    <div className='flex justify-center items-center w-full h-full'>
                        <div className='flex flex-col justify-center items-center gap-3 w-full h-full'>
                            <p className='text-lg text-primary py-3 follow-us-text'>
                                FOLLOW US
                            </p>
                            <div className='flex justify-center'>
                                <div className='h-[70px] min-h-[1em] w-0.5 self-stretch bg-primary'></div>
                            </div>
                            <Image src="/img/icons/linkedIn.svg" className='ratio-1-1' width={20} height={20} alt='contact-us' />
                            <Image src="/img/icons/facebook.svg" className='ratio-1-1' width={20} height={20} alt='contact-us' />
                            <Image src="/img/icons/instagram.svg" className='ratio-1-1' width={20} height={20} alt='contact-us' />
                            <Image src="/img/icons/twitterX.svg" className='ratio-1-1' width={20} height={20} alt='contact-us' />
                        </div>
                    </div>
                </div>
                <div className="footer col-span-11">
                    <div className="flex flex-row justify-center items-center h-full">
                        <div className="flex flex-row justify-around items-start w-full">
                            <div className="max-w-80">
                                <div className="bg-white rounded-xl">
                                    <div className='ratio w-[12rem] p-3 rounded-xl place-self-center'>
                                        <Image
                                            src="/img/logo-nav.png"
                                            height={1200}
                                            width={1200}
                                            alt="logo"
                                        />
                                    </div>
                                </div>
                                <div className="pt-5">
                                    <p className="text-justify">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
                                    </p>
                                </div>
                            </div>
                            <div className="max-w-48">
                                <h3 className='text-xl font-bold text-primary pt-3'>
                                    CONTACT
                                </h3>
                                <p>
                                    Lorem Ipsum Lorem Isum
                                    Lorem Ipsum Sit doller
                                </p>
                                <p>
                                    +91 12345 78895
                                </p>
                                <p>
                                    demo@abc.xyz
                                </p>
                            </div>
                            <div className="max-w-48">
                                <h3 className='text-xl font-bold text-primary pt-3'>
                                    OTHER LINKS
                                </h3>
                                <ul>
                                    <li>Blogs</li>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>FAQs</li>
                                </ul>
                            </div>
                            <div className="max-w-48">
                                <h3 className='text-xl font-bold text-primary pt-3'>
                                    SERVICES
                                </h3>
                                <ul>
                                    <li>Lorem 1</li>
                                    <li>Lorem 2</li>
                                    <li>Lorem 3</li>
                                    <li>Lorem 4</li>
                                </ul>
                            </div>
                            <div className="max-w-48">
                                <div className='ratio w-[7rem]'>
                                    <Image
                                        src="/img/footer-icons.png"
                                        height={1200}
                                        width={1200}
                                        alt="logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-2 text-center">
                <p className='text-[#808080] p-2'>Copyright 2025  ENGINEERING</p>
            </div>
        </div>
    )
}
