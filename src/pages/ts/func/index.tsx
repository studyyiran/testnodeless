import React, {useEffect} from "react";

// 第一种定义方式 传统函数
function fn1 (s: string) : string {
    return Date.now() + s;
}

// 第二种定义方式 函数表达式
const fn2 = (range: number, s: string) : number => {
    return Number(s) + Math.floor(range * Math.random())
}

// 比较完整的写法
const fn1p: (b: string) => void = function (s: string) : void {

}

const fn2p : (n: number, s: string) => boolean = (b) => {
    return !b
}


// 第三种方式 interface.这种定义对于函数复用很有好处,也很有必要.
interface Ifn3 {
    (s: string, n: number): number
}

// 对于单独定义,有个小问题,就是他容忍之后的函数,参数比他少.但是不能容忍后续的参数比他多.
const fn3 : Ifn3 = (s) =>  {
    return Number(s)
}

// 这种interface对于function定义似乎加不上去
function fn3p () : Ifn3 {
    return (s, n) => {
        return 1
    }
}

fn3('abc', 2)


/*
其他备注
function可以自动推导出来返回值,并不一定需要明确.
可选参数
 */


export const TestTsFunc = () => {
    useEffect(() => {
        const str = "haha"
        const num = 1
        fn1(str)
        fn2(num, str)
        fn3(str, num)
        fn1p(str)
        fn2p(num, str)
        fn3p()
    }, [])
    return <div>12345</div>
}