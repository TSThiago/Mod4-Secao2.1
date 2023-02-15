import React, { HTMLInputTypeAttribute } from "react";

interface IInput {
    type: string
}

const Input : React.FC<IInput> = (props) => {
    return (
        <input data-testid="test-input" type={props.type}></input>
    )
}

export default Input;