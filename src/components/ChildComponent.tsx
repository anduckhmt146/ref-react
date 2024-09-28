import React, { useState, forwardRef, useImperativeHandle } from 'react';

// Define the interface for methods exposed to the parent
export interface ChildRef {
  getChildState: () => string;
}

const Child = forwardRef<ChildRef, {}>((props, ref) => {
  const [childState, setChildState] = useState<string>('');

  useImperativeHandle(ref, () => ({
    getChildState() {
      return childState;
    },
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChildState(e.target.value);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        value={childState}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  );
});

export default Child;
