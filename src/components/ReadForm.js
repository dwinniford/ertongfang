import React, {useState} from 'react'
import AWS from 'aws-sdk'



export default function ReadForm() {
    const [text, setText] = useState('waiting for reading to start')
    
    // const onReadSubmit = (event) => {
    //     event.preventDefault()
    //     fetch('http://localhost:7777/read')
    //         .then(res => res.json())
    //         .then(json => setText(json.message))
    // }

    AWS.config.region = process.env.REACT_APP_AWS_REGION; 
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: process.env.REACT_APP_AWS_REGION});
        
        // Function invoked by button click
    const speakText = () => {
        // Create the JSON parameters for getSynthesizeSpeechUrl
        var speechParams = {
            OutputFormat: "mp3",
            SampleRate: "16000",
            Text: "",
            TextType: "text",
            VoiceId: "Matthew"
        };
        speechParams.Text = "Sample Text";
    }

    return (
        <div>
            <div id="textToSynth">
                <input autofocus size="23" type="text" id="textEntry" value="It's very good to meet you."/>
                <button class="btn default" onClick={speakText()}>Synthesize</button>
                <p id="result">Enter text above then click Synthesize</p>
            </div>
            <audio id="audioPlayback" controls>
                <source id="audioSource" type="audio/mp3" src="" />
            </audio>
            {/* <script src="https://sdk.amazonaws.com/js/aws-sdk-2.726.0.min.js"></script> */}
        </div>
    )
}
