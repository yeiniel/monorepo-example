"use strict";

import express from "express";
import serverlessHttp from "serverless-http";

const app = express();

app.get("/", (_req, res) => {
  res.json({
    message: "Hello World",
  });
});

export const handler = serverlessHttp(app);
