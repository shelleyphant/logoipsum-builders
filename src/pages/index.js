import * as React from 'react'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import About from '../components/about'
import Projects from '../components/projects'
import Testimonials from '../components/testimonials'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => {
    return (
        <>
            <Navigation />
            <Hero />
            <About />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default IndexPage

export const Head = () => {
    return (
        <>
            <title>LogoIpsum Builders</title>

            {/* Google Font */}
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
            ></link>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
                rel="stylesheet"
            ></link>
        </>
    )
}
