const express = require("express");
const app = express();

app.use(express.json());

const AUTH_KEY = process.env.AUTH_KEY || "XINN_OWNER_2026";

app.get("/", (req, res) => {
  res.send("XINN AUTH SERVER ONLINE");
});

app.post("/api/add-queue", (req, res) => {
  if (req.body.authKey !== AUTH_KEY) {
    return res.status(403).json({
      success: false,
      error: "LICENSE_INVALID"
    });
  }

  return res.json({
    success: true,
    message: "AUTH_SUCCESS"
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("XINN AUTH SERVER RUNNING");
});
