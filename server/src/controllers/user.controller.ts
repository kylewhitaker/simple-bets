import { Request, Response } from "express";
import { buildResponse, db } from "../core";

export async function getUser(req: Request, res: Response) {
  const data = await db.user.findFirst({
    where: { email: req.body.email },
  });
  res.json(buildResponse(req, data));
}
