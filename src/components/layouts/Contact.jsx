import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { LuMapPin } from 'react-icons/lu'
import Button from '../Button'

const Contact = () => {
    return (
        <>
        <div className="py-25 bg-[#EAEDF2]">
            <Container>
                <div className="mb-10">
                    <h3 className='text-[#090A0C] font-bold text-[35px] uppercase'>
                        <span className='border-b-2 border-[#D9832E] pb-1'>Ge</span>t in touch
                    </h3>
                    <p className='text-[14px] text-[#555A64] tracking-[2px] uppercase pt-2.5'>
                        A Lead UX & UI designer based in Canada
                    </p>
                </div>
                <div className="">
                    <Flex className={'justify-between gap-x-7.5 items-start'}>
                        <div className="w-[70%] px-5.5 py-9 bg-white shadow-newMade3 rounded-[5px]">
                            <h4 className='text-[18px] text-[#090A0C] font-semibold uppercase pb-5'>Say Something</h4>
                            <div className="flex justify-between gap-x-5 mb-5">
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
                                <Button btnText={'SEND MESSAGE'} className={'mt-5'}/>
                            </div>
                        </div>
                        <div className="w-[30%]">
                            <div className="p-5 shadow-newMade3 bg-white">
                                <div className="flex gap-x-5">
                                    <div className="px-3 py-2 bg-[#D9832E] rounded-full h-10 w-10">
                                        <LuMapPin className='text-white'/>
                                    </div>
                                    <div className="">
                                        <h4 className='text-[15px] font-medium text-[#090A0C]'>Our Address</h4>
                                        <p className='text-[#555A64] text-sm pt-2'>123 Stree New York City , United States Of America 750065.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 shadow-newMade3 bg-white mt-7.5">
                                <div className="flex gap-x-5">
                                    <div className="px-3 py-2 bg-[#D9832E] rounded-full h-10 w-10">
                                        <LuMapPin className='text-white'/>
                                    </div>
                                    <div className="">
                                        <h4 className='text-[15px] font-medium text-[#090A0C]'>Our Phone</h4>
                                        <p className='text-[#555A64] text-sm pt-2 w-[188px]'>Office: +004 44444 44444</p>
                                        <p className='text-[#555A64] text-sm pt-2 w-[188px]'>Office: +004 44444 44444</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 shadow-newMade3 bg-white mt-7.5">
                                <div className="flex gap-x-5">
                                    <div className="px-3 py-2 bg-[#D9832E] rounded-full h-10 w-10">
                                        <LuMapPin className='text-white'/>
                                    </div>
                                    <div className="">
                                        <h4 className='text-[15px] font-medium text-[#090A0C]'>Our Email</h4>
                                        <p className='text-[#555A64] text-sm pt-2'>info@domainname.com</p>
                                        <p className='text-[#555A64] text-sm pt-2'>contact@domainname.com</p>
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