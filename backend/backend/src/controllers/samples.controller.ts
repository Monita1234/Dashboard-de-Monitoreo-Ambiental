import { Request, Response } from "express";
import { getSamples } from "../services/samples.service";

export function getSamplesHandler(req: Request, res: Response) {
  const {
    page = "1",
    zone,
    sampleType,
    status,
    fromDate,
    toDate,
    operator
  } = req.query;

  const result = getSamples(
    {
      zone,
      sampleType,
      status,
      fromDate,
      toDate,
      operator
    },
    Number(page)
  );

  res.json(result);
}
