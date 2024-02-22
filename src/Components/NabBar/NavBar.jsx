/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import './NavBarStyle.css'
import purpleCircle from '../../assets/Img/purple-circle.svg'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';


const NavBar = ({ menu }) => {
    const [menuIcon, setMenu] = useState(false)



    const showMenu = () => {
        setMenu(!menuIcon)
    }
    return (
        <div className="NavbarContainer">
            <div className='logo'>
                <h1 className='logoLetters'>B-W</h1>
                <div className='logoIcon'><img className='logoIcon' src={purpleCircle} alt="" /></div>
                <h1 className='logoLetters'> rld</h1>
            </div>
            <ul className='NavBarElements'>
                {menu.map((element, index) => {
                    return (
                        <Link className='NavBarElement' key={index}>{element}</Link>
                    )
                })}
            </ul>
            <div className='Theme'>

                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <g clipPath="url(#clip0_90_342)">
                        <path d="M18.7966 13.1951C17.7195 13.6898 16.5142 13.9652 15.2348 13.9652C10.4197 13.9652 6.37928 10.0642 6.21032 5.25214C6.16543 3.97363 6.39834 2.75945 6.85491 1.66565C3.8779 3.0328 1.87992 6.07508 2.00399 9.60865C2.17294 14.4207 6.21336 18.3217 11.0285 18.3217C14.5643 18.3217 17.5347 16.2182 18.7966 13.1951Z" stroke="#937DC2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_90_342">
                            <path d="M0.350887 9.99361C0.157097 4.47429 4.47705 0 9.99977 0L20 0L20.7018 19.9872H10.7015C5.17882 19.9872 0.544676 15.5129 0.350887 9.99361Z" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <h1 className='ThemeType'>Dark mode</h1>
            </div>
          


            <div className=''>
                <IoMenu onClick={() => showMenu()} className='IoMenu' />
            </div>

            <div className={menuIcon ? 'ShowSideBar SideBarContainer' : 'SideBarContainer'}>
                <div className='SideBar'>
                    <IoMdClose onClick={() => showMenu()} className='IoMdClose' />
                    <ul className="SideBarElements">
                        {menu.map((element, index) => {
                            return (
                                <Link className='SideBarElement' key={index}>{element}</Link>
                            )
                        })}
                    </ul>
                    <hr className='SideBarLine' />
                    <div className='SideBarMode'>
                        <p className='Mode'>Dark mode</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="17" viewBox="0 0 30 17" fill="none">
                            <rect y="4" width="29" height="10" rx="5" fill="#937DC2" />
                            <circle cx="21.5" cy="8.5" r="8" fill="white" stroke="#937DC2" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar