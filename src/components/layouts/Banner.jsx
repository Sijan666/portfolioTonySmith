import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

const Banner = () => {
    return (
        <>
            <div className="bg-[url('/src/assets/banner.png')] bg-no-repeat bg-cover bg-center pt-[170px] pb-[120px] md:py-130 relative">
                <div className="absolute inset-0 bg-black/40"></div>
                <Container className={'relative z-10 text-center px-4 lg:px-0'}>
                    <h4 className='text-[18px] md:text-[24px] text-white font-medium tracking-wide'>
                        Hello There!
                    </h4>
                    <h1 className='text-[42px] sm:text-[55px] md:text-[70px] lg:text-[90px] text-white font-bold pt-3 leading-[110%]'>
                        I'm Tony Smith
                    </h1>
                    <p className='max-w-[700px] mx-auto text-white/70 text-sm md:text-base pt-5 leading-7'>
                        Creative Web Designer & Developer crafting modern,
                        premium and user-focused digital experiences.
                    </p>
                    {/* Skills */}
                    <div>
                        <Flex
                            className={
                                'gap-x-3 gap-y-4 pt-8 justify-center flex-wrap'
                            }
                        >
                            <div className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full">
                                <p className='text-white text-[11px] md:text-[13px] tracking-[1px] uppercase'>
                                    Web Designer
                                </p>
                            </div>
                            <div className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full">
                                <p className='text-white text-[11px] md:text-[13px] tracking-[1px] uppercase'>
                                    Web Developer
                                </p>
                            </div>
                            <div className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full">
                                <p className='text-white text-[11px] md:text-[13px] tracking-[1px] uppercase'>
                                    UI/UX Designer
                                </p>
                            </div>
                        </Flex>
                    </div>
                    {/* Buttons */}
                    <div className="flex items-center justify-center gap-4 pt-10 flex-wrap">
                        <button className='cursor-pointer px-6 py-2 bg-[#D9832E] text-white rounded-full text-sm md:text-base font-medium duration-300 shadow-[0_10px_40px_rgba(217,131,46,0.35)]'>
                            Hire Me
                        </button>
                        <button className='cursor-pointer px-6 py-2 border border-white/30 text-white rounded-full text-sm md:text-base font-medium hover:bg-white hover:text-black duration-300'>
                            Download CV
                        </button>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Banner