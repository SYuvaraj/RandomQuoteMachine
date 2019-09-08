import React,{Component} from 'react';
import Button from '../components/Button'

const QuoteMachine = (props) => (
    <>
    {props.selectedQuote ? `"${props.selectedQuote.quote}" - ${props.selectedQuote.author}` : "" }
    <Button buttonDisplayName = "Next Quote" clickHandler={props.assignNewQuoteIndex} />
    </>
);

export default QuoteMachine;