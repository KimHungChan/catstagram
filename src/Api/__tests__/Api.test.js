import "@testing-library/jest-dom/extend-expect";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { getPosts } from "../Api";
import dummyResponse from "../responseData";

const server = setupServer(
  rest.get("https://api.thecatapi.com/v1/*", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyResponse));
  }),
  rest.get("*", (req, res, ctx) => {
    console.log(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: "Please add request handler" })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Page data", () => {
  it("fetches something", async () => {
    let pageData = await getPosts();
    expect(pageData).toEqual(dummyResponse);
  });

  it("handles failure", () => {
    server.use(
      rest.get(
        "https://api.thecatapi.com/v1/images/?limit=100",
        (req, res, ctx) => {
          return res(ctx.status(400), ctx.json(dummyResponse));
        }
      )
    );

    expect(getPosts()).rejects.toThrow("Request failed with status code 400");
  });
});
