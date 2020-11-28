export default class Word {
    count(phrase: string):Map<string,number> {
        let wordCount = new Map();
        wordCount = this.setWordsCount(phrase);
        return wordCount;
    }
    setWordsCount(phrase: string) {
        let wordCount = new Map();
        const regex = /[^\s]+/g;
        const wordsList = phrase.toLowerCase().match(regex);
        if (!wordsList || wordsList.length === 0) {
            return wordCount;
          }
        for (let i = 0; i < wordsList.length; i++) {
            let word = wordsList[i];
            wordCount.set(word, wordCount.get(word) ? wordCount.get(word)+1 : 1)
        }
        return wordCount;
    }
}