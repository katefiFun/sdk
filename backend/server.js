const express = require("express");
const app = express();
const rewardsRoute = require("./routes/rewards");

app.use(express.json());
app.use("/api/rewards", rewardsRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
