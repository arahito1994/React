import React from 'react'
import { useState } from 'react'

const InputForm = ({ taskList, setTaskList }) => {


  const [inputText, setInputText] = useState("")

  // handleSubmitの定義
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // タスクを追加する
    setTaskList([
      ...taskList,
      {
        id: taskList.length + 1,
        text: inputText,
        completed: false
      }
    ]);
    // 入力した文字の削除
    setInputText('')
  }

  // setInputTextでinput内の文字の状態の管理
  const handleChange = (e) => {
    setInputText(e.target.value);
    
  }

  return (
    <div>
      {/* フォームに入力した文字を取得する */}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText}></input>
        <button>投稿用ボタン</button>
        <button>削除用ボタン</button>
      </form>
    </div>
  )
}

export default InputForm