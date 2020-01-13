import React, {useEffect, useState} from "react";

export function TestLoop() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // 1 计算
        const nextValue = count + 1
        // 异步计算
        promise((resolve) => {
            window.setTimeout(() => {
                setCount(nextValue)
                resolve(nextValue)
            }, 1000)
        }).then(() => {
            console.log(count)
        })

    }, [count])
    return <div>{count}</div>
}

const promise = (func: (a?: any, b?: any) => void) => {
    return new Promise((resolve, reject) => {
        func(resolve, reject)
    })
}