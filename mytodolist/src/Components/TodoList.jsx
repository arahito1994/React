import React from 'react'

const TodoList = ({ taskList, setTaskList }) => {

  const handleDelete = (id) => {
    // タスクを削除する
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  const handleLine = (id) => {
    setTaskList(taskList.map((task) => { 
      if(id === task.id){
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    }))
  }

  return (
    // todoを表示するエリアを作成する
    <div className='todos'>
      <div className='todos'>
        {taskList.map((task, index)=> (
          <div className={`todo ${task.completed ? "completed" : ""}`} key={index}>
          <div className='todoText'>
          <p>  
            <input type='checkbox' onClick={() => handleLine(task.id)}></input>
              <span>{task.text}</span>
            <button onClick={() => handleDelete(task.id)}>タスク削除用ボタン</button>
          </p>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList