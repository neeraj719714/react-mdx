const MAX_LETTER_COUNT = 18;

const isAlphaNumeric = (str) => {
  return /^[a-z0-9]+$/i.test(str);
};

const getTrimmedId = (heading) => {
  const words = heading.split(" ");
  let id = "";
  let idx = 0;
  while (idx < words.length && id.length < MAX_LETTER_COUNT) {
    const word = words[idx].toLowerCase();
    // console.log("inside while loop-->", word, isAlphaNumeric(word));
    if (!isAlphaNumeric(word)) {
      idx++;
      continue;
    }

    if (id) id += "-";
    id += word;
    idx++;
  }
  return id;
};

// class IDProvider in js
class IDProvider {
  constructor() {
    this.idMap = {};
  }
  getId(heading) {
    // console.log(heading);
    const id = getTrimmedId(heading);
    if (!this.idMap[id]) {
      this.idMap[id] = 1;
      return id;
    }
    return `${id}-${this.idMap[id]++}`;
  }
}

module.exports = IDProvider;
