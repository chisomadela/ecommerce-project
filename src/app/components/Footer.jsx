import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaTwitterSquare } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-blue-800 text-white h-[30vh] flex flex-col items-center justify-center text-3xl">
        <p>This app is a product of &copy;<Link href="https://univecity.com/" target="_blank" className="hover:font-bold px-3">univelcity</Link>{currentYear}</p>
        <div>
          <h2>Reach Out To Us On</h2>
          <ul>
            <li><Link href={'#'}>
            <FaInstagram/>           
            </Link></li>
            <li><Link href={'#'}>
            <FaTwitterSquare/>
            </Link></li>
            <li>
              
            </li>
            <li></li>
          </ul>


        </div>
    </footer>

  )
}

export default Footer