import React, {useEffect, useState} from 'react';
import logo from '../logo.svg';
import './App.less';
import {Main} from "./main";

const App: React.FC = () => {
  const [content, setContent] = useState("")
  const [count, setCount] = useState(0)
  let a = 1
  useEffect(() => {
    window.setInterval(() => {
      setCount(c => c + 1)
    }, 1000)
  }, [a])
  useEffect(() => {
    const arr : any = document.querySelectorAll('style')
    const lastStyle = arr[arr.length - 1]
    setContent(lastStyle.innerHTML)
  }, [count])
  return (
    <div className="App">
      <p>{content}</p>
      <Main/>
    </div>
  );
}

export default App;
