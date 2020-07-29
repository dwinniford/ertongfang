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
        <form onSubmit={event => onReadSubmit(event)}>
            <p>{text}</p>
            <input type="submit" />
        </form>
    )
}
