import React from 'react'
import Basicbuttons from './s5buttons'
import S5img from './S5img'
import './styles.css'


function Section_5() {
  return (
    <div className='section_5'> 

        <h1> Business Transformation and Automated Entreprises</h1>
       
        <div className='s5_buttons' >
           <Basicbuttons name="SIMPLIFY"/>
           <Basicbuttons name="predict"/>
           <Basicbuttons name="empower"/>
        </div>

       
            <div className='row1'>
                <S5img className="overlapimg" url='./s5_img/s5_1.png' heading='Legacy Transformation'/>
                <S5img className="overlapimg" url='./s5_img/s5_2.png' heading='Cloud Transformation'/>
                <S5img className="overlapimg" url='./s5_img/s5_3.png' heading='Digital Transformation'/>
            </div>

            <div className='row2'>
                <S5img className="overlapimg" url='./s5_img/s5_4.png' heading='Audit & Optimization'/>
                <S5img className="overlapimg" url='./s5_img/s5_5.png' heading='Data Analytics'/>
                <S5img className="overlapimg" url='./s5_img/s5_6.png' heading='Mobile Enablement'/>
            </div>

           
            
        
    </div>
  )
}

export default Section_5