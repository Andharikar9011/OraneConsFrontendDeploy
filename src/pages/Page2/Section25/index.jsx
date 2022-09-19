import React from 'react'
import PerksBar from './PerksBar'

const Section25 = () => {
  return (
    <div className='section25'>
    <div className='section25_container'> 
    
        <div className='s25_head'>
            <span>Employee Benifits and Perks</span>
            <p>We take care of our employees</p>
        </div>
        <div className='s25_bottom'>
          <div className='s25_perk_col'>
            <PerksBar content="Period Leaves"/>
            <PerksBar content="Need based Financial help"/>
            <PerksBar content="Performance based appreciation"/>
          </div>
          <div className='s25_perk_col'>
            <PerksBar content="Affermative work culture"/>
            <PerksBar content="Learning and devlopment"/>
            <PerksBar content="Work Life Balance"/>
          </div>
          <div className='s25_perk_col'>
            <PerksBar content="Holistic Training and Learning"/>
            <PerksBar content="Generous Parental Leave"/>
            <PerksBar content="Open Door Policy"/>
          </div>
          
        </div>

    </div>
    </div>
  )
}

export default Section25