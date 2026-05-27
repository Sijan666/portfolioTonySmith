import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { LuMapPin } from 'react-icons/lu'
import Button from '../Button'

const Contact = () => {
    return (
        <>
        <div className="py-[60px] md:py-25 bg-[#EAEDF2]">
            <Container className={'px-4 lg:px-0'}>
                <div className="mb-8 md:mb-10 text-center lg:text-left">
                    <h3 className='text-[#090A0C] font-bold text-[28px] md:text-[35px] uppercase'>
                        <span className='border-b-2 border-[#D9832E] pb-1'>Ge</span>t in touch
                    </h3>
                    <p className='text-[12px] md:text-[14px] text-[#555A64] tracking-[1.5px] md:tracking-[2px] uppercase pt-3 md:pt-2.5'>
                        A Lead UX & UI designer based in Canada
                    </p>
                </div>
                <div className="">
                    <Flex className={'flex-col lg:flex-row justify-between gap-y-10 lg:gap-y-0 lg:gap-x-7.5 items-start'}>
                        {/* Left Form Section */}
                        <div className="w-full lg:w-[70%] px-4 sm:px-5.5 py-7 sm:py-9 bg-white shadow-newMade3 rounded-[5px]">
                            <h4 className='text-[16px] md:text-[18px] text-[#090A0C] font-semibold uppercase pb-4 md:pb-5'>Say Something</h4>
                            <div className="flex flex-col md:flex-row justify-between gap-y-5 md:gap-y-0 md:gap-x-5 mb-5">
                                <div className="w-full relative group">
                                    <input type="text" placeholder='Name *' className='w-full p-3 outline-none border-b border-[#CCCCCC] text-[#555] placeholder:text-[#777]'/>
                                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#D9832E] transition-all duration-300 group-focus-within:w-full"></span>
                                </div>
                                <div className="w-full relative group">
                                    <input type="email" placeholder='Email *' className='w-full p-3 outline-none border-b border-[#CCCCCC] text-[#555] placeholder:text-[#777]'/>
                                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#D9832E] transition-all duration-300 group-focus-within:w-full"></span>
                                </div>
                            </div>
                            <div className="w-full relative mb-5 group">
                                <input type="text" placeholder='Subject *' className='w-full p-3 outline-none border-b border-[#CCCCCC] text-[#555] placeholder:text-[#777777]'/>
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#D9832E] transition-all duration-300 group-focus-within:w-full"></span>
                            </div>
                            <div className="w-full relative group">
                                <textarea name="" className='w-full p-3 outline-none border-b border-[#CCCCCC] resize-none text-[#555] placeholder:text-[#777]' rows={5} placeholder='Your message *'></textarea>
                                <span className="absolute bottom-1.5 left-0 h-0.5 w-0 bg-[#D9832E] transition-all duration-300 group-focus-within:w-full"></span>
                            </div>
                            <div className="">
                                <Button btnText={'SEND MESSAGE'} className={'mt-4 md:mt-5 w-full sm:w-auto flex justify-center'}/>
                            </div>
                        </div>
                        {/* Right Info Section */}
                        <div className="w-full lg:w-[30%] flex flex-col sm:flex-row lg:flex-col gap-5 lg:gap-0">
                            <div className="w-full p-5 shadow-newMade3 bg-white">
                                <div className="flex gap-x-4 md:gap-x-5">
                                    <div className="px-3 py-2 bg-[#D9832E] rounded-full h-10 w-10 shrink-0 flex items-center justify-center">
                                        <LuMapPin className='text-white'/>
                                    </div>
                                    <div className="">
                                        <h4 className='text-[14px] md:text-[15px] font-medium text-[#090A0C]'>Our Address</h4>
                                        <p className='text-[#555A64] text-sm pt-2'>123 Stree New York City , United States Of America 750065.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-5 shadow-newMade3 bg-white lg:mt-7.5">
                                <div className="flex gap-x-4 md:gap-x-5">
                                    <div className="px-3 py-2 bg-[#D9832E] rounded-full h-10 w-10 shrink-0 flex items-center justify-center">
                                        <LuMapPin className='text-white'/>
                                    </div>
                                    <div className="">
                                        <h4 className='text-[14px] md:text-[15px] font-medium text-[#090A0C]'>Our Phone</h4>
                                        <p className='text-[#555A64] text-sm pt-2 w-full lg:w-[188px]'>Office: +004 44444 44444</p>
                                        <p className='text-[#555A64] text-sm pt-2 w-full lg:w-[188px]'>Office: +004 44444 44444</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-5 shadow-newMade3 bg-white lg:mt-7.5">
                                <div className="flex gap-x-4 md:gap-x-5">
                                    <div className="px-3 py-2 bg-[#D9832E] rounded-full h-10 w-10 shrink-0 flex items-center justify-center">
                                        <LuMapPin className='text-white'/>
                                    </div>
                                    <div className="">
                                        <h4 className='text-[14px] md:text-[15px] font-medium text-[#090A0C]'>Our Email</h4>
                                        <p className='text-[#555A64] text-sm pt-2 break-all sm:break-normal'>info@domainname.com</p>
                                        <p className='text-[#555A64] text-sm pt-2 break-all sm:break-normal'>contact@domainname.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Flex>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Contact