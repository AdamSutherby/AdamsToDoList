

import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';


function App() {
  const [items, setItems] = React.useState([
    'Do laundry',
    'Go to the gym',
    'Walk dog',
  ]);

  const addTask = task => {
    if (task && !items.includes(task)) {
      setTasks([...items, task]);
    }

  return (
    <SafeAreaView>
      <ToDoList items={items} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}
}
export default App;
