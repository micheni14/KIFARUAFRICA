import React, {Fragment, useState} from 'react'
// import Button from '../components/Button';
import ContactForm from '../ContactForm';


function Footer() {
const [openModal, setOpenModal] = useState(false);
    return (
    
            <Fragment>
    <div className='pt-20' id= "contact">
        <div className=' md:grid grid-cols-2 p-2'>
            <div className='p-20 bg-ourGreen text-white text-start'>
                <p>You wanna reach out?</p>
                <p className='text-7xl py-10 flex  justify-center items-center'>Let's work together</p>
                <div>
                
                    <button className="bg-black px-5 py-3 rounded-full"
                        onClick={() => {setOpenModal(true);
                        }}
                    >


                        Contact us</button>
                    
                </div>
            </div>
            <div className='bg-black text-white '>
                <div className="grid grid-cols-2  ">
                <div className='p-4 sm:p-8'>
    <p className='text-xl sm:text-2xl'>Quick links</p>
    <ul className='list-none'>
    <li className='text-gray-400'>Home</li>
    <li className='text-gray-400'>About us</li>
    <li className='text-gray-400'>Products</li>
    <li className='text-gray-400'>Blog</li>
    </ul>
</div>

                    <div className='pt-20'>
                        <p className='text-white 2xl'>Say hello</p>
                        <p className='text-gray-400'>admin@example.co.ke</p>
                        <p className='text-gray-400'>hr@example.com</p>
                    
                    </div>
                    <div className=' flex justify-center items-center text-2xl p-10 '>
                    
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