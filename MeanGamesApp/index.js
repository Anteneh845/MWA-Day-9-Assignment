const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
require("./api/config/db-config");
const gameRoutes = require("./api/routes/game.route");

app.use(express.json());
app.use("/api", gameRoutes);
app.set("port", 3000);

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")))
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log("App started at " + PORT)
})