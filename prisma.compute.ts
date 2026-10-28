import { defineComputeConfig } from "@prisma/compute-sdk/config";

export default defineComputeConfig({
  app: {
    name: "test-task-4",
    framework: "nestjs",
    httpPort: 3000,
    env: ".env",
  },
});
