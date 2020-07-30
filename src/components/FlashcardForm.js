import React from 'react'

export default function FlashCardForm() {
    
    const onSave = (event) => {
        event.preventDefault()
        const data = {
            front: event.target.front.value,
            back: event.target.back.value
        }
        console.log(data)
        fetch('http://localhost:7777/flashcards', { method: 'POST', body: JSON.stringify(data)})
            .then(res => res.json())
            .then(json => console.log(json))
    }
    
    return (
        <form onSubmit={(event) => onSave(event)}>
            <h2>Create a flash card</h2>
            <label htmlFor="front">Front</label>
            <input id="front" type="text" name="front" />
            <label htmlFor="back">Back</label>
            <input id="back" type="text" name="back" />
            <input type="submit" value="save" />
        </form>
    )
}
