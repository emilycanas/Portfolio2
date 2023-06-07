import React from 'react'
import { Link } from "react-router-dom";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import './back.css'
function Back(){
    return(
        <div className='center biggerletter p-5'>
          <Link to="/" href="#">
            <BsFillArrowLeftCircleFill/>
          </Link>
      </div>
    )
}

export default Back;