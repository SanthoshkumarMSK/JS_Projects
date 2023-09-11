const express = require("express");

const app = express();

app.use(express.static("lib/Public_Html"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
