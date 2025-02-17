# React Native useState Hook Nested Object Update Issue

This repository demonstrates a common issue encountered when using the `useState` hook in React Native with nested objects.  The problem arises from React's shallow comparison of state updates; changes within deeply nested structures might not trigger a re-render.

## Problem Description

The provided `bug.js` file contains a component that uses `useState` to manage a nested object. Updating a nested property does not cause the component to re-render, leading to UI inconsistencies.  This happens because the top-level state object's reference remains the same, so React considers it unchanged.

## Solution

The solution in `bugSolution.js` addresses this by using the `useImmer` library or by creating a new object to ensure React detects the changes correctly. `useImmer` provides a more convenient approach for handling immutable updates in state, avoiding manual deep cloning.