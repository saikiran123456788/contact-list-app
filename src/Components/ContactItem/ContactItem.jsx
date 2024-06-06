// src/components/Contact.js
import React, { useState } from "react";

const ContactItem = ({ item, updateContact, deleteContact, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState(item);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
  };

  const handleEditSubmit = () => {
    updateContact(editedContact);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="form-container">
          <span>{index+1}</span>
          <input
            type="text"
            name="name"
            value={editedContact.name}
            onChange={handleEditChange}
          />
          <input
            type="tel"
            name="phone"
            value={editedContact.phone}
            onChange={handleEditChange}
          />
          <select
            name="gender"
            value={editedContact.gender}
            onChange={handleEditChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            name="type"
            value={editedContact.type}
            onChange={handleEditChange}
          >
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
          </select>
          <button onClick={handleEditSubmit} className="edit-btn">
            Save
          </button>
          <button
            type="button"
            className="delete-btn"
            onClick={() => setIsEditing(false)}
          >
            cancel
          </button>
        </div>
      ) : (
        <div className="contact-details">
          <span>{index + 1}</span>
          <span>{item?.name}</span>
          <span>{item?.phone}</span>
          <span>({item?.gender})</span>
          <span>{item?.type}</span>
          <span>
            <button onClick={() => setIsEditing(true)} className="edit-btn">
              Edit
            </button>
          </span>
          <span>
            <button
              onClick={() => deleteContact(item.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

export {ContactItem};
