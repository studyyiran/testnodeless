import React from "react";
import './index.less';

export function Margin1() {
    return <div className="margin">
        <div>
            margin水平方向
            <p className="test-margin">当为标准block 并且没有设定 width的时候 通过设置margin-left 会影响容器的宽度</p>
        </div>
        <ul>
            <li></li>
            <li></li>
        </ul>
    </div>
}