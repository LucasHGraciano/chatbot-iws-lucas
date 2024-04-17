import React, { useState } from 'react';
import './NewUser.css';

const NewUser = () => {
  const [selectedUser, setSelectedUser] = useState(null); // Estado para controlar o botão selecionado

  const handleUserClick = (user) => {
    setSelectedUser(user === selectedUser ? null : user); // Selecionar/desselecionar o usuário
  };

  const handleBackButton = () => {
    // Add your logic here to navigate back to the previous screen
    console.log('Back button clicked');
  };

  const handleNextButton = () => {
    if (selectedUser) {
      // Add your logic here to save the new user data
      console.log('Selected user:', selectedUser);
    } else {
      console.error('Please select a user.');
    }
  };

  return (
    <div className="new-user-container">
      <div className="new-user-form">
        <button className="new-user-new">New user</button> {/* Botão "New user" */}
        <div className="new-user-input">
          <button
            className={`user-button ${selectedUser === 'User 1' ? 'selected' : ''}`}
            onClick={() => handleUserClick('User 1')}
          >
            User 1
          </button>
          <div className="new-user-icon">
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="new-user-input">
          <button
            className={`user-button ${selectedUser === 'User 2' ? 'selected' : ''}`}
            onClick={() => handleUserClick('User 2')}
          >
            User 2
          </button>
          <div className="new-user-icon">
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="new-user-input">
          <button
            className={`user-button ${selectedUser === 'User 3' ? 'selected' : ''}`}
            onClick={() => handleUserClick('User 3')}
          >
            User 3
          </button>
          <div className="new-user-icon">
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="new-user-buttons">
          <button className="new-user-back" onClick={handleBackButton}>
            <i className="fas fa-arrow-left"></i> Back
          </button>
          <button className="new-user-next" onClick={handleNextButton}>
            Next <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
