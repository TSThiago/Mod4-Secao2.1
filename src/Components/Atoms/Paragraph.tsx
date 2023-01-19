import React, { CSSProperties } from "react"

interface IPProps {
    children: string
}

const P: React.FC<IPProps> = (props) => {
    return (
        <>
            <p>{props.children}</p>
        </>
    )
}

export default P;