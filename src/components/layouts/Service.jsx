import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import monitor from '../../assets/monitor.png'
import tags from '../../assets/tags.png'
import msg from '../../assets/msg.png'
import tab from '../../assets/tab.png'
import target from '../../assets/target.png'
import tools from '../../assets/tools.png'

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
                <div className="">
                    <Flex className={'gap-x-7.5'}>
                        <div className="bg-white px-7.5 py-10 shadow-newMade2 rounded-[5px] w-1/3 ">
                            <div className="mb-5 border-2 border-dashed border-[#D9832E] px-4.5 py-5 rounded-full inline-block  animate-[spin_10s_linear_infinite]">
                                <Images imgSrc={monitor} className={'direction-[reverse] animate-[spin_10s_linear_infinite]'}/>
                            </div>
                            <div className="">
                                <h4 className='text-base font-medium text-[#090A0C]'>Unique design</h4>
                                <p className='pt-2.75 text-[15px] text-[#555A64]'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                        <div className="bg-white px-7.5 py-10 shadow-newMade2 rounded-[5px] w-1/3 ">
                            <div className="mb-5 border-2 border-dashed border-[#D9832E] px-4.5 py-5 rounded-full inline-block  animate-[spin_10s_linear_infinite]">
                                <Images imgSrc={tags} className={'direction-[reverse] animate-[spin_10s_linear_infinite]'}/>
                            </div>
                            <div className="">
                                <h4 className='text-base font-medium text-[#090A0C]'>Different Layout</h4>
                                <p className='pt-2.75 text-[15px] text-[#555A64]'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                        <div className="bg-white px-7.5 py-10 shadow-newMade2 rounded-[5px] w-1/3 ">
                            <div className="mb-5 border-2 border-dashed border-[#D9832E] px-4.5 py-5 rounded-full inline-block  animate-[spin_10s_linear_infinite]">
                                <Images imgSrc={msg} className={'direction-[reverse] animate-[spin_10s_linear_infinite]'}/>
                            </div>
                            <div className="">
                                <h4 className='text-base font-medium text-[#090A0C]'>Make it Simple</h4>
                                <p className='pt-2.75 text-[15px] text-[#555A64]'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                    </Flex>
                    <Flex className={'gap-x-7.5 mt-7.5'}>
                        <div className="bg-white px-7.5 py-10 shadow-newMade2 rounded-[5px] w-1/3 ">
                            <div className="mb-5 border-2 border-dashed border-[#D9832E] px-4.5 py-5 rounded-full inline-block  animate-[spin_10s_linear_infinite]">
                                <Images imgSrc={tab} className={'direction-[reverse] animate-[spin_10s_linear_infinite]'}/>
                            </div>
                            <div className="">
                                <h4 className='text-base font-medium text-[#090A0C]'>Responsiveness</h4>
                                <p className='pt-2.75 text-[15px] text-[#555A64]'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                        <div className="bg-white px-7.5 py-10 shadow-newMade2 rounded-[5px] w-1/3 ">
                            <div className="mb-5 border-2 border-dashed border-[#D9832E] px-4.5 py-5 rounded-full inline-block  animate-[spin_10s_linear_infinite]">
                                <Images imgSrc={target} className={'direction-[reverse] animate-[spin_10s_linear_infinite]'}/>
                            </div>
                            <div className="">
                                <h4 className='text-base font-medium text-[#090A0C]'>Testing for Perfection</h4>
                                <p className='pt-2.75 text-[15px] text-[#555A64]'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                        <div className="bg-white px-7.5 py-10 shadow-newMade2 rounded-[5px] w-1/3 ">
                            <div className="mb-5 border-2 border-dashed border-[#D9832E] px-4.5 py-5 rounded-full inline-block  animate-[spin_10s_linear_infinite]">
                                <Images imgSrc={tools} className={'direction-[reverse] animate-[spin_10s_linear_infinite]'}/>
                            </div>
                            <div className="">
                                <h4 className='text-base font-medium text-[#090A0C]'>Advanced Options</h4>
                                <p className='pt-2.75 text-[15px] text-[#555A64]'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
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