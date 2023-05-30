import { useState } from 'react';
import './App.css';
import InputForm from './Components/InputForm';
import Title from './Components/Title';
import TodoList from './Components/TodoList';


function App() {
  // 追加するタスクの状態を管理する
  const [taskList, setTaskList] = useState([])

  return (
    <div>
       {/* 必要なコンポーネントを作成 */}
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
