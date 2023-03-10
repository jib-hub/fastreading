const defaults = {
  percentage: 0.7,
  wrapper: ["<strong>", "</strong>"],
  min: 4,
};

const fastReading = (selector, config = defaults) => {
  const nodes = document.querySelectorAll(selector);
  nodes.forEach((node, index) => {
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
      words.forEach((word, index) => {
        if (word === "") {
          return;
        }
        if (word?.length < config.min) {
          convertedWords.push(word);
          return;
        }
        const wordLength = word?.length;
        const until = Math.floor(config.percentage * wordLength);
        const convertedWordStart = word.substring(0, until);
        const convertedWordEnd = word.substring(until, wordLength);
        const wrappedConvertedWordStart =
          config.wrapper[0] + convertedWordStart + config.wrapper[1];
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
