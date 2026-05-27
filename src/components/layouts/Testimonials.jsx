import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import r1 from '../../assets/r1.png'
import r2 from '../../assets/r2.png'

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <div className="py-16 md:py-25 bg-[#EAEDF2]/40">
            <Container className={'px-4 lg:px-0'}>
                <div className="mb-8 md:mb-10 text-center lg:text-left">
                    <h3 className='text-[#090A0C] font-bold text-[28px] md:text-[35px] uppercase'>
                        <span className='border-b-2 border-[#D9832E] pb-1'>My</span> Clients
                    </h3>
                    <p className='text-[12px] md:text-[14px] text-[#555A64] tracking-[1.5px] md:tracking-[2px] uppercase pt-3 md:pt-2.5'>
                        A Lead UX & UI designer based in Canada
                    </p>
                </div>
                <Swiper 
                    modules={[Pagination, Autoplay]} 
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000, 
                        disableOnInteraction: false, 
                    }}
                    spaceBetween={30} 
                    slidesPerView={1} 
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        }
                    }}
                    className="pb-16 md:pb-24"
                    style={{
                        "--swiper-pagination-bottom": "0px",
                    }}
                >
                    <SwiperSlide className="h-auto">
                        <div className="bg-white p-5 md:p-6 border border-[#EEDDDD] h-full rounded-md">
                            <Flex className={'flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-y-5 sm:gap-y-0 sm:gap-x-6.5'}>
                                <Images imgSrc={r1} className="w-20 h-20 md:w-auto md:h-auto shrink-0 object-cover rounded-full sm:rounded-none"/>
                                <div className="w-full">
                                    <p className='text-[#555A64] text-[14px] md:text-[15px] leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <h4 className='pt-4 pb-1 md:pb-2 text-[16px] md:text-[18px] font-semibold text-[#090A0C]'>Nancy Bayers</h4>
                                    <p className='text-[#555A64] text-[13px] md:text-[15px]'>Co-founder</p>
                                </div>
                            </Flex>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-auto">
                        <div className="bg-white p-5 md:p-6 border border-[#EEDDDD] h-full rounded-md">
                            <Flex className={'flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-y-5 sm:gap-y-0 sm:gap-x-6.5'}>
                                <Images imgSrc={r2} className="w-20 h-20 md:w-auto md:h-auto shrink-0 object-cover rounded-full sm:rounded-none"/>
                                <div className="w-full">
                                    <p className='text-[#555A64] text-[14px] md:text-[15px] leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <h4 className='pt-4 pb-1 md:pb-2 text-[16px] md:text-[18px] font-semibold text-[#090A0C]'>Nancy Bayers</h4>
                                    <p className='text-[#555A64] text-[13px] md:text-[15px]'>Co-founder</p>
                                </div>
                            </Flex>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-auto">
                        <div className="bg-white p-5 md:p-6 border border-[#EEDDDD] h-full rounded-md">
                            <Flex className={'flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-y-5 sm:gap-y-0 sm:gap-x-6.5'}>
                                <Images imgSrc={r2} className="w-20 h-20 md:w-auto md:h-auto shrink-0 object-cover rounded-full sm:rounded-none"/>
                                <div className="w-full">
                                    <p className='text-[#555A64] text-[14px] md:text-[15px] leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <h4 className='pt-4 pb-1 md:pb-2 text-[16px] md:text-[18px] font-semibold text-[#090A0C]'>Nancy Bayers</h4>
                                    <p className='text-[#555A64] text-[13px] md:text-[15px]'>Co-founder</p>
                                </div>
                            </Flex>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </div>
    )
}

export default Testimonials