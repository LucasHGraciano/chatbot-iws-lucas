import React, { useState } from 'react';
import './NewUser.css';
 
const NewUser = () => {
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');
  const [user3, setUser3] = useState('');
 
  const handleBackButton = () => {
    // Add your logic here to navigate back to the previous screen
    console.log('Back button clicked');
  };
 
  const handleNextButton = () => {
    // Validate the input values
    if (user1 && user2 && user3) {
      // Add your logic here to save the new user data
      console.log('New user data:', { user1, user2, user3 });
    } else {
      // Display an error message or handle the invalid input
      console.error('Please fill in all the user fields.');
    }
  };
 
  return (
<div className="new-user-container">
<div className="new-user-form">
<div className="new-user-input">
<input
            type="text"
            placeholder="User 1"
            value={user1}
            onChange={(e) => setUser1(e.target.value)}
          />
<div className="new-user-icon">
<i className="fas fa-times"></i>
</div>
</div>
<div className="new-user-input">
<input
            type="text"
            placeholder="User 2"
            value={user2}
            onChange={(e) => setUser2(e.target.value)}
          />
<div className="new-user-icon">
<i className="fas fa-times"></i>
</div>
</div>
<div className="new-user-input">
<input
            type="text"
            placeholder="User 3"
            value={user3}
            onChange={(e) => setUser3(e.target.value)}
          />
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