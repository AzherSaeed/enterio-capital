import React, { useState } from 'react';

export default function TestComponent() {
  const [testState, setTestState] = useState(0);
  return (
    <div>
      <h1>Test Component v8</h1>
      <button type="button" onClick={() => setTestState(testState + 1)}>
        Click Me
      </button>{' '}
      <br />
      {testState}
    </div>
  );
}
