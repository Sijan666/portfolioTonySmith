import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import r1 from '../../assets/r1.png'
import r2 from '../../assets/r2.png'

// Swiper এর মডিউল এবং কম্পোনেন্ট ইম্পোর্ট
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper CSS ইম্পোর্ট
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
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
                <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000, 
                        disableOnInteraction: false, 
                    }}
                    spaceBetween={50} 
                    slidesPerView={2} 
                    className="pb-24"
                    style={{
                        "--swiper-pagination-bottom": "0px",
                    }}>
                    <SwiperSlide>
                        <div className="bg-white p-5 border border-[#EEDDDD]">
                            <Flex className={'gap-x-6.5'}>
                                <Images imgSrc={r1}/>
                                <div className="w-[353px]">
                                    <p className='text-[#555A64] text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <h4 className='pt-4 pb-2 text-[18px] font-semibold text-[#090A0C]'>Nancy Bayers</h4>
                                    <p className='text-[#555A64] text-[15px]'>Co-founder</p>
                                </div>
                            </Flex>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-5 border border-[#EEDDDD]">
                            <Flex className={'gap-x-6.5'}>
                                <Images imgSrc={r2}/>
                                <div className="w-[353px]">
                                    <p className='text-[#555A64] text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <h4 className='pt-4 pb-2 text-[18px] font-semibold text-[#090A0C]'>Nancy Bayers</h4>
                                    <p className='text-[#555A64] text-[15px]'>Co-founder</p>
                                </div>
                            </Flex>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-5 border border-[#EEDDDD]">
                            <Flex className={'gap-x-6.5'}>
                                <Images imgSrc={r2}/>
                                <div className="w-[353px]">
                                    <p className='text-[#555A64] text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <h4 className='pt-4 pb-2 text-[18px] font-semibold text-[#090A0C]'>Nancy Bayers</h4>
                                    <p className='text-[#555A64] text-[15px]'>Co-founder</p>
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