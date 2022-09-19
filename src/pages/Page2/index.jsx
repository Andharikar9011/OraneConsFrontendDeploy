import React from 'react'
import Footer from '../../components/Footer/Footer'
import HeaderRes from '../../components/Navbar/HeaderRes'
import CommonCover from '../../components/utility/CommonCover'
// import CoverCardBtn from '../../components/utility/CoverCardBtn'
import Section21 from './Section21'
import { Section22 } from './Section22'
import Section23 from './Section23'
import Section25 from './Section25'
import Section26 from './Section26'

function Page2(){
  return (
    <div>
    <HeaderRes/>
    <CommonCover heading="Life at Orane" content="Go to Open Positions"/>
    <Section21/>
    <Section22/>
    <Section23/>
    <Section25/>
    <Section26/>
    
    <Footer/>
  </div>
  )
}

export default Page2;
