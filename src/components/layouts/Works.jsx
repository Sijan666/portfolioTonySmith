import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
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
        <div className="py-25">
            <Container>
                <div className="mb-10">
                    <h3 className='text-[#090A0C] font-bold text-[35px] uppercase'>
                        <span className='border-b-2 border-[#D9832E] pb-1'>La</span>test Works
                    </h3>
                    <p className='text-[14px] text-[#555A64] tracking-[2px] uppercase pt-2.5'>
                        A Lead UX & UI designer based in Canada
                    </p>
                </div>
                <div className="pt-10">
                    <Flex className={'gap-x-5'}>
                        <Workshover src={w1} title="Our works" subtitle="Design" className="w-1/3"/>
                        <Workshover src={w2} title="Our works" subtitle="Design" className="w-1/3"/>
                        <Workshover src={w3} title="Our works" subtitle="Design" className="w-1/3"/>
                    </Flex>
                    <Flex className={'gap-x-5 mt-5'}>
                        <Workshover src={w4} title="Our works" subtitle="Design" className="w-1/3"/>
                        <Workshover src={w5} title="Our works" subtitle="Design" className="w-1/3"/>
                        <Workshover src={w6} title="Our works" subtitle="Design" className="w-1/3"/>
                    </Flex>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Works