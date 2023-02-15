import React, { CSSProperties } from "react"

interface ISpanProps {
    children: string;
}

const Span: React.FC<ISpanProps> = (props) => {
    return (
        <>
            <span data-testid="test-span">{props.children}</span>
        </>
    )
}

export default Span;