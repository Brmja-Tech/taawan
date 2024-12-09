import Features from "../components/Features/Features"
import Header from "../components/Header/Header"
import OurCompanies from "../components/OurCompanies/OurCompanies"
import OurVision from "../components/OurVision/OurVision"
import Partners from "../components/Partners/Partners"
import Service from "../components/Service/Service"
import WhyWe from "../components/WhyWe/WhyWe"



function Home() {
  return (
    <div>
        <Header/>
        <Features/>
        <OurVision/>
        <WhyWe/>
        <Service/>
        <Partners/>
        <OurCompanies/>
    </div>
  )
}

export default Home
