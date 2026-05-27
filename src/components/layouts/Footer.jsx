import { FaFacebook } from "react-icons/fa"
import Container from "../Container"
import Flex from "../Flex"
import { BsInstagram, BsTwitter } from "react-icons/bs"
import { LiaLinkedin } from "react-icons/lia"
import { PiPinterestLogo } from "react-icons/pi"

const Footer = () => {
  return (
    <>
    <div className="py-5 md:py-5.5 bg-[#111111]">
      <Container className={'px-4 lg:px-0'}>
        <Flex className={'flex-col md:flex-row justify-center md:justify-between items-center gap-y-6 md:gap-y-0'}>
          <div className="flex gap-x-5">
            <FaFacebook className="text-white/50 hover:text-white transition-colors duration-300 cursor-pointer text-lg md:text-base"/>
            <BsTwitter className="text-white/50 hover:text-white transition-colors duration-300 cursor-pointer text-lg md:text-base"/>
            <BsInstagram className="text-white/50 hover:text-white transition-colors duration-300 cursor-pointer text-lg md:text-base"/>
            <LiaLinkedin className="text-white/50 hover:text-white transition-colors duration-300 cursor-pointer text-lg md:text-base"/>
            <PiPinterestLogo className="text-white/50 hover:text-white transition-colors duration-300 cursor-pointer text-lg md:text-base"/>
          </div>
          <div className="text-center md:text-left">
            <p className="text-white/50 text-[12px] md:text-[14px]">© 2026 copyright all right reserved</p>
          </div>
        </Flex>
      </Container>
    </div>
    </>
  )
}

export default Footer