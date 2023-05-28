import './App.css';
import InputForm from './Components/InputForm';
import Title from './Components/Title';
import TodoList from './Components/TodoList';


function App() {
  return (
    <div>
       {/* 必要なコンポーネントを作成 */}
      <Title />
      <InputForm />
      <TodoList />
    </div>
  );
}

export default App;
