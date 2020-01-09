import React, {useEffect, useState} from 'react';
import './App.less';
import './common.less';
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
    const arr : any = [].slice.call(document.querySelectorAll('style'), 0).map((i: any) => i.innerHTML)
    setContent(arr.join('<p>--------------less-------------------</p>'))
  }, [count])

  function func() {
  }


  return (
    <div className="App">
      <h2>less</h2>
      <p dangerouslySetInnerHTML={{__html: content}} />
      <h2>content</h2>
      <div onClick={func}>test</div>
      <div className="common-style">123</div>
      <Main/>
    </div>
  );
}

export default App;
