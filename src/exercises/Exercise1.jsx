import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

const Exercise1 = forwardRef((props, ref) => {
  const [characterPosition, setCharacterPosition] = useState(0);
  const [message, setMessage] = useState('');
  const [hasReachedDoor, setHasReachedDoor] = useState(false);

  const DOOR_POSITION = 8;
  const FLOOR_LENGTH = 10;

  useImperativeHandle(ref, () => ({
    getCharacterPosition: () => characterPosition,
    getMessage: () => message,
    hasReachedDoor: () => hasReachedDoor
  }));

  
  useEffect(() => {
    // Implement the useEffect hook to:
    // 1. When the character reaches the door: 
    //  a. Set the message to "Character has reached the door!"
    //  b. Set the hasReachedDoor state to true
    // 2. When the character does not reach the door, set the message to ""
    //  a. Set the hasReachedDoor state to false
  }, []);

  const moveCharacter = () => {
    setCharacterPosition(prev => (prev < FLOOR_LENGTH - 1 ? prev + 1 : prev));
  };

  const resetCharacter = () => {
    setCharacterPosition(0);
    setMessage('');
    setHasReachedDoor(false);
  };

  const renderFloor = () => {
    const floor = [];
    for (let i = 0; i < FLOOR_LENGTH; i++) {
      if (i === characterPosition) {
        floor.push('🏃‍♂️‍➡️');
      } else if (i === DOOR_POSITION) {
        floor.push('🚪');
      } else {
        floor.push('_');
      }
    }
    return floor.join(' ');
  };

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '18px', padding: '20px' }}>
      <h2>Exercise 1: Character Movement with useEffect</h2>
      <div style={{ margin: '20px 0', fontSize: '24px' }}>
        {renderFloor()}
      </div>
      <div style={{ margin: '20px 0' }}>
        <button onClick={moveCharacter} disabled={characterPosition >= FLOOR_LENGTH - 1}>
          Move Character →
        </button>
        <button onClick={resetCharacter} style={{ marginLeft: '10px' }}>
          Reset
        </button>
      </div>
      <p>Position: {characterPosition}</p>
      {message && (
        <div style={{ color: 'green', fontWeight: 'bold', margin: '20px 0' }} data-testid="success-message">
          {message}
        </div>
      )}
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
        <h3>Instructions:</h3>
        <p>Use the <strong>useEffect</strong> hook to detect when the character reaches the door and display a success message.</p>
        <p>The effect should run when the character's position changes and check if they've reached the door position.</p>
      </div>
    </div>
  );
});

export const checkExercise1Success = (componentRef) => {
  if (!componentRef.current) return false;
  
  const position = componentRef.current.getCharacterPosition();
  const message = componentRef.current.getMessage();
  const reachedDoor = componentRef.current.hasReachedDoor();
  
  return position === 8 && reachedDoor && message.includes('Character has reached the door');
};

Exercise1.displayName = 'Exercise1';

export default Exercise1; 