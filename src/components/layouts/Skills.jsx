import React, { useState, useEffect } from 'react'
import Container from '../Container'
import Flex from '../Flex' 
import { Progress } from "@/components/ui/progress"
import { FaCompactDisc, FaFlag, FaTrophy } from 'react-icons/fa'
import { GiCoffeeMug } from 'react-icons/gi'

const Skills = () => {

    const [progressValues, setProgressValues] = useState({
        html: 0,
        wordpress: 0,
        magento: 0,
        uiux: 0
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgressValues({
                html: 95,
                wordpress: 50,
                magento: 50,
                uiux: 90
            });
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="py-24">
            <Container>
                <div className="mb-10">
                    <h3 className='text-[#090A0C] font-bold text-[35px] uppercase'>
                        <span className='border-b-2 border-[#D9832E] pb-1'>My</span> Skills
                    </h3>
                    <p className='text-[14px] text-[#555A64] tracking-[2px] uppercase pt-2.5'>
                        A Lead UX & UI designer based in Canada
                    </p>
                </div>
                <div className="pt-9">
                    <Flex className={'justify-between items-center'}>
                        <div className="w-[570px]">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium text-black">HTML5</span>
                                <span className="text-sm font-medium text-gray-500">95%</span>
                            </div>
                            <Progress value={progressValues.html} className="w-full bg-gray-200 *:bg-[#D9832E]  *:duration-2000"/>
                            <div className="flex justify-between mb-2 mt-7.5">
                                <span className="text-sm font-medium text-black">WordPress</span>
                                <span className="text-sm font-medium text-gray-500">50%</span>
                            </div>
                            <Progress value={progressValues.wordpress} className="w-full bg-gray-200 *:bg-[#D9832E] *:duration-2000 *:delay-100"/>
                            <div className="flex justify-between mb-2 mt-7.5">
                                <span className="text-sm font-medium text-black">Magento</span>
                                <span className="text-sm font-medium text-gray-500">50%</span>
                            </div>
                            <Progress value={progressValues.magento} className="w-full bg-gray-200 *:bg-[#D9832E] *:duration-2000 *:delay-200"/>
                            <div className="flex justify-between mb-2 mt-7.5">
                                <span className="text-sm font-medium text-black">UI/UX</span>
                                <span className="text-sm font-medium text-gray-500">90%</span>
                            </div>
                            <Progress value={progressValues.uiux} className="w-full bg-gray-200 *:bg-[#D9832E] *:duration-2000 *:delay-300"/>
                        </div>
                        
                        <div className="">
                            <Flex className={'mb-5 gap-x-7.5 justify-end'}>
                                <div className="py-3.75 px-3.5 bg-white border-2 border-[#D9832E] rounded-[5px]">
                                    <Flex className={'justify-between gap-x-5'}>
                                        <FaCompactDisc className='text-[#D9832E] text-[30px]'/>
                                        <p className='text-[#090A0C] font-medium text-base w-30'>80 Albumes Listened</p>
                                    </Flex>
                                </div>
                                <div className="py-5.75 px-3.5 bg-white border-2 border-[#D9832E] rounded-[5px] ">
                                    <Flex className={'justify-between gap-x-5'}>
                                        <FaTrophy className='text-[#D9832E] text-[30px]'/>
                                        <p className='text-[#090A0C] font-medium text-base w-30'>15 Awards Won</p>
                                    </Flex>
                                </div>
                            </Flex>
                            <Flex className={'mb-5 gap-x-7.5 justify-end'}>
                                <div className="py-3.75 px-3.5 bg-white border-2 border-[#D9832E] rounded-[5px]">
                                    <Flex className={'justify-between gap-x-5'}>
                                        <GiCoffeeMug className='text-[#D9832E] text-[30px]'/>
                                        <p className='text-[#090A0C] font-medium text-base w-30'>1000 Cups of coffee</p>
                                    </Flex>
                                </div>
                                <div className="py-3.75 px-3.5 bg-white border-2 border-[#D9832E] rounded-[5px] ">
                                    <Flex className={'justify-between gap-x-5'}>
                                        <FaFlag className='text-[#D9832E] text-[30px]'/>
                                        <p className='text-[#090A0C] font-medium text-base w-30'>10 Countries Visited</p>
                                    </Flex>
                                </div>
                            </Flex>
                        </div>
                    </Flex>
                </div>
            </Container>
        </div>
    )
}

export default Skills