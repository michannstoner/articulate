const filterWordData = wordData => {
  const filteredData = {
    'frequency': wordData.frequency,
    'word': wordData.word,
    'definition': wordData.results[0].definition,
    'pronunciation': wordData.pronunciation.all,
    'synonyms': wordData.results[0].synonyms,
    'example': wordData.results[0].examples
  }
  
  return filteredData;
}

export { filterWordData }