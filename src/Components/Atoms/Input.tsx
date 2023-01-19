import React, { HTMLInputTypeAttribute } from "react";

interface IInput {
    children : string
    type: string
    OnBlur : () => void
}

const Input : React.FC<IInput> = (props) => {
    return (
        <input onBlur={props.OnBlur} type={props.type}>{props.children}</input>
    )
}

export default Input;