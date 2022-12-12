import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",
    displayName: {
      name: "project_server",
      color: "greenBright",
    },
    verbose: true,
    setupFiles: ["dotenv/config"],
    testMatch: ["**/**/*.test.ts"],
    testEnvironment: "node",
    detectOpenHandles: true,
    transform: { "^.+\\.ts?$": "ts-jest" },
    forceExit: true,
  };
};
