import { describe, expect, test, beforeAll, afterAll } from "@jest/globals";
import { connectDB, disconnectDB } from "../conn";

const User = require("../../src/models/userModel");

describe("Work with User manipulation", () => {
  beforeAll(() => {
    connectDB();
  });
  afterAll(() => {
    disconnectDB();
  });

  test("creation a new user", async () => {
    const user = await User.create({
      email: "test@gmail.com",
      password: "test",
    });
    expect(user.email).toBe("test@gmail.com");
  });

  test("find created user", async () => {
    const user = await User.findOne({ email: "test@gmail.com" });
    expect(user).not.toBeUndefined();
  });
});
