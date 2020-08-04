import React, {useState} from 'react'


export default function ReadForm() {
    const [text, setText] = useState('waiting for reading to start')
    
    const onReadSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:7777/read')
            .then(res => res.json())
            .then(json => setText(json.message))
    }

    return (
        <div>
            <div id="textToSynth">
                <input autofocus size="23" type="text" id="textEntry" value="It's very good to meet you."/>
                <button class="btn default" onClick="speakText()">Synthesize</button>
                <p id="result">Enter text above then click Synthesize</p>
            </div>
            <audio id="audioPlayback" controls>
                <source id="audioSource" type="audio/mp3" src="" />
            </audio>
        </div>
    )
}
