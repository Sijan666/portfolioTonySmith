import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import aboutu from '../../assets/aboutu.png'
import Button from '../Button'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Aboutme = () => {
    return (
        <>
        <div className="py-16 md:py-25 bg-[#EAEDF2]">
            <Container className={'px-4 lg:px-0'}>
                <h3 className='text-[#090A0C] font-bold text-[28px] md:text-[35px]'><span className='border-b-2 border-[#D9832E] pb-1'>AB</span>OUT ME</h3>
                <p className='text-[12px] md:text-[14px] text-[#555A64] tracking-[2px] uppercase pt-2.5'>A Lead UX & UI designer based in Canada</p>
                <div className="pt-8 md:pt-9">
                    <Flex className={'flex-col lg:flex-row justify-between gap-y-10 lg:gap-y-0 lg:gap-x-12'}>
                        <div className="p-2.5 rounded-[5px] bg-white w-full md:w-[70%] lg:w-[40%] mx-auto relative group shrink-0">
                            <Images imgSrc={aboutu} className="w-full object-cover rounded-[5px]"/>
                            <div className="p-2 bg-white border-2 border-white opacity-0 group-hover:opacity-100 duration-300 -translate-x-2 group-hover:translate-x-2 inline-block overflow-hidden absolute top-8 left-0">
                                <div className="p-3 bg-[#D9832E] duration-500 -translate-x-1 group-hover:translate-x-0 cursor-pointer opacity-0 group-hover:opacity-100">
                                    <FaFacebookF className='text-white'/>
                                </div>
                                {/* Twitter */}
                                <div className="p-3 bg-[#D9832E] mt-3 duration-500 delay-100 -translate-x-1 group-hover:translate-x-0 cursor-pointer opacity-0 group-hover:opacity-100">
                                    <FaTwitter className='text-white'/>
                                </div>
                                {/* Instagram */}
                                <div className="p-3 bg-[#D9832E] mt-3 duration-500 delay-200 -translate-x-1 group-hover:translate-x-0 cursor-pointer opacity-0 group-hover:opacity-100">
                                    <FaInstagram className='text-white'/>
                                </div>
                                {/* LinkedIn */}
                                <div className="p-3 bg-[#D9832E] mt-3 duration-500 delay-300 -translate-x-1 group-hover:translate-x-0 cursor-pointer opacity-0 group-hover:opacity-100">
                                    <FaLinkedinIn className='text-white'/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[60%]">
                            <h4 className='text-[#090A0C] text-[24px] md:text-[30px] font-semibold'>I'M Tony Smith</h4>
                            <h5 className='text-[#090A0C] text-[16px] md:text-[18px] py-2.5'>A Lead <span className='text-[#D9832E]'>UX & UI</span> designer based in <span className='text-[#D9832E]'>Canada</span></h5>
                            <p className='text-[14px] md:text-[15px] text-[#555A64] leading-6 md:leading-relaxed'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio</p>
                            <div className="pt-6 pb-8 md:pt-6.5 md:pb-7.5">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-y-4 sm:gap-y-0 sm:gap-x-12">
                                    <div className="flex items-center gap-x-4 sm:gap-x-10 w-full sm:w-[312px]">
                                        <p className="text-sm font-medium w-[90px] text-[#090A0C]">Birthday</p>
                                        <p className="text-[#CCCCCC]">|</p>
                                        <p className="text-[#555A64] text-sm whitespace-nowrap">4th april 1991</p>
                                    </div>
                                    <div className="flex items-center gap-x-4 sm:gap-x-10 w-full sm:w-[312px]">
                                        <p className="text-sm font-medium w-[90px] text-[#090A0C]">E-mail</p>
                                        <p className="text-[#CCCCCC]">|</p>
                                        <p className="text-[#555A64] text-sm break-all sm:break-normal">info@domain.com</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-y-4 sm:gap-y-0 sm:gap-x-12 mt-4 sm:mt-5">
                                    <div className="flex items-center gap-x-4 sm:gap-x-10 w-full sm:w-[312px]">
                                        <p className="text-sm font-medium w-[90px] text-[#090A0C]">Age</p>
                                        <p className="text-[#CCCCCC]">|</p>
                                        <p className="text-[#555A64] text-sm whitespace-nowrap">22 Yr</p>
                                    </div>
                                    <div className="flex items-center gap-x-4 sm:gap-x-10 w-full sm:w-[312px]">
                                        <p className="text-sm font-medium w-[90px] text-[#090A0C]">Phone</p>
                                        <p className="text-[#CCCCCC]">|</p>
                                        <p className="text-[#555A64] text-sm whitespace-nowrap">820-885-3321</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-y-4 sm:gap-y-0 sm:gap-x-12 mt-4 sm:mt-5">
                                    <div className="flex items-center gap-x-4 sm:gap-x-10 w-full sm:w-[312px]">
                                        <p className="text-sm font-medium w-[90px] text-[#090A0C]">Residence</p>
                                        <p className="text-[#CCCCCC]">|</p>
                                        <p className="text-[#555A64] text-sm whitespace-nowrap">Canada</p>
                                    </div>
                                    <div className="flex items-center gap-x-4 sm:gap-x-10 w-full sm:w-[312px]">
                                        <p className="text-sm font-medium w-[90px] text-[#090A0C]">Skype</p>
                                        <p className="text-[#CCCCCC]">|</p>
                                        <p className="text-[#555A64] text-sm whitespace-nowrap">skype.0404</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-y-4 sm:gap-y-0 sm:gap-x-12 mt-4 sm:mt-5">
                                    <div className="flex items-center gap-x-4 sm:gap-x-10 w-full sm:w-[312px]">
                                        <p className="text-sm font-medium w-[90px] text-[#090A0C]">Address</p>
                                        <p className="text-[#CCCCCC]">|</p>
                                        <p className="text-[#555A64] text-sm whitespace-nowrap">California, USA</p>
                                    </div>
                                    <div className="flex items-center gap-x-4 sm:gap-x-10 w-full sm:w-[312px]">
                                        <p className="text-sm font-medium w-[90px] text-[#090A0C]">Freelance</p>
                                        <p className="text-[#CCCCCC]">|</p>
                                        <p className="text-[#555A64] text-sm whitespace-nowrap">Available</p>
                                    </div>
                                </div>
                            </div>
                            <Button btnText={'DOWNLOAD CV'} className={"w-full sm:w-auto text-center flex justify-center"}/>
                        </div>
                    </Flex>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Aboutme