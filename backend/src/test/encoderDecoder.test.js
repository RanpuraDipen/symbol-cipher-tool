import encoderServices from "../services/encoder.services";
import decoderServices from "../services/decoder.services";

describe("Encode/Decode tests", () => {
  it("should return original text after encode and decode", () => {
    const input = "hello, World!";
    const encoded = encoderServices.encodeService(input);
    const decoded = decoderServices.decodeService(encoded);
    expect(decoded).toBe(input);
  });

  it("should preserve emoji characters", () => {
    const input = "test 🎉!";
    const encoded = encoderServices.encodeService(input);
    const decoded = decoderServices.decodeService(encoded);
    expect(decoded).toBe(input);
  });

  it("should preserve punctuation and symbols", () => {
    const input = "Wow!!! #cool@123";
    const encoded = encoderServices.encodeService(input);
    const decoded = decoderServices.decodeService(encoded);
    expect(decoded).toBe(input);
  });

  it("should throw INPUT_TOO_LONG for input over 280 characters", () => {
    const input = "a".repeat(281);
    expect(() => encoderServices.encodeService(input)).toThrow(
      expect.objectContaining({
        code: "INPUT_TOO_LONG",
        status: 413,
      })
    );
  });

  it("should throw UNSUPPORTED_CONTROL_CHAR for invalid control characters", () => {
    const input = "Hello\u0001World";
    expect(() => encoderServices.encodeService(input)).toThrow(
      expect.objectContaining({
        code: "UNSUPPORTED_CONTROL_CHAR",
        status: 400,
      })
    );
  });

  it("should throw UNKNOWN_SYMBOL when decoding unknown symbol", () => {
    const invalidEncoded = "G☺☺δ";
    expect(() => decoderServices.decodeService(invalidEncoded)).toThrow(
      expect.objectContaining({
        code: "UNKNOWN_SYMBOL",
        status: 400,
      })
    );
  });

  it("should correctly encode and decode mixed casing", () => {
    const input = "MixED caSe LeTtErS";
    const encoded = encoderServices.encodeService(input);
    const decoded = decoderServices.decodeService(encoded);
    expect(decoded).toBe(input);
  });

  it("should handle empty input", () => {
    const input = "";
    const encoded = encoderServices.encodeService(input);
    const decoded = decoderServices.decodeService(encoded);
    expect(encoded).toBe("");
    expect(decoded).toBe("");
  });
});
