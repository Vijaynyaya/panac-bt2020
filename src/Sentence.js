import React from 'react';

function Sentence({ subject, adverb, verb, adjective, object }) {
    const string = subject + " " + adverb + " " + verb + " " + adjective + " " + object + "."
    return (
        <div>
            <br/> 
            <p className="App-header">{ string }</p>
            <br/> 
            <hr/>
        </div> 
    )
}

export default Sentence;