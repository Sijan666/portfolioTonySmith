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
        <div className="py-16 md:py-24">
            <Container className={'px-4 lg:px-0'}>
                <div className="mb-8 md:mb-10 text-center lg:text-left">
                    <h3 className='text-[#090A0C] font-bold text-[28px] md:text-[35px] uppercase'>
                        <span className='border-b-2 border-[#D9832E] pb-1'>My</span> Skills
                    </h3>
                    <p className='text-[12px] md:text-[14px] text-[#555A64] tracking-[1.5px] md:tracking-[2px] uppercase pt-3 md:pt-2.5'>
                        A Lead UX & UI designer based in Canada
                    </p>
                </div>
                <div className="pt-6 md:pt-9">
                    <Flex className={'flex-col lg:flex-row justify-between items-center lg:items-start gap-y-12 lg:gap-y-0 lg:gap-x-10'}>
                        {/* Progress Bars Section */}
                        <div className="w-full lg:w-[50%] xl:w-[570px]">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium text-black">HTML5</span>
                                <span className="text-sm font-medium text-gray-500">95%</span>
                            </div>
                            <Progress value={progressValues.html} className="w-full bg-gray-200 *:bg-[#D9832E]  *:duration-2000"/>
                            <div className="flex justify-between mb-2 mt-6 md:mt-7.5">
                                <span className="text-sm font-medium text-black">WordPress</span>
                                <span className="text-sm font-medium text-gray-500">50%</span>
                            </div>
                            <Progress value={progressValues.wordpress} className="w-full bg-gray-200 *:bg-[#D9832E] *:duration-2000 *:delay-100"/>
                            <div className="flex justify-between mb-2 mt-6 md:mt-7.5">
                                <span className="text-sm font-medium text-black">Magento</span>
                                <span className="text-sm font-medium text-gray-500">50%</span>
                            </div>
                            <Progress value={progressValues.magento} className="w-full bg-gray-200 *:bg-[#D9832E] *:duration-2000 *:delay-200"/>
                            <div className="flex justify-between mb-2 mt-6 md:mt-7.5">
                                <span className="text-sm font-medium text-black">UI/UX</span>
                                <span className="text-sm font-medium text-gray-500">90%</span>
                            </div>
                            <Progress value={progressValues.uiux} className="w-full bg-gray-200 *:bg-[#D9832E] *:duration-2000 *:delay-300"/>
                        </div>
                        {/* Cards Section */}
                        <div className="w-full lg:w-[45%] flex flex-col gap-y-5">
                            <Flex className={'flex-col sm:flex-row gap-y-5 sm:gap-y-0 sm:gap-x-5 lg:gap-x-7.5 lg:justify-end'}>
                                <div className="py-4 md:py-3.75 px-4 md:px-3.5 bg-white border-2 border-[#D9832E] rounded-[5px] w-full sm:w-1/2 lg:w-auto">
                                    <Flex className={'justify-between items-center gap-x-4 md:gap-x-5'}>
                                        <FaCompactDisc className='text-[#D9832E] text-[26px] md:text-[30px] shrink-0'/>
                                        <p className='text-[#090A0C] font-medium text-[14px] md:text-base w-full sm:w-30'>80 Albumes Listened</p>
                                    </Flex>
                                </div>
                                <div className="py-4 md:py-5.75 px-4 md:px-3.5 bg-white border-2 border-[#D9832E] rounded-[5px] w-full sm:w-1/2 lg:w-auto">
                                    <Flex className={'justify-between items-center gap-x-4 md:gap-x-5'}>
                                        <FaTrophy className='text-[#D9832E] text-[26px] md:text-[30px] shrink-0'/>
                                        <p className='text-[#090A0C] font-medium text-[14px] md:text-base w-full sm:w-30'>15 Awards Won</p>
                                    </Flex>
                                </div>
                            </Flex>
                            <Flex className={'flex-col sm:flex-row gap-y-5 sm:gap-y-0 sm:gap-x-5 lg:gap-x-7.5 lg:justify-end'}>
                                <div className="py-4 md:py-3.75 px-4 md:px-3.5 bg-white border-2 border-[#D9832E] rounded-[5px] w-full sm:w-1/2 lg:w-auto">
                                    <Flex className={'justify-between items-center gap-x-4 md:gap-x-5'}>
                                        <GiCoffeeMug className='text-[#D9832E] text-[26px] md:text-[30px] shrink-0'/>
                                        <p className='text-[#090A0C] font-medium text-[14px] md:text-base w-full sm:w-30'>1000 Cups of coffee</p>
                                    </Flex>
                                </div>
                                <div className="py-4 md:py-3.75 px-4 md:px-3.5 bg-white border-2 border-[#D9832E] rounded-[5px] w-full sm:w-1/2 lg:w-auto">
                                    <Flex className={'justify-between items-center gap-x-4 md:gap-x-5'}>
                                        <FaFlag className='text-[#D9832E] text-[26px] md:text-[30px] shrink-0'/>
                                        <p className='text-[#090A0C] font-medium text-[14px] md:text-base w-full sm:w-30'>10 Countries Visited</p>
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