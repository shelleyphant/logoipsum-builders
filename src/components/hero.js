import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Scroll from '../images/scroll.svg'

const Hero = () => {
    return (
        <div className="w-full h-screen absolute top-0 left-0 w-full h-full -z-10">
            <div className="w-full h-full bg-black bg-opacity-20 absolute"></div>
            <StaticImage
                src="../images/hero.png"
                alt="A kitchen interior fitted out with white marble."
                class="-z-10 absolute w-full h-full object-cover top-0 left-0"
            />
            <div className="wrapper flex justify-between flex-row items-end top-3/4 z-10">
                <h1 className="text-white font-bold text-8xl">
                    Your Vision. <br />
                    Our Expertise.
                </h1>
                <Scroll class="hover:animate-spin-slow" />
            </div>
        </div>
    )
}

export default Hero
