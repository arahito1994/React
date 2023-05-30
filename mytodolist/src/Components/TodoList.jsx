import React from 'react'

const TodoList = ({ taskList, setTaskList }) => {
  return (
    // todoを表示するエリアを作成する
    <div className='todos'>
      <div className='todos'>
        {taskList.map(task => (
          <div className='todo'>
          <div className='todoText'>
          <p>  
            <input type='checkbox'></input>
              <span>{task.text}</span>
            <button>タスク削除用ボタン</button>
          </p>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList