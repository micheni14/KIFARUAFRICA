import React from 'react'
import pic from "../assets/Andela_NewLogos.png"


function About() {
    return (
    <div className='' id= "About us">
    <div className="flex flex-col md:flex-row items-center ">
    <div className="md:w-1/2">
        <img src={pic} alt="About"  />
    </div>
    <div className="md:w-1/2 px-2">
        <h2 className="text-3xl font-bold mb-4 pt-10 text-black">About Us</h2>
        <p className="text-lg mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor magna id
        magna aliquam, vitae commodo nulla condimentum. Duis non risus non mauris
        ullamcorper cursus ut ac nisl. Sed vehicula pharetra nisi, vitae maximus erat
        tristique ac. Suspendisse lobortis sapien sit amet erat ullamcorper, vel
        auctor est cursus. Proin lacinia fermentum tortor, nec semper lorem
        hendrerit ac.
        </p>
        <p className="text-lg">
        Quisque sit amet odio elit. Nam non erat auctor, semper erat eu, pellentesque
    magna. Phasellus lobortis tortor ac elit auctor volutpat. Curabitur vel
        venenatis ligula, ac imperdiet ipsum. Vivamus in iaculis ligula. Mauris nec
        mauris dolor.
        </p>
    </div>
    </div>
    
    </div>
)
}

export default About;