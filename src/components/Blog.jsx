import React from 'react'
import image2 from "../assets/image2.jpg"

function Blog() {
    const blogData = [
        {
        title: 'Artificial Intelligence and Machine Learning',
        author: 'John DOE',
        rating: 'Highly informative',
        date: '12 July 2023',
        content:
            'If a dog chews shoes, whose shoes does he choose? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam saepe totam voluptates nostrum exercitationem beatae praesentium harum ipsam eligendi, impedit quis in cumque inventore veritatis. Facere ad veritatis debitis?',
        },
    
    ];
    return (
        <div className='text-black' id = "Blog">
    <div className='flex flex-col items-center justify-center md:flex-row overflow-hidden pt-20 '>
    <div className='p-6 '>
    <div className="card card-compact w-80   rounded-md shadow-xs">
<img src={image2} alt="Your browser doesn't support this images" />
<div className="card-body">
                        <h2 className="card-title text-ourGreen">Artificial Intelligence and Machine Learning</h2>
                        <div >
                            <div className='flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <p>John DOE</p>
                                </div>
        <div className='flex flex-row'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                            </svg>
                                <p>Highly infomative</p>
                            </div>
                            <div className='flex flex-row'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
<path stroke-linecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p>12 July 2023</p>
                                </div>

</div>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam saepe totam voluptates nostrum exercitationem beatae praesentium harum ipsam eligendi, impedit quis in cumque inventore veritatis. Facere ad veritatis debitis?</p>
    <div className="card-actions justify-end">
    </div>
</div>
</div>
            </div>
            <div className='p-5  shadow-xs'>
    <div className="card card-compact w-80  rounded-md">
<img src={image2} alt="Your browser doesnt support this pic" />
<div className="card-body">
                        <h2 className="card-title text-ourGreen">Artificial Intelligence and Machine Learning</h2>
                        <div >
                            <div className='flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <p>John DOE</p>
                                </div>
        <div className='flex flex-row'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                            </svg>
                                <p>Highly infomative</p>
                            </div>
                            <div className='flex flex-row'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p>12 July 2023</p>
                                </div>

</div>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam saepe totam voluptates nostrum exercitationem beatae praesentium harum ipsam eligendi, impedit quis in cumque inventore veritatis. Facere ad veritatis debitis?</p>
    <div className="card-actions justify-end">
    </div>
</div>
</div>
            </div>
            <div className='p-5  shadow-xs'>
    <div className="card card-compact w-80  rounded-md">
<img src={image2} alt="Shoes" />
<div className="card-body ">
                        <h2 className="card-title text-ourGreen">Artificial Intelligence and Machine Learning</h2>
                        <div >
                            <div className='flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <p>John DOE</p>
                                </div>
        <div className='flex flex-row'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                            </svg>
                                <p>Highly infomative</p>
                            </div>
                            <div className='flex flex-row'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p>12 July 2023</p>
                                </div>

</div>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam saepe totam voluptates nostrum exercitationem beatae praesentium harum ipsam eligendi, impedit quis in cumque inventore veritatis. Facere ad veritatis debitis?</p>
    <div className="card-actions justify-end">
    </div>
</div>
</div>
</div>
            </div>
            </div>
)
}

export default Blog