import * as React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logoipsum.svg'

const Navigation = () => {
    return (
        <nav className=" pt-16 wrapper flex flex-row justify-between z-10 items-center">
            <Link to="" title="LogoIpsum Builders">
                <Logo
                    src="../images/logoipsum.svg"
                    alt="LogoIpsum Builders"
                    className="w-52 h-8 fill-white"
                />
            </Link>
            <ul className="flex flex-row bg-black gap-7 text-white px-7 py-5">
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>About</Link>
                </li>
                <li>
                    <Link>Projects</Link>
                </li>
                <li>
                    <Link>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
