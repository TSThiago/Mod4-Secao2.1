import React, { ReactElement } from "react";
import { IQuote } from "../Molecule/Quote";

interface IButtonProps {
    children: string;
    OnClick: (quote? : IQuote, grade? : number) => void;
    quote: IQuote
}

const Button: React.FC<IButtonProps> = (props) => {
    return (
        <>
            <button onClick={() => {props.OnClick(props.quote, parseInt(props.children))}}>{props.children}</button>
        </>
    )
}

export default Button;