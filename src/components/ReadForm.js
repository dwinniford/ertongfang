import React, {useState} from 'react'
import AWS from 'aws-sdk'



export default function ReadForm() {
    const [text, setText] = useState('What would you like me to say?')
    const [audioSource, setAudioSource] = useState('')
    const [result, setResult] = useState("Enter text above then click Synthesize")
    
    // const onReadSubmit = (event) => {
    //     event.preventDefault()
    //     fetch('http://localhost:7777/read')
    //         .then(res => res.json())
    //         .then(json => setText(json.message))
    // }

    AWS.config.region = process.env.REACT_APP_AWS_REGION; 
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID});
        
        // Function invoked by button click
    const speakText = () => {
        // Create the JSON parameters for getSynthesizeSpeechUrl
        const speechParams = {
            OutputFormat: "mp3",
            SampleRate: "16000",
            Text: "",
            TextType: text,
            VoiceId: "Matthew"
        };
        speechParams.Text = "Sample Text";
        const polly = new AWS.Polly({apiVersion: '2016-06-10'}) // need {apiVersion: '2016-06-10'} ?
        const signer = new AWS.Polly.Presigner(speechParams, polly)
        signer.getSynthesizeSpeechUrl(speechParams, function(error, url) {
            if (error) {
                setResult(error);
            } else {
                setAudioSource(url);
                document.getElementById('audioPlayback').load();
                setResult("Speech ready to play.");
            }
        })
    }



    const handleInputChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div>
            <div id="textToSynth">
                <input onChange={event => handleInputChange(event)} autoFocus size="23" type="text" id="textEntry" value={text}/>
                <button className="btn default" onClick={() => speakText()}>Synthesize</button>
    <p id="result">{result}</p>
            </div>
            <audio id="audioPlayback" controls>
                <source id="audioSource" type="audio/mp3" src={audioSource} />
            </audio>
            {/* <script src="https://sdk.amazonaws.com/js/aws-sdk-2.726.0.min.js"></script> */}
        </div>
    )
}
