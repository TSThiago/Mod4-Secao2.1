import axios from "axios"
import React, { useEffect, useState } from "react";
import Span from "../Atoms/Span";
import ButtonList from "../Molecule/ButtonList";
import QuoteRank from "../Molecule/QuoteRanker";
import { IQuote } from "../Molecule/Quote";

const Content: React.FC = () => {
    const [value, setValue] = useState({
        anime: '',
        character: '',
        quote: ''
    })
    const [quoteList, setQuoteList] = useState<IQuote[]>([])

    useEffect(() => {
        getQuotes()
    }, [])

    function OnInsertGrade(quote?: IQuote, grade?: number): void {
        if (quote && grade) {
            let newQuote = { anime: quote?.anime, character: quote?.character, quote: quote?.quote, grade: 0 }
            newQuote.grade = grade
            let quotes = quoteList.slice()
            quotes.push(newQuote)
            setQuoteList(quotes)
            getQuotes()
        }
    }

    async function fetchQuote() {
        const {data}  = await axios.get('https://animechan.vercel.app/api/random')  
        return data
    }

    async function getQuotes() {
        const data: IQuote = await fetchQuote();
        const quote = { quote: data.quote, anime: data.anime, character: data.character}
        setValue((quote))
    }

    return (
        <>
            <div className="App">
                <h2>Bem Vindo à Votação!</h2>
                <div className='welcome'>
                    <Span>{value.quote}</Span>
                    <p>
                        <Span>{value.anime + ", "}</Span>
                        <Span>{value.character}</Span>
                    </p>
                </div>
                <div className='buttons'>
                    <ButtonList quote={value} OnInsertGrade={OnInsertGrade}></ButtonList>
                </div>
                <div className="quoteRank">
                    <QuoteRank quoteList={quoteList}></QuoteRank>
                </div>
            </div>

        </>
    )
}

export default Content;