// src/components/ContactForm.js
import React, { useState } from "react";


const ContactForm = ({ addContact, setModalIsOpen }) => {
    const [newContact, setNewContact] = useState({
        name: "",
        gender: "Male",
        type: "Personal",
        phone: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewContact({ ...newContact, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newContact?.name.trim() === "") {
            setError("please fill the name field");
            setTimeout(() => {
                setError("");
            }, 1500);
        }
        else if (newContact?.phone.trim() === "") {
            setError("please fill the Phone Number");
            setTimeout(() => {
                setError("");
            }, 1500);
        }
        else {
            addContact(newContact);
            setNewContact({ name: "", gender: "Male", type: "Personal", phone: "" });
            setModalIsOpen(false)
        }
    };

    return (
        <>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit} className="add-contact-container">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={newContact.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="phone"
                        value={newContact.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <select name="gender" value={newContact.gender} onChange={handleChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div>
                    <select name="type" value={newContact.type} onChange={handleChange}>
                        <option value="Personal">Personal</option>
                        <option value="Business">Business</option>
                        <option value="Business">Developer</option>
                    </select>
                </div>
                <div>
                    <button type="submit" className="btn">
                        Add Contact
                    </button>
                </div>
            </form>
        </>
    );
};

export { ContactForm };
