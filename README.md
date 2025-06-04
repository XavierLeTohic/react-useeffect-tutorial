# React useEffect exercices

## Setup

Install the dependencies:

```bash
npm install
```

## Get started

Start the dev server:

```bash
npm run dev
```

## Exercise 1: Character Movement with useEffect

### Objective
Learn how to use the `useEffect` hook to respond to state changes and trigger side effects.

### Scenario
You have a simple game where a character (🏃‍♂️‍➡️) can move along a floor made of underscores (_) toward a door (🚪). Your task is to implement a `useEffect` hook that detects when the character reaches the door and displays a success message.

### Your Task
In `src/exercises/Exercise1.jsx`, you need to:

1. **Implement a `useEffect` hook** that watches for changes in the character's position
2. **Detect when the character reaches the door** (position 8)
3. **Display a success message** when the character reaches the door
4. **Clear the message** when the character moves away from the door

### Requirements
- Use the `useEffect` hook with proper dependencies
- When `characterPosition === 8` (door position):
    - Set the `message` state to include the exact text "Character has reached the door"
    - Set the `hasReachedDoor` to true
- When the character moves away from the door, clear the message and `hasReachedDoor`
- The success message should be displayed!

### Success Criteria
- The exercise will automatically detect when you've correctly implemented the useEffect
- A green success banner will appear when your implementation is working correctly
- The exercise button will turn green with a checkmark ✅

### Hints
- Look at the existing state variables: `characterPosition`, `message`, and `hasReachedDoor`
- The `useEffect` should run when `characterPosition` changes
- Remember to include all dependencies in the dependency array
- The `DOOR_POSITION` constant is set to 8

### Example Structure
```javascript
useEffect(() => {
  // Your logic here to check if character reached the door
  // Set message and hasReachedDoor states accordingly
}, [/* your dependencies here */]);
```

### Testing Your Solution
1. Click "Move Character →" to move the character
2. Watch for the success message when the character reaches the door
3. Use "Reset" to try again
4. The parent component will automatically validate your implementation

Good luck! 🚀

