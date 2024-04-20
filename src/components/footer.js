import * as React from 'react'
import Logo from '../images/logoipsum.svg'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer className=" bg-black text-white py-32">
            <div className="wrapper h-full flex flex-row justify-between">
                <div className="h-full flex flex-col justify-between gap-16">
                    <Logo className="w-96" />
                    <p>
                        We can help you level up your build.{' '}
                        <Link to="mailto:">Send us an email.</Link>
                    </p>
                    <div>
                        <p>© 2024 — LogoIpsum.</p>
                        <p>
                            Designed by <Link title="Molly Seeary">Molly</Link>,
                            built by{' '}
                            <Link
                                to="https://shelleybassett.com"
                                title="Shelley Bassett"
                            >
                                Shelley
                            </Link>
                            .
                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-16 self-end">
                    <div>
                        <h2 className="font-bold">Pages</h2>
                        <ul className="space-y-6 mt-6">
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
                    </div>
                    <div>
                        <h2 className="font-bold">Socials</h2>
                        <ul className="space-y-6 mt-6">
                            <li>
                                <Link>X (Twitter)</Link>
                            </li>
                            <li>
                                <Link>LinkedIn</Link>
                            </li>
                            <li>
                                <Link>Instagram</Link>
                            </li>
                            <li>
                                <Link>Facebook</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
