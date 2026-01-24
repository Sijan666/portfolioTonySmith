import React from 'react'
import Container from '../Container'
import Flex from '../Flex' 
import { Progress } from "@/components/ui/progress"

const Skills = () => {
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
                        <div className="w-full max-w-sm">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium text-black">HTML5</span>
                                <span className="text-sm font-medium text-gray-500">96%</span>
                            </div>
                            <Progress value={96} className="w-full bg-gray-200 *:bg-[#D9832E]"/>
                        </div>
                    </Flex>
                </div>
            </Container>
        </div>
    )
}

export default Skills