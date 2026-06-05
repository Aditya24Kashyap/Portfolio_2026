export const appInfo = {
  title: "Aditya Kashyap — Software Engineer",
  description:
    "Final-year B.Tech student at MSIT Delhi. Builds production-grade systems in C++ and full-stack web. 300+ LeetCode, contest rating 1800+. Open to SWE fresher roles.",
  url: process.env.PROD_WEBSITE_URL ?? "https://aditya24kashyap.vercel.app",
  name: "Aditya Kashyap",
};

export const prodUrl =
  process.env.PROD_WEBSITE_URL ?? "https://aditya24kashyap.vercel.app";

export const metadata = {
  title: appInfo.title,
  description: appInfo.description,
};
