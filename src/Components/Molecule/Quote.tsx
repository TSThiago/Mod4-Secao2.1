import Span from "../Atoms/Span";

export interface IQuote {
    quote: string;
    character: string;
    anime: string;
    grade?: number;
}

const Quote: React.FC<IQuote> = (props) => {
    return (
        <>
            <div>
                <div>
                    <Span>{props.quote}</Span>
                </div>
                <div>
                    {props.grade !== undefined ?
                        <>
                            <Span>{'Nota:' + props.grade.toString() + ' || '}</Span>
                        </>
                        : null
                    }
                    <Span>{props.character + ', '}</Span>
                    <Span>{props.anime}</Span>
                </div>
            </div>
        </>
    )
}

export default Quote;