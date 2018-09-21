import React from 'react';

const Form = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="username" />
      </label>
      <button type="button">Submit </button>
    </form>
  );
};

export default Form;
