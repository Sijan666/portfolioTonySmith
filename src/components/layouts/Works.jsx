// import React from 'react'
// import Container from '../Container'
// import Flex from '../Flex'
// import Images from '../Images'
// import w1 from '../../assets/w1.png'
// import w2 from '../../assets/w2.png'
// import w3 from '../../assets/w3.png'
// import w4 from '../../assets/w4.png'
// import w5 from '../../assets/w5.png'
// import w6 from '../../assets/w6.png'
// import Workshover from '../Workshover'

// const Works = () => {
//     return (
//         <>
//         <div className="py-25">
//             <Container>
//                 <div className="mb-10">
//                     <h3 className='text-[#090A0C] font-bold text-[35px] uppercase'>
//                         <span className='border-b-2 border-[#D9832E] pb-1'>La</span>test Works
//                     </h3>
//                     <p className='text-[14px] text-[#555A64] tracking-[2px] uppercase pt-2.5'>
//                         A Lead UX & UI designer based in Canada
//                     </p>
//                 </div>
//                 <div className="pt-10">
//                     <Flex className={'gap-x-5'}>
//                         <Workshover src={w1} title="Our works" subtitle="Design" className="w-1/3"/>
//                         <Workshover src={w2} title="Our works" subtitle="Design" className="w-1/3"/>
//                         <Workshover src={w3} title="Our works" subtitle="Design" className="w-1/3"/>
//                     </Flex>
//                     <Flex className={'gap-x-5 mt-5'}>
//                         <Workshover src={w4} title="Our works" subtitle="Design" className="w-1/3"/>
//                         <Workshover src={w5} title="Our works" subtitle="Design" className="w-1/3"/>
//                         <Workshover src={w6} title="Our works" subtitle="Design" className="w-1/3"/>
//                     </Flex>
//                 </div>
//             </Container>
//         </div>
//         </>
//     )
// }

// export default Works


import React from 'react'
import Container from '../Container'
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import w1 from '../../assets/w1.png'
import w2 from '../../assets/w2.png'
import w3 from '../../assets/w3.png'

const Works = () => {
    return (
        <section id="projects" className="py-28 bg-[#EBEEF1]">
            <Container>
                {/* Header Section */}
                <div className="text-center mb-20">
                    <span className="text-[#D9832E] font-bold tracking-[4px] uppercase text-sm">My Portfolio</span>
                    <h3 className='text-[#090A0C] font-bold text-[42px] mt-3 mb-6'>
                        Recent <span className="relative inline-block">
                            Works
                            <span className="absolute bottom-1 left-0 w-full h-2 bg-[#D9832E]/20 -z-10"></span>
                        </span>
                    </h3>
                    <p className='text-[#555A64] text-[16px] max-w-xl mx-auto leading-relaxed'>
                        Showcasing some of my best work in React, UI/UX Design, and Web Development.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* ================= Project 1 Start ================= */}
                    <div className="group bg-white rounded-4xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2">
                        {/* Image Container */}
                        <div className="relative h-[280px] overflow-hidden">
                            <img src={w1} alt="E-Commerce Website" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            
                            {/* Category Badge */}
                            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#090A0C] uppercase tracking-wide shadow-sm z-20">
                                React Development
                            </div>
                            
                            {/* Hover Overlay Buttons */}
                            <div className="absolute inset-0 bg-[#090A0C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a href="https://ui-addedin-orebi.vercel.app/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#090A0C] hover:bg-[#D9832E] hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-100" title="View Live">
                                    <FaArrowRight className="-rotate-45 text-lg"/>
                                </a>
                                <a href="https://github.com/Sijan666/OrebiFinalProject" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#090A0C] hover:bg-[#D9832E] hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-200" title="Github Code">
                                    <FaGithub className="text-xl"/>
                                </a>
                            </div>
                        </div>
                        
                        {/* Content Body */}
                        <div className="p-8 relative">
                            <div className="absolute top-0 left-0 w-0 h-1 bg-[#D9832E] transition-all duration-500 group-hover:w-full"></div>
                            
                            <h3 className="text-2xl font-bold text-[#090A0C] mb-3 group-hover:text-[#D9832E] transition-colors duration-300">
                                E-Commerce Ready
                            </h3>
                            <p className="text-[#555A64] text-[15px] leading-relaxed mb-6">
                                A fully functional online store with cart & checkout features.
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">#React</span>
                                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">#Redux</span>
                                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">#Tailwind</span>
                            </div>
                        </div>
                    </div>
                    {/* ================= Project 1 End ================= */}


                    {/* ================= Project 2 Start ================= */}
                    <div className="group bg-white rounded-4xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2">
                        <div className="relative h-[280px] overflow-hidden">
                            <img src={w2} alt="Portfolio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#090A0C] uppercase tracking-wide shadow-sm z-20">
                                UI/UX Design
                            </div>
                            <div className="absolute inset-0 bg-[#090A0C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a href="https://sijan666.github.io/pluginsAddedInPera/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#090A0C] hover:bg-[#D9832E] hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-100">
                                    <FaArrowRight className="-rotate-45 text-lg"/>
                                </a>
                                <a href="https://github.com/Sijan666/pluginsAddedInPera" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#090A0C] hover:bg-[#D9832E] hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-200">
                                    <FaGithub className="text-xl"/>
                                </a>
                            </div>
                        </div>
                        
                        <div className="p-8 relative">
                            <div className="absolute top-0 left-0 w-0 h-1 bg-[#D9832E] transition-all duration-500 group-hover:w-full"></div>
                            <h3 className="text-2xl font-bold text-[#090A0C] mb-3 group-hover:text-[#D9832E] transition-colors duration-300">
                                Designer Portfolio
                            </h3>
                            <p className="text-[#555A64] text-[15px] leading-relaxed mb-6">
                                A modern, high-conversion landing page for creative designers.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">#Design</span>
                                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">#Animation</span>
                                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">#GSAP</span>
                            </div>
                        </div>
                    </div>
                    {/* ================= Project 2 End ================= */}


                    {/* ================= Project 3 Start ================= */}
                    <div className="group bg-white rounded-4xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2">
                        <div className="relative h-[280px] overflow-hidden">
                            <img src={w3} alt="Number Game" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#090A0C] uppercase tracking-wide shadow-sm z-20">
                                Web Application
                            </div>
                            <div className="absolute inset-0 bg-[#090A0C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a href="https://number-guessing-game-final.vercel.app/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#090A0C] hover:bg-[#D9832E] hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-100">
                                    <FaArrowRight className="-rotate-45 text-lg"/>
                                </a>
                                <a href="https://github.com/Sijan666/NumberGuessingGameFinal" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#090A0C] hover:bg-[#D9832E] hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-200">
                                    <FaGithub className="text-xl"/>
                                </a>
                            </div>
                        </div>
                        
                        <div className="p-8 relative">
                            <div className="absolute top-0 left-0 w-0 h-1 bg-[#D9832E] transition-all duration-500 group-hover:w-full"></div>
                            <h3 className="text-2xl font-bold text-[#090A0C] mb-3 group-hover:text-[#D9832E] transition-colors duration-300">
                                Logic Game Hub
                            </h3>
                            <p className="text-[#555A64] text-[15px] leading-relaxed mb-6">
                                Interactive number guessing game with fun logic implementation.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">#JavaScript</span>
                                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">#DOM</span>
                                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">#Logic</span>
                            </div>
                        </div>
                    </div>
                    {/* ================= Project 3 End ================= */}

                </div>

                {/* Bottom Button */}
                <div className="text-center mt-20">
                    <a 
                        href="https://github.com/sijan666" 
                        target="_blank" 
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 px-10 py-4 border-2 border-[#D9832E] text-[#D9832E] font-bold uppercase tracking-widest text-sm rounded hover:bg-[#D9832E] hover:text-white transition-all duration-300"
                    >
                        View All Projects
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
                    </a>
                </div>
            </Container>
        </section>
    )
}

export default Works

