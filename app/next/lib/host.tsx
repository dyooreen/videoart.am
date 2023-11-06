const fullPath = (p: string): string => {
  const host =
    process.env.STAGE == "production"
      ? "http://strapi:1337"
      : "https://videoart.am/api";
  return host + p;
};
export default fullPath;
