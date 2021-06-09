const checkForError = response => {
  if(!response.ok) {
    return 'Something went wrong! Please try again later.'
  } else {
    return response.json()
  }
}

const fetchWord = word => {
  fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
	      "method": "GET",
	      "headers": {
		      "x-rapidapi-key": "247406a57bmsh73bf0cce7ec0b4cp15cc72jsnf9d8d4aae1f1",
		      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
	      }
    })
    .then(checkResponse)
}

export { fetchWord, checkForError }