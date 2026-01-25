import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Monitor } from 'lucide-react'
import { IoPricetagsOutline } from 'react-icons/io5'
import { TbMessages, TbTargetArrow } from 'react-icons/tb'
import { LuTabletSmartphone } from 'react-icons/lu'
import { LiaToolsSolid } from 'react-icons/lia'

const Service = () => {
    return (
        <>
        <div className="py-25 bg-[#EAEDF2]">
            <Container>
                <div className="mb-10">
                    <h3 className='text-[#090A0C] font-bold text-[35px] uppercase'>
                        <span className='border-b-2 border-[#D9832E] pb-1'>My</span> Services
                    </h3>
                    <p className='text-[14px] text-[#555A64] tracking-[2px] uppercase pt-2.5'>
                        A Lead UX & UI designer based in Canada
                    </p>
                </div>
                <div className="pt-10">
                    <Flex className={'gap-x-7.5'}>
                        <div className="bg-white px-7.5 py-10 shadow-newMade2 rounded-[5px] w-1/3 translate-y-0 hover:-translate-y-5 duration-300 hover:bg-[#D9832E] group">
                            <div className="mb-5 border-2 border-dashed border-[#D9832E] group-hover:border-white px-4.5 py-5 rounded-full inline-block  animate-[spin_10s_linear_infinite] ">
                                <Monitor  className={'direction-[reverse] animate-[spin_10s_linear_infinite] text-[#D9832E] group-hover:text-white duration-300'}/>
                            </div>
                            <div className="">
                                <h4 className='text-base font-medium text-[#090A0C] group-hover:text-white duration-300'>Unique design</h4>
                                <p className='pt-2.75 text-[15px] text-[#555A64] group-hover:text-white duration-300'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                        <div className="bg-white px-7.5 py-10 shadow-newMade2 rounded-[5px] w-1/3 translate-y-0 hover:-translate-y-5 duration-300 hover:bg-[#D9832E] group">
                            <div className="mb-5 border-2 border-dashed border-[#D9832E] group-hover:border-white px-4.5 py-5 rounded-full inline-block  animate-[spin_10s_linear_infinite] ">
                                <IoPricetagsOutline  className={'direction-[reverse] animate-[spin_10s_linear_infinite] text-[#D9832E] group-hover:text-white duration-300'}/>
                            </div>
                            <div className="">
                                <h4 className='text-base font-medium text-[#090A0C] group-hover:text-white duration-300'>Different Layout</h4>
                                <p className='pt-2.75 text-[15px] text-[#555A64] group-hover:text-white duration-300'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                        <div className="bg-white px-7.5 py-10 shadow-newMade2 rounded-[5px] w-1/3 translate-y-0 hover:-translate-y-5 duration-300 hover:bg-[#D9832E] group">
                            <div className="mb-5 border-2 border-dashed border-[#D9832E] group-hover:border-white px-4.5 py-5 rounded-full inline-block  animate-[spin_10s_linear_infinite] ">
                                <TbMessages   className={'direction-[reverse] animate-[spin_10s_linear_infinite] text-[#D9832E] group-hover:text-white duration-300'}/>
                            </div>
                            <div className="">
                                <h4 className='text-base font-medium text-[#090A0C] group-hover:text-white duration-300'>Make it Simple</h4>
                                <p className='pt-2.75 text-[15px] text-[#555A64] group-hover:text-white duration-300'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                    </Flex>
                    <Flex className={'gap-x-7.5 mt-7.5'}>
                        <div className="bg-white px-7.5 py-10 shadow-newMade2 rounded-[5px] w-1/3 translate-y-0 hover:-translate-y-5 duration-300 hover:bg-[#D9832E] group">
                            <div className="mb-5 border-2 border-dashed border-[#D9832E] group-hover:border-white px-4.5 py-5 rounded-full inline-block  animate-[spin_10s_linear_infinite] ">
                                <LuTabletSmartphone  className={'direction-[reverse] animate-[spin_10s_linear_infinite] text-[#D9832E] group-hover:text-white duration-300'}/>
                            </div>
                            <div className="">
                                <h4 className='text-base font-medium text-[#090A0C] group-hover:text-white duration-300'>Responsiveness</h4>
                                <p className='pt-2.75 text-[15px] text-[#555A64] group-hover:text-white duration-300'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                        <div className="bg-white px-7.5 py-10 shadow-newMade2 rounded-[5px] w-1/3 translate-y-0 hover:-translate-y-5 duration-300 hover:bg-[#D9832E] group">
                            <div className="mb-5 border-2 border-dashed border-[#D9832E] group-hover:border-white px-4.5 py-5 rounded-full inline-block  animate-[spin_10s_linear_infinite] ">
                                <TbTargetArrow className={'direction-[reverse] animate-[spin_10s_linear_infinite] text-[#D9832E] group-hover:text-white duration-300'}/>
                            </div>
                            <div className="">
                                <h4 className='text-base font-medium text-[#090A0C] group-hover:text-white duration-300'>Testing for Perfection</h4>
                                <p className='pt-2.75 text-[15px] text-[#555A64] group-hover:text-white duration-300'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                        <div className="bg-white px-7.5 py-10 shadow-newMade2 rounded-[5px] w-1/3 translate-y-0 hover:-translate-y-5 duration-300 hover:bg-[#D9832E] group">
                            <div className="mb-5 border-2 border-dashed border-[#D9832E] group-hover:border-white px-4.5 py-5 rounded-full inline-block  animate-[spin_10s_linear_infinite] ">
                                <LiaToolsSolid  className={'direction-[reverse] animate-[spin_10s_linear_infinite] text-[#D9832E] group-hover:text-white duration-300'}/>
                            </div>
                            <div className="">
                                <h4 className='text-base font-medium text-[#090A0C] group-hover:text-white duration-300'>Advanced Options</h4>
                                <p className='pt-2.75 text-[15px] text-[#555A64] group-hover:text-white duration-300'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                    </Flex>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Service