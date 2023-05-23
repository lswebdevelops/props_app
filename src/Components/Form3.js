import React, { useState } from 'react';
function Form3({ setSubmittedText, formIndex }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email };
    setSubmittedText(formIndex, formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form3;
