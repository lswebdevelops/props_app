
import React, { useState } from 'react';
function Form1({ setSubmittedText, formIndex }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('Information');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email };
    setSubmittedText(formIndex, formData);
  };
  return (
    <form onSubmit={handleSubmit}>
          <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form1;

