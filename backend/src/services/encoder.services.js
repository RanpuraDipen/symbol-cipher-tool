import constants from "../constants/constants";
import { containsInvalidControlChars } from "../validator";

const encodeService = (text) => {
  if ([...text].length > 280) throw { status: 413, code: "INPUT_TOO_LONG" };
  if (containsInvalidControlChars(text))
    throw { status: 400, code: "UNSUPPORTED_CONTROL_CHAR" };

  return [...text]
    .map((ch) => {
      const isUpper = ch >= "A" && ch <= "Z";
      const key = ch.toLowerCase();
      const sym = constants.symbolMap[key];
      if (!sym) return ch;
      return isUpper ? sym.toUpperCase?.() || sym : sym;
    })
    .join("");
};

const encoderServices = {
  encodeService,
};

export default encoderServices;
