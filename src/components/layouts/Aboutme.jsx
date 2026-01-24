import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import aboutu from '../../assets/aboutu.png'

const Aboutme = () => {
    return (
        <>
        <div className="py-25 bg-[#EAEDF2]">
            <Container>
                <h3 className='text-[#090A0C] font-bold text-[35px]'><span className='border-b-2 border-[#D9832E] pb-1'>AB</span>OUT ME</h3>
                <p className='text-[14px] text-[#555A64] tracking-[2px] uppercase pt-2.5'>A Lead UX & UI designer based in Canada</p>
                <div className="pt-9">
                    <Flex className={'justify-between gap-x-12'}>
                        <div className="p-2.5 rounded-[5px] bg-white w-[40%]">
                            <Images imgSrc={aboutu}/>
                        </div>
                        <div className="w-[60%]">
                            <h4 className='text-[#090A0C] text-[30px] font-semibold'>I'M Tony Smith</h4>
                            <h5 className='text-[#090A0C] text-[18px] py-2.5'>A Lead <span className='text-[#D9832E]'>UX & UI</span> designer based in <span className='text-[#D9832E]'>Canada</span></h5>
                            <p className='text-[15px] text-[#555A64] leading-6'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio</p>
                            <div className="pt-6.5">
                                <div className="flex items-center gap-x-12 ">
                                    <div className="flex items-center gap-x-10 w-[312px]">
                                        <p className="text-sm font-medium w-[90px]">Birthday</p>
                                        <p className=" text-[#CCCCCC]">|</p>
                                        <p className="text[#555A64]">4th april 1991</p>
                                    </div>
                                    <div className="flex items-center gap-x-10 w-[312px]">
                                        <p className="text-sm font-medium w-[90px]">E-mail</p>
                                        <p className=" text-[#CCCCCC]">|</p>
                                        <p className="text[#555A64]">info@domain.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-12 mt-5">
                                    <div className="flex items-center gap-x-10 w-[312px]">
                                        <p className="text-sm font-medium w-[90px]">Age</p>
                                        <p className=" text-[#CCCCCC]">|</p>
                                        <p className="text[#555A64]">22 Yr</p>
                                    </div>
                                    <div className="flex items-center gap-x-10 w-[312px]">
                                        <p className="text-sm font-medium w-[90px]">Phone</p>
                                        <p className=" text-[#CCCCCC]">|</p>
                                        <p className="text[#555A64]">820-885-3321</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-12 mt-5">
                                    <div className="flex items-center gap-x-10  w-[312px]">
                                        <p className="text-sm font-medium w-[90px]">Residence</p>
                                        <p className=" text-[#CCCCCC]">|</p>
                                        <p className="text[#555A64]">Canada</p>
                                    </div>
                                    <div className="flex items-center gap-x-10 w-[312px]">
                                        <p className="text-sm font-medium w-[90px]">Skype</p>
                                        <p className=" text-[#CCCCCC]">|</p>
                                        <p className="text[#555A64]">skype.0404</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-12 mt-5">
                                    <div className="flex items-center gap-x-10  w-[312px]">
                                        <p className="text-sm font-medium w-[90px]">Address</p>
                                        <p className=" text-[#CCCCCC]">|</p>
                                        <p className="text[#555A64]">California, USA</p>
                                    </div>
                                    <div className="flex items-center gap-x-10 w-[312px]">
                                        <p className="text-sm font-medium w-[90px]">Freelance</p>
                                        <p className=" text-[#CCCCCC]">|</p>
                                        <p className="text[#555A64]">Available</p>
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

export default Aboutme