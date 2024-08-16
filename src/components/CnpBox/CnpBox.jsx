import React, { useState } from 'react';
import './CnpBox.css';

export default function CnpBox() {
  const [cnp, setCnp] = useState('0************'); // Default CNP value

  const handleChange = (event) => {
    setCnp(event.target.value); // Update state with input value
  };

  return (
    <div className="cnp-field">
      05010307125777
    </div>
  );
}
