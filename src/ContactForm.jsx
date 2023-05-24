import React, { useState } from 'react';

function ContactForm({ closeModal }) {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the server or perform any desired action
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
};

    return (
        <div className="bg-[#80808093] fixed top-0 left-0 right-0 bottom-0 my-auto h-full z-50 mx-auto flex justify-center items-center">
        <div className="max-w-md mx-auto">
            <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-8 pb-6 mb-4"
            style={{ width: '500px' }} // Adjust the width to make it bigger
            >
            <div className="mb-4">
                <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
                >
                Name
            </label>
            <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            <div className="mb-4">
                <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
                >
                Email
            </label>
                <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className="mb-4">
                <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
                >
                Message
            </label>
                <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />
        </div>
        <div className="flex items-center justify-between">
            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => closeModal(false)}
            >
            Submit
            </button>
            <button
            type="submit"
            className="bg-gray-500 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
                closeModal(false);
            }}
            >
            Cancel
            </button>
        </div>
        </form>
    </div>
    </div>
);
}

export default ContactForm;
