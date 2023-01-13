import { Router } from "express";
import { getBets, getUser } from "./controllers";

const user = Router();
user.get("/", getUser);

const bets = Router();
bets.get("/", getBets);

export const ROUTER = {
  user,
  bets,
};
