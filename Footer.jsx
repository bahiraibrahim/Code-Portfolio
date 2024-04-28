import { footerLink } from '../../constants/constant'
import React from 'react'
import './footer.css'

const Footer = () => {

  const dateYears = new Date().getFullYear()

  return (
    <div id='footer'>
      <ul className="footer_ul">
        {footerLink.map((link) => {
          const title = link[0].toUpperCase() + link.slice(1)
          return (
            <li>
              <a href={`#${link}`}>{title}</a>
            </li>
          )
        }
        )}
      </ul>


      <p>
        ©{dateYears} Code. All rights reserved.
      </p>
    </div>
  )
}

export default Footer