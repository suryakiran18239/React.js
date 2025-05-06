// Import React and useState from the React library
import React, { useState } from 'react';

// Define the App component
function App() {
  // State to store user's input (date of birth)
  const [dob, setDob] = useState('');

  // State to store the calculated age
  const [age, setAge] = useState(null);

  // Function to calculate age when user clicks the button
  const calculateAge = () => {
    if (!dob) return; // If no input, do nothing

    const birthDate = new Date(dob); // Convert input string to Date object
    const today = new Date(); // Get current date

    let calculatedAge = today.getFullYear() - birthDate.getFullYear(); // Basic age calculation

    // Adjust if birthday hasn't occurred yet this year
    const hasBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
      calculatedAge -= 1;
    }

    // Save the age in state
    setAge(calculatedAge);
  };

  // Render the UI
  return (
    <div>
      {/* Input for date of birth */}
      <h2>Simple Age Calculator</h2>
      <label>Enter your Date of Birth: </label>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)} // Update dob state when input changes
      />
      <br />
      <br />
      {/* Button to trigger age calculation */}
      <button onClick={calculateAge}>Calculate Age</button>

      {/* Show the age if it has been calculated */}
      {age !== null && (
        <div>
          <p>Your age is: {age} years</p>
        </div>
      )}
    </div>
  );
}

export default App;
