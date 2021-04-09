import { ApiService } from "./ApiService";

describe("ApiService", () => {
  it("should be defined", () => {
    expect(ApiService);
  });
  it("should have getCache method", () => {
    expect(ApiService.getCache);
  });
  it("should have request method", () => {
    expect(ApiService.request);
  });

  it("should have getSentence method", () => {
    expect(ApiService.getSentence);
  });
  describe("getSentence", () => {
    it("should resolve on sucess", async () => {
      let resp = await ApiService.getSentence({
        subject: "officer",
        verb: "ran",
        object: "gun",
        type: "yesno",
        tense: "past",
      });
      console.log(resp);
      expect(resp.result).toBe("OK");
      expect(resp.sentence).toBeTruthy();
    });
   
  });
  
});
