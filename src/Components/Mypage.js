import React, { useState } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

function MyPage() {
  const [submittedText, setSubmittedText] = useState([]);
  const [formCount, setFormCount] = useState(1); // Track the number of Form3 instances

  const handleSetSubmittedText = (formIndex, text) => {
    setSubmittedText((prevSubmittedText) => {
      const updatedText = [...prevSubmittedText];
      updatedText[formIndex] = text;
      return updatedText;
    });
  };

  const addForm3 = () => {
    setFormCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="container">
      <div className="input-forms">
        <Form1 setSubmittedText={handleSetSubmittedText} formIndex={0} />
        <Form2 setSubmittedText={handleSetSubmittedText} formIndex={1} />

        {/* Render multiple instances of Form3 */}
        {Array.from({ length: formCount }).map((_, index) => (
          <Form3 key={index} setSubmittedText={handleSetSubmittedText} formIndex={index + 2} />
        ))}

        <button onClick={addForm3}>Add Form 3</button>
      </div>
      <div className="content">
        {submittedText.map((text, index) => (
          <p key={index} className="submitted-text">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default MyPage;
