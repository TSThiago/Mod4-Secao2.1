import React, { useState } from "react";
import Span from "../Atoms/Span";
import ButtonList from "../Molecule/ButtonList";
import QuoteRank from "../Molecule/QuoteRanker";
import { IQuote } from "../Molecule/Quote";

const Content: React.FC = () => {
    const [value, setValue] = useState({
        anime: 'Naruto',
        character: 'Naruto',
        quote: 'Tô certo!'
    })
    const [quoteList, setQuoteList] = useState<IQuote[]>([])

    function OnInsertGrade(quote? : IQuote , grade? : number) : void {
        if(quote && grade){
            let newQuote = {anime : quote?.anime, character : quote?.character, quote : quote?.quote, grade : 0}
            newQuote.grade = grade
            let quotes = quoteList.slice()
            quotes.push(newQuote)
            setQuoteList(quotes)
        }
    }

    return (
        <>
            <div className="App">
                <h2>Bem Vindo à Votação!</h2>
                <div className='welcome'>
                    <Span>{value.quote}</Span>
                    <p>
                    <Span>{value.anime}</Span>
                    <Span>{value.character}</Span>
                    </p>
                </div>
                <div className='buttons'>
                    <ButtonList quote={value} OnInsertGrade={OnInsertGrade}></ButtonList>
                    <QuoteRank quoteList={quoteList}></QuoteRank>
                </div>
            </div>

        </>
    )
}

export default Content;