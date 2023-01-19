import React, { ReactElement } from "react"
import { useState } from "react"

interface IRemoveProps {
 RemoveInterface : () => void   
}

function Remove(Component : any) : React.FC<IRemoveProps> {
    const Remove = (props : any) => {
        const [display, setDisplay] = useState(true)

        return <Component {...props} onClick={() => {setDisplay(false)}} status={display}></Component>
    } 

    return (
        Remove
    )
}

export default Remove;