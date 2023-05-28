import React from 'react'
import { useState } from 'react'

// handleSubmitの定義
const handleSubmit = (e) => {
  e.preventDefault();
  
  // inputに入力した文字を表示したい
}

const handleChange = (e) => {
  let inputText = e.target.value;
  console.log(inputText);
}

const InputForm = () => {
  return (
    <div>
      {/* フォームに入力した文字を取得する */}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
        <button>投稿用ボタン</button>
        <button>削除用ボタン</button>
      </form>
    </div>
  )
}

export default InputForm