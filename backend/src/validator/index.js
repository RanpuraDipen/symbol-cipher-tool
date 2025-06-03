export const containsInvalidControlChars = (text) => {
  for (let ch of text) {
    const code = ch.charCodeAt(0);
    if ((code < 0x20 && code !== 0x0A) || code === 0x7f) return true;
  }
  return false;
};
