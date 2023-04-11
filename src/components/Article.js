import React from 'react'

function Article( {
    title, 
    date = "January 1st, 1970", 
    preview,
    minutes,
} ) {

    let emojiCountFunc = (min) => {
        let string = "";
        if (min < 30) {
            for (let i = 0; i < min; i+=5) {
                string = string + "☕️"
            }
        } else {
            for (let i = 30; i < min; i+=5) {
                string = string + "🍱"
            }
        }
        return string;
    }
    let emojiCount = emojiCountFunc(minutes);
    console.log(emojiCount)

  return (
    <div>
        <h3>{title}</h3>
        <small>{date} - {emojiCount} {minutes} minute read.</small>
        <p>{preview}</p>
    </div>
  )
}

export default Article