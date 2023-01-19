import Quote, { IQuote } from "./Quote";

interface QuoteRank {
    quoteList : IQuote[];
}

const QuoteRank : React.FC<QuoteRank> = (props) => {
    return (
        <>
        <div className="quoteRank">
            {props.quoteList.sort((a,b) => b.grade && a.grade ? b.grade - a.grade : 0).map((item,index) => (
                <Quote key={index} quote={item.quote} character={item.character} anime={item.anime} grade={item.grade} ></Quote>
            ))}
        </div>
        </>
    ) 
    
}   

export default QuoteRank