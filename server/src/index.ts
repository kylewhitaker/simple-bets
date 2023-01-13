import express from "express";
import cors from "cors";
import { ROUTER } from "./routers";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", ROUTER.user);
app.use("/bets", ROUTER.bets);

const port = 4200;
app.listen(port, () => console.log(`Server running on port ${port}`));
