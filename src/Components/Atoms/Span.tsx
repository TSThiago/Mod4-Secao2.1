import React, { CSSProperties } from "react"

interface ISpanProps {
    children: string;
}

const Span: React.FC<ISpanProps> = (props) => {
    return (
        <>
            <span>{props.children}</span>
        </>
    )
}

export default Span;