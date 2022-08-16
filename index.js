const express = require("express");
const app = express();
app.use(express.json());

const requestsRouter = require("./routes/requests");
app.use("/requests", requestsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
