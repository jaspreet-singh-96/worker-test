import { describe, expect, test } from "vitest";
import app from ".";

describe("Api Tests", () => {
  test("direct Api test", async () => {
    const res = await app.request("/api/direct");
    expect(res.status).toBe(200);
  });
  test("Open Api test", async () => {
    const res = await app.request("/api/openapi");
    expect(res.status).toBe(200);
  });
});
