import { useRef } from 'react';
import Child, { ChildRef } from './ChildComponent';

function Parent() {
  const childRef = useRef<ChildRef | null>(null);

  const handleGetChildState = () => {
    if (childRef.current) {
      alert('Child state is: ' + childRef.current.getChildState());
    }
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={handleGetChildState}>Get Child State</button>
      <Child ref={childRef} />
    </div>
  );
}

export default Parent;
