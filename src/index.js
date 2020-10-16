module.exports = function check(str, bracketsConfig) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        const bracket = str[i];

        const openingBracketIndex = bracketsConfig.findIndex((config) => bracket === config[0]);
        const closingBracketIndex = bracketsConfig.findIndex((config) => bracket === config[1]);

        const isOpeningBracket = openingBracketIndex !== -1;
        const isClosingBracket = closingBracketIndex !== -1;
        const isStackTopMatchClosingBracket = isClosingBracket && stack[stack.length - 1] === bracketsConfig[closingBracketIndex][0];

        if (!isOpeningBracket && !isClosingBracket) {
          continue;
        }

        if (isClosingBracket && isStackTopMatchClosingBracket) {
            stack.pop();

        } else if (isOpeningBracket) {
            stack.push(bracket);

        } else if (isClosingBracket && !isStackTopMatchClosingBracket) {
          return false;
        }
    }

    return stack.length === 0;
}
