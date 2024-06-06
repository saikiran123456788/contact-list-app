import React, { useState } from 'react'
import { data } from '../static'
import Modal from 'react-modal';
import { OverviewCard } from '../OverviewCard';
import { ContactForm } from '../ContactForm';
import { ContactItem } from '../ContactItem';



function ContactsPage() {
    const [contacts, setContacts] = useState(data);
    const [showContact, setShowContact] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const addContact = (contact) => {
        setContacts([...contacts, { ...contact, id: Date.now() }]);
    };

    const updateContact = (updatedContact) => {
        setContacts(contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact));
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };
    const Male = data.filter(data => data.gender === "Male");
    const Female = data.filter(data => data.gender === "Female");
    const Business = data.filter(data => data.type === "Business");
    const Personal = data.filter(data => data.type === "Personal");

    console.log(showContact);
    return (
        <div className='app-wrapper'>
            <div className="title">
                <h1 className='container'>
                    Contact List
                </h1>
            </div>
            <div className="contact-list-container container">
                <div className="col-8">
                    <div className='show-contact-card'>
                        <div className="card-container">
                            <OverviewCard type={"Male"} number={Male?.length} />
                            <OverviewCard type={"Female"} number={Female?.length} />
                            <OverviewCard type={"Business"} number={Business?.length} />
                            <OverviewCard type={"Personal"} number={Personal?.length} />
                        </div>
                        <div className='show-title'>
                            <h2>
                                Contact Details
                            </h2>
                            <div>
                                <button onClick={() => setModalIsOpen(true)}>Add New Contact</button>
                            </div>
                        </div>
                        {
                            contacts && contacts.length >> 0 && contacts.map((data, index) => {
                                return (
                                    <ContactItem item={data} index={index} updateContact={updateContact} deleteContact={deleteContact} />

                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Example Modal"
                className={"Form-modal-box"}
            >
                <ContactForm addContact={addContact} setModalIsOpen={setModalIsOpen} />
            </Modal>
        </div>
    )
}

export { ContactsPage }