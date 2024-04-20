import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Contact = () => {
    return (
        <section className="" id="contact">
            <div className="grid grid-cols-2">
                <div>
                    <StaticImage
                        src="../images/map.png"
                        alt="Map of are surrounding IpsumLogo Builders"
                        class="w-full h-full object-cover"
                    />
                </div>
                <div className="bg-[#ECECEC] wrapper h-full">
                    <h2 className="font-medium text-4xl">
                        Got a job for us? Let’s discuss.
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Contact
