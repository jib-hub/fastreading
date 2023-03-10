/**
 *
 * @param {selector} selector
 * @param {object} config
 */
const fastReading = (selector, config = {}) => {
  const configTemp = config;
  /**
   * defaults
   */
  const {
    percentage = 0.7,
    wrapper = ["<strong>", "</strong>"],
    min = 4,
  } = configTemp;

  const nodes = document.querySelectorAll(selector);
  nodes.forEach((node) => {
    const text = node?.innerText;
    const sentences = text.split(".");
    let convertedSentences = [];
    sentences.forEach((sentence) => {
      if (sentence === "") {
        convertedSentences.push(".");
        return;
      }
      const words = sentence.split(" ");
      let convertedWords = [];
      words.forEach((word) => {
        if (word === "") {
          return;
        }
        if (word?.length < min) {
          convertedWords.push(word);
          return;
        }
        const wordLength = word?.length;
        const until = Math.floor(percentage * wordLength);
        const convertedWordStart = word.substring(0, until);
        const convertedWordEnd = word.substring(until, wordLength);
        const wrappedConvertedWordStart =
          wrapper[0] + convertedWordStart + wrapper[1];
        const highlightedWord = wrappedConvertedWordStart + convertedWordEnd;
        convertedWords.push(highlightedWord);
      });
      convertedSentences.push(convertedWords.join(" "));
    });
    let result = "";
    convertedSentences.forEach((sentence) => {
      if (sentence === ".") {
        return;
      }
      result += sentence + ". ";
    });
    node.innerText = "";
    node.insertAdjacentHTML("beforebegin", result);
  });
};
