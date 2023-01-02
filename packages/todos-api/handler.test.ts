import { describe, expect, test } from "@jest/globals";
import { handler } from "./handler";

describe(handler.name, () => {
  test("should return right status code and body", async () => {
    // given

    // when
    const response = (await handler({}, {})) as unknown as {
      statusCode: number;
      body: string;
    };

    // then
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(JSON.stringify({ data: [] }));
  });
});
