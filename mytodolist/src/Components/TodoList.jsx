import React from 'react'

const TodoList = ({ taskList, setTaskList }) => {

  const handleDelete = (id) => {
    // タスクを削除する
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  return (
    // todoを表示するエリアを作成する
    <div className='todos'>
      <div className='todos'>
        {taskList.map((task, index)=> (
          <div className='todo' key={index}>
          <div className='todoText'>
          <p>  
            <input type='checkbox'></input>
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