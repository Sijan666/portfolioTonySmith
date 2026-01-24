import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

const Banner = () => {
    return (
        <>
        <div className="bg-[url('/src/assets/banner.png')] bg-no-repeat bg-cover bg-center py-125">
            <Container className={'text-center'}>
                <h4 className='text-[24px] text-white font-medium'>Hello There!</h4>
                <h1 className='text-[80px] text-white font-semibold pt-2'>I'm Tony Smith</h1>
                <div className="">
                    <Flex className={'gap-x-2 pt-6 justify-center'}>
                        <div className="px-5 py-1.75 bg-white/13 rounded-[30px]">
                            <p className='text-white text-[12px] tracking-[1px]'>Web Designer</p>
                        </div>
                        <div className="px-5 py-1.75 bg-white/13 rounded-[30px]">
                            <p className='text-white text-[12px] tracking-[1px]'>Web Developer</p>
                        </div>
                        <div className="px-5 py-1.75 bg-white/13 rounded-[30px]">
                            <p className='text-white text-[12px] tracking-[1px]'>UI/UX Designer</p>
                        </div>
                    </Flex>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Banner