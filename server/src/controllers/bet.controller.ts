import { Request, Response } from "express";
import { buildResponse, db } from "../core";

export async function getBets(req: Request, res: Response) {
  const data = await db.bet.findMany();
  res.json(buildResponse(req, data));
}
