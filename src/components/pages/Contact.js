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
        <div id="Contact">
            <h2>Contact</h2>
            <form>
                <label for="name">Name</label>
                <input type="text" name="name" value={name} onChange={handleInputChange} required />
                <label for="email">Email</label>
                <input type="email" name="email" value={email} onChange={handleInputChange} />
                <label for="message">Message</label>
                <textarea name="message" value={message} onChange={handleInputChange} />
                <button type="submit" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

export default Contact;
