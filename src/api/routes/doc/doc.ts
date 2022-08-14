import { Router } from "express";
import swaggerUi from "swagger-ui-express";

const swaggerFile = require("./swagger-output.json");

export default (app: Router): void => {
  app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
};
