const filterWordData = wordData => {
  const filteredData = {
    'frequency': wordData.frequency,
    'word': wordData.word,
    'definition': wordData.results[0].definition,
    'pronunciation': wordData.pronunciation.all,
    'synonyms': wordData.results[0].synonyms
  }
  // const filteredData = wordData.map(word => {
  //   return {
  //     'frequency': word.frequency,
  //     'word': word.word,
  //     'definition': word.results[0].definition,
  //     'pronunciation': word.pronunciation.all,
  //     'synonyms': word.results[0].synonyms
  //   }
  // })
  return filteredData;
}

export { filterWordData }