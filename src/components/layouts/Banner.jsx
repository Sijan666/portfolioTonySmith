import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

const Banner = () => {
    return (
        <>
        <div className="bg-[url('/src/assets/banner.png')] bg-no-repeat bg-cover bg-center py-20 md:py-125">
            <Container className={'text-center px-4 lg:px-0'}>
                <h4 className='text-[18px] md:text-[24px] text-white font-medium'>Hello There!</h4>
                <h1 className='text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] text-white font-semibold pt-2 leading-tight'>I'm Tony Smith</h1>
                <div className="">
                    <Flex className={'gap-x-2 md:gap-x-3 gap-y-3 pt-5 md:pt-6 justify-center flex-wrap'}>
                        <div className="px-4 md:px-5 py-1.5 md:py-1.75 bg-white/13 rounded-[30px]">
                            <p className='text-white text-[10px] md:text-[12px] tracking-[1px] whitespace-nowrap'>Web Designer</p>
                        </div>
                        <div className="px-4 md:px-5 py-1.5 md:py-1.75 bg-white/13 rounded-[30px]">
                            <p className='text-white text-[10px] md:text-[12px] tracking-[1px] whitespace-nowrap'>Web Developer</p>
                        </div>
                        <div className="px-4 md:px-5 py-1.5 md:py-1.75 bg-white/13 rounded-[30px]">
                            <p className='text-white text-[10px] md:text-[12px] tracking-[1px] whitespace-nowrap'>UI/UX Designer</p>
                        </div>
                    </Flex>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Banner