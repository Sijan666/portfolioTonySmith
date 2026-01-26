import { FaFacebook } from "react-icons/fa"
import Container from "../Container"
import Flex from "../Flex"
import { BsInstagram, BsTwitter } from "react-icons/bs"
import { LiaLinkedin } from "react-icons/lia"
import { PiPinterestLogo } from "react-icons/pi"



const Footer = () => {
  return (
    <>
    <div className="py-5.5 bg-[#111111]">
      <Container>
        <Flex className={'justify-between'}>
          <div className="flex gap-x-5">
            <FaFacebook className="text-white/50 cursor-pointer"/>
            <BsTwitter className="text-white/50 cursor-pointer"/>
            <BsInstagram className="text-white/50 cursor-pointer"/>
            <LiaLinkedin className="text-white/50 cursor-pointer"/>
            <PiPinterestLogo className="text-white/50 cursor-pointer"/>
          </div>
          <div className="">
            <p className="text-white/50 text-[12px]">© 2019 copyright all right reserved</p>
          </div>
        </Flex>
      </Container>
    </div>
    </>
  )
}

export default Footer
