import decoderServices from "../services/decoder.services";

const decode = (req, res) => {
  try {
    const result = decoderServices.decodeService(req.body.encoded);
    res.status(200).send({ text: result });
  } catch (err) {
    res
      .status(err.status || 500)
      .json({ code: err.code || "Something went wrong!" });
  }
};

const decoderController = {
  decode,
};

export default decoderController;
