import React, {useEffect, useState} from 'react';
import './App.less';
import './common.less';
import {Main} from "./main";
import {TestRunTime} from "./testRunTime";

const App: React.FC = () => {

  const [content, setContent] = useState("")
  const [count, setCount] = useState(0)

    function loop() {
        window.setInterval(() => {
            setCount(c => c + 1)
        }, 1000)
    }

    useEffect(() => {
         document.title = '' + count
    }, [count])


  useEffect(() => {
      // 为什么这个loop没有加入进入依赖呢?因为react确认他是不可变的?
      loop()
  }, [])

  useEffect(() => {
    const arr : any = [].slice.call(document.querySelectorAll('style'), 0).map((i: any) => i.innerHTML)
    setContent(arr.join(`<p>--------------less${count}-------------------</p>`))
  }, [count])

  function func() {
  }

    return <TestRunTime />
  //
  //
  // return (
  //   <div className="App">
  //     <h2>less</h2>
  //     <p dangerouslySetInnerHTML={{__html: content}} />
  //     <h2>content</h2>
  //     <div onClick={func}>test</div>
  //     <div className="common-style">
  //         <p>123</p>
  //         <div>345</div>
  //     </div>
  //     <Main/>
  //   </div>
  // );
}

export default App;
