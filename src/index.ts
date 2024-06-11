import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { apiReference } from "@scalar/hono-api-reference";

const app = new OpenAPIHono().basePath("/api");

app.get(
  "/docs",
  apiReference({
    spec: { url: "/api/doc.json" },
  })
);

app.doc("/doc.json", {
  openapi: "3.0.0",
  info: { version: "1.0", title: "test api" },
});

app.get("/direct", (c) => {
  return c.json({ message: "Hello World!" }, 200);
});

const route = createRoute({
  method: "get",
  path: "/api/openapi",
  responses: {
    200: { content: { "application/json": { schema: z.object({ message: z.string() }) } }, description: "Api route with zod" },
  },
});

app.openapi(route, (c) => {
  return c.json({ message: "Hello world" }, 200);
});

export default app;
