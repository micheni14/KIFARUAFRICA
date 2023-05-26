import React, {Fragment, useState} from 'react'
// import Button from '../components/Button';
import ContactForm from '../ContactForm';
import 'boxicons';


function Footer() {
const [openModal, setOpenModal] = useState(false);
    return (
    
            <Fragment>
    <div className='pt-20' id= "contact">
        <div className=' md:grid grid-cols-2 '>
            <div className='p-20 bg-ourGreen text-white text-start'>
                <p>You wanna reach out?</p>
                <p className='text-7xl py-6 flex  justify-center items-center'>Let's work together</p>
                <div>
                
                    <button className="bg-black px-5 py-3 rounded-full"
                        onClick={() => {setOpenModal(true);
                        }}
                    >


                        Contact us</button>
                    
                </div>
            </div>
            <div className='bg-black text-white h-full w-full '>
                <div className="grid grid-cols-2 gap-10">
                            <div className='flex justify-center items-center py-28'>
                            <ul className='list-none '>
    <li className='text-xl sm:text-2xl'>Quick links</li>
    <li className='text-gray-400'>Home</li>
    <li className='text-gray-400'>About us</li>
    <li className='text-gray-400'>Projects</li>
    <li className='text-gray-400'>Blog</li>
    </ul>
</div>

                    <div className='py-28'>
                        <p className='text-white text-xl sm:text-2xl'>Say hello</p>
                        <p className='text-gray-400'>admin@example.co.ke</p>
                                <p className='text-gray-400'>hr@example.com</p>
                                <div className='space-x-3 '>
                                <i class='bx bxl-facebook-circle bx-sm'></i>
                                <i class='bx bxl-instagram-alt  bx-sm' ></i>
                                <i class='bx bxl-twitter  bx-sm' ></i>
                                </div>
                    </div>

            
            </div>
            </div>
        </div>
    </div>
    { openModal && <ContactForm closeModal={setOpenModal} /> }
    </Fragment>
)
}

export default Footer;