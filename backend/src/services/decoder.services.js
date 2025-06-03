import constants from "../constants/constants";
import { containsInvalidControlChars } from "../validator";

const reverseMap = Object.entries(constants.symbolMap).reduce(
  (acc, [char, symbol]) => {
    acc[symbol] = char;
    const upperSymbol = symbol.toUpperCase?.();
    if (upperSymbol !== symbol) {
      acc[upperSymbol] = char.toUpperCase();
    }
    return acc;
  },
  {}
);

const decodeService = (encoded) => {
  if ([...encoded].length > 280) throw { status: 413, code: "INPUT_TOO_LONG" };
  if (containsInvalidControlChars(encoded))
    throw { status: 400, code: "UNSUPPORTED_CONTROL_CHAR" };

  return [...encoded]
    .map((ch) => {
      if (reverseMap[ch]) return reverseMap[ch];

      const code = ch.charCodeAt(0);
      const isAsciiLetter = /^[A-Za-z]$/.test(ch);
      const isPreservedChar = !isAsciiLetter && code >= 0x20 && code !== 0x7f;

      if (isPreservedChar) {
        return ch;
      }

      throw { status: 400, code: "UNKNOWN_SYMBOL" };
    })
    .join("");
};

const decoderServices = {
  decodeService,
};

export default decoderServices;
