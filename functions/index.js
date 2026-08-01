const {onRequest} =
  require("firebase-functions/v2/https");
const logger =
  require("firebase-functions/logger");

const COMMITTEE_SECRET_PIN = "7576";

exports.verifyPin = onRequest(
  {cors: true},
  (req, res) => {
    try {
      const body = typeof req.body === "string" ?
        JSON.parse(req.body) : req.body;
      const enteredPin = body && body.pin ?
        body.pin.toString().trim() : "";

      if (enteredPin === COMMITTEE_SECRET_PIN) {
        res.status(200).json(
          {authorized: true, message: "PIN verified successfully!"}
        );
      } else {
        res.status(401).json(
          {authorized: false, message: "Incorrect PIN."}
        );
      }
    } catch (error) {
      logger.error("Error verifying PIN", error);
      res.status(500).json(
        {authorized: false, message: "Internal server error."}
      );
    }
  }
);