# DevStack

## Project Description

DevStack is a React-based technology stack management project where users can explore different technologies and add their favorite technologies to their personal stack. Users can also remove technologies from their selected stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- Vite

## Features

1. **Browse Technologies**
   Users can view different technology cards with their name, description, category, difficulty level, rating, and icon.

2. **Add Technologies to Stack**
   Users can add a technology to their stack. Once a technology is added, its button becomes disabled to prevent duplicate entries.

3. **Remove Technologies from Stack**
   Users can remove individual technologies from their selected stack or clear the entire stack.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React UI code easier to read and write.

### 2. What is the difference between props and state?

**Props** are data passed from a parent to a child.
**State** is data managed inside a component that can change.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores and updates changing data. I used it to store the selected technologies in the stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after rendering. **In this project, I did not use `useEffect` to load JSON data; I used `fetch()` with React's `use()` and `Suspense`.**

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item and update the list correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition.

Example:

```tsx
{
  addTechnologies.length === 0 ? (
    <p>Your stack is empty</p>
  ) : (
    <StackSmallCard />
  );
}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent passes data through **props**.
The child sends data back by calling a **function passed through props**.
