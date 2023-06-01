import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// images
import headerimg from '../image/doctor1.png'
import header1 from '../image/header1.png'
import header2 from '../image/header2.png'
import header3 from '../image/header3.png'
import header4 from '../image/header4.png'

import './Home.css'

const Home = () => {
  return (
    <header>
      <div className='container'>
      <div className='row'>

      <div className='colo-md-6 col-lg-6'>
      <h5>We Provide All Health Care Solution</h5>
      <h2>Protect Your Health And Take Care To Of Your Health</h2>
      <button className='takebtn'> <a href='#'>Read more</a> </button>

      </div>



      <div className='colo-md-6 col-lg-6'>
        <img className='doctorimg1' src={headerimg}/>
   
      </div>

      <div className='smoallimg'>
        <img className='header1' src={header1} />
        <img className='header2' src={header2}/>
        <img className='header3' src={header3} />
        <img className='header4' src={header4} />
      </div> 


      </div>

      </div>
    </header>
  )
}

export default Home