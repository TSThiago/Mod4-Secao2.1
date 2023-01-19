import Button from "../Atoms/Button";
import { IQuote } from "./Quote"


interface IButtonListProps {
    OnInsertGrade: () => void;
    quote: IQuote
}

const ButtonList: React.FC<IButtonListProps> = (props) => {
    
    return (
        <>
            <Button quote={props.quote} OnClick={props.OnInsertGrade}>0</Button>
            <Button quote={props.quote} OnClick={props.OnInsertGrade}>1</Button>
            <Button quote={props.quote} OnClick={props.OnInsertGrade}>2</Button>
            <Button quote={props.quote} OnClick={props.OnInsertGrade}>3</Button>
            <Button quote={props.quote} OnClick={props.OnInsertGrade}>4</Button>
            <Button quote={props.quote} OnClick={props.OnInsertGrade}>5</Button>
            <Button quote={props.quote} OnClick={props.OnInsertGrade}>6</Button>
            <Button quote={props.quote} OnClick={props.OnInsertGrade}>7</Button>
            <Button quote={props.quote} OnClick={props.OnInsertGrade}>8</Button>
            <Button quote={props.quote} OnClick={props.OnInsertGrade}>9</Button>
            <Button quote={props.quote} OnClick={props.OnInsertGrade}>10</Button>
        </>
    )
}

export default ButtonList;