const express = require("express");
const app = express();
const api = require("./routes/index");
const root = require("./routes/rootRouter");
const cors = require("cors");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/api", api);
app.use("/", root);
app.listen(3001, () => console.log("Node 서버 포트번호3001"));
