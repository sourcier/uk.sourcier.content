import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

const config = defineConfig({
  branch,
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "media",
    },
  },
});

export default config;
