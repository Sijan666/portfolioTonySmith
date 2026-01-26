import Aboutme from "../layouts/Aboutme"
import Banner from "../layouts/Banner"
import Contact from "../layouts/Contact"
import Service from "../layouts/Service"
import Skills from "../layouts/Skills"
import Testimonials from "../layouts/Testimonials"
import Works from "../layouts/Works"




const Home = () => {
    return (
        <>
        <Banner/>
        <Aboutme/>
        <Skills/>
        <Service/>
        <Works/>
        <Testimonials/>
        <Contact/>
        </>
    )
}

export default Home