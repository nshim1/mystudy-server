import swaggerUIExpress from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const swaggerOption = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Todo api doc",
      description: "My test dev document",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: ["./src/route/*.js"],
};

const specs = swaggerJsdoc(swaggerOption);

export { specs, swaggerUIExpress };
