import { ApiService } from "./ApiService";

describe("ApiService", () => {
  it("should be defined", () => {
    expect(ApiService);
  });
  it("should have request method", () => {
    expect(ApiService.request);
  });
  it("should have getSentence method", () => {
    expect(ApiService.getSentence);
  });
  it("should have getCache method", () => {
    expect(ApiService.getCache);
    console.log(ApiService);
  });
});
