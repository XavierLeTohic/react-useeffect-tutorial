import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Exercise1, { checkExercise1Success } from './exercises/Exercise1';

const App = () => {
  const [currentExercise, setCurrentExercise] = useState('Exercise 1: Character Movement');
  const [exerciseSuccess, setExerciseSuccess] = useState({});
  const exercise1Ref = useRef();

  const exercises = {
    'Exercise 1: Character Movement': {
      component: Exercise1,
      checker: checkExercise1Success,
      ref: exercise1Ref
    },
  };

  useEffect(() => {
    const checkCompletion = () => {
      const currentData = exercises[currentExercise];
      if (currentData && currentData.checker && currentData.ref) {
        const isComplete = currentData.checker(currentData.ref);
        setExerciseSuccess(prev => ({
          ...prev,
          [currentExercise]: isComplete
        }));
      }
    };

    const interval = setInterval(checkCompletion, 500);
    return () => clearInterval(interval);
  }, [currentExercise]);

  const CurrentExerciseData = currentExercise ? exercises[currentExercise] : null;
  const CurrentExerciseComponent = CurrentExerciseData?.component;

  return (
    <div className="App">
      <header className="App-header">
        <h1>React useEffect Playground</h1>
        <p>Select an exercise to begin:</p>
        <div className="exercise-selector">
          {Object.keys(exercises).length > 0 ? (
            Object.keys(exercises).map((name) => (
              <button 
                key={name} 
                onClick={() => setCurrentExercise(name)}
                style={{
                  backgroundColor: exerciseSuccess[name] ? '#4CAF50' : '#f0f0f0',
                  color: exerciseSuccess[name] ? 'white' : 'black',
                  margin: '5px',
                  padding: '10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                {name} {exerciseSuccess[name] ? '✅' : ''}
              </button>
            ))
          ) : (
            <p>No exercises available yet. We'll add them soon!</p>
          )}
        </div>
        {exerciseSuccess[currentExercise] && (
          <div style={{ 
            margin: '20px 0', 
            padding: '15px', 
            backgroundColor: '#d4edda', 
            border: '1px solid #c3e6cb', 
            borderRadius: '5px',
            color: '#155724'
          }}>
            🎉 Exercise completed successfully! You correctly implemented useEffect to detect when the character reaches the door. You can now move on to the next exercise.
          </div>
        )}
      </header>
      <main>
        {CurrentExerciseComponent ? (
          <CurrentExerciseComponent 
            ref={CurrentExerciseData?.ref}
          />
        ) : (
          <p>Please select an exercise from the list above.</p>
        )}
      </main>
    </div>
  );
};

export default App;
