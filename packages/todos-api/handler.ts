"use strict";

import express from "express";
import serverlessHttp from "serverless-http";
import { TodosFeature } from "@yeiniel/todos-feature";

const app = express();

app.locals["todosFeature"] = new TodosFeature();

app.get("/", async (req, res, next) => {
  try {
    res.json({
      data: await req.app.locals["todosFeature"].list(),
    });
  } catch (e) {
    next(e);
  }
});

export const handler = serverlessHttp(app);
