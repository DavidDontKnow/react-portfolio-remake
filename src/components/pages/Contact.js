import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "name") {
            setName(inputValue);
        } else if (inputType === "email") {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div id="Contact" className=" text-5xl font-extrabold sm:text-4xl text-center my-4 py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
            <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-4xl text-center my-4">Contact</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to get
                in touch? Fill out this form and I will reach out to you</p>
            <form>
                <label htmlFor="name" className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Name</label>
                <input type="text" name="name" value={name} onChange={handleInputChange} required className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
                <label htmlFor="email" className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Email</label>
                <input type="email" name="email" value={email} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
                <label htmlFor="message" className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Message</label>
                <textarea name="message" value={message} onChange={handleInputChange} className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                <button type="submit" onClick={handleFormSubmit} className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition-all duration-300 hover:rotate-2 transition-all duration-300 hover:scale-110 m-12 ">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text mb-8 lg:mb-16 font-light text-center text-orange-500 sm:text-xl">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

export default Contact;
