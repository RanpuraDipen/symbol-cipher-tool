import encoderServices from "../services/encoder.services";

const encode = (req, res) => {
  try {
    const result = encoderServices.encodeService(req.body.text);
    res.status(200).send({ encoded: result });
  } catch (err) {
    res
      .status(err.status || 500)
      .json({ code: err.code || "Something went wrong!" });
  }
};

const encoderController = {
  encode,
};

export default encoderController;
