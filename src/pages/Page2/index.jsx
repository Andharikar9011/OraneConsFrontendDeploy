import React from 'react'
import Footer from '../../components/Footer/Footer'
import HeaderRes from '../../components/Navbar/HeaderRes'
import CommonCover from '../../components/utility/CommonCover'
import CoverCardBtn from '../../components/utility/CoverCardBtn'
import Section21 from './Section21'
import { Section22 } from './Section22'

export const Page2 = () => {
  return (
    <div>
    <HeaderRes/>
    <CommonCover heading="Life at Orane" content="Go to Open Positions"/>
    <Section21/>
    <Section22/>
    <CoverCardBtn heading="Logistics & Supply Chain" content="Integrated Solutions For Wide  Logistic Operations"/>
    <Footer/>
  </div>
  )
}
