import React, {useEffect} from "react";


/*
这边还有a a可以测试一下ref.
 */
export function TestRunTime() {
    let a = 0;
    console.log('render')
    console.log(a)
    useEffect(() => {
        console.log('run useEffect1')
        window.setTimeout(() => {
            console.log('get it1')
            console.log(a)
            a = a - 100
            // a的变更,改变了a 但是没有引起rerender 也没有导致useEffect

        }, 1000)
        return () => {
            console.log('1 finish')
        }
    }, [a])

    useEffect(() => {
        console.log('run useEffect2')
        window.setInterval(() => {
            console.log('get it 2')
            console.log(a)
        }, 1000)
        return () => {
            console.log('2 finish')
        }
    }, [a])
    return <div>{a}</div>
}