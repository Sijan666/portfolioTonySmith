import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import logo from '../../assets/logo.png'


const Header = () => {
    return (
        <>
        <div className="py-4 bg-white">
            <Container>
                <Flex className={'justify-between'}>
                    <div className="logo">
                        <Images imgSrc={logo}/>
                    </div>
                    <div className="">
                        <ul className="flex justify-between gap-x-6">
                            <li className="text-[13px] font-medium text-[#090A0C] cursor-pointer hover:text-[#D9832E] duration-300">Home</li>
                            <li className="text-[13px] font-medium text-[#090A0C] cursor-pointer hover:text-[#D9832E] duration-300">About</li>
                            <li className="text-[13px] font-medium text-[#090A0C] cursor-pointer hover:text-[#D9832E] duration-300">Service</li>
                            <li className="text-[13px] font-medium text-[#090A0C] cursor-pointer hover:text-[#D9832E] duration-300">Portfolio</li>
                            <li className="text-[13px] font-medium text-[#090A0C] cursor-pointer hover:text-[#D9832E] duration-300">Blog</li>
                            <li className="text-[13px] font-medium text-[#090A0C] cursor-pointer hover:text-[#D9832E] duration-300">Contact</li>
                        </ul>
                    </div>
                </Flex>
            </Container>
        </div>
        </>
    )
}

export default Header