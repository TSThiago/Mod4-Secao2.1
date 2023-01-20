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
            <section style={{
                margin: '3vh 0',
                display: 'grid',
                placeContent: 'center',
                height: '30vh',
                width: '90vw',
                backgroundColor: '#424141'
            }}>
                <div style={{
                    width: '85vw'
                }}>
                    <Span>{props.quote}</Span>
                </div>
                <div style={{
                    margin: '2vh 0'
                }}>
                    {props.grade !== undefined ?
                        <>
                            <Span>{'Grade: ' + props.grade.toString() + ' || '}</Span>
                        </>
                        : null
                    }
                    <Span>{props.character + ', '}</Span>
                    <Span>{props.anime}</Span>
                </div>
            </section>
        </>
    )
}

export default Quote;