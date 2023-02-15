import React, { CSSProperties } from "react"

interface IPProps {
    children: string
}

const Paragraph: React.FC<IPProps> = (props) => {
    return (
        <>
            <p data-testid="test-p" >{props.children}</p>
        </>
    )
}

export default Paragraph;