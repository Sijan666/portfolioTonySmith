import React from 'react'
import Container from '../Container'
import w1 from '../../assets/w1.png'
import w2 from '../../assets/w2.png'
import w3 from '../../assets/w3.png'
import w4 from '../../assets/w4.png'
import w5 from '../../assets/w5.png'
import w6 from '../../assets/w6.png'
import Workshover from '../Workshover'

const Works = () => {
    return (
        <>
        <div className="py-16 md:py-25">
            <Container className={'px-4 lg:px-0'}>
                <div className="mb-8 md:mb-10 text-center lg:text-left">
                    <h3 className='text-[#090A0C] font-bold text-[28px] md:text-[35px] uppercase'>
                        <span className='border-b-2 border-[#D9832E] pb-1'>La</span>test Works
                    </h3>
                    <p className='text-[12px] md:text-[14px] text-[#555A64] tracking-[1.5px] md:tracking-[2px] uppercase pt-3 md:pt-2.5'>
                        A Lead UX & UI designer based in Canada
                    </p>
                </div>
                <div className="pt-6 md:pt-10">
                    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
                        <Workshover src={w1} title="Our works" subtitle="Design"/>
                        <Workshover src={w2} title="Our works" subtitle="Design"/>
                        <Workshover src={w3} title="Our works" subtitle="Design"/>
                        <Workshover src={w4} title="Our works" subtitle="Design"/>
                        <Workshover src={w5} title="Our works" subtitle="Design"/>
                        <Workshover src={w6} title="Our works" subtitle="Design"/>
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Works