import React from 'react'

const TodoList = () => {
  return (
    // todoを表示するエリアを作成する
    <div className='todos'>
      <div className='todos'>
        <div className='todo'>
          <div className='todoText'>
            <p>  
              <input type='checkbox'></input>
              サンプル
              <button>タスク削除用ボタン</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList