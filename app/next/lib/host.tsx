const getHost = () => {
  const h = ["http://strapi:1337", "https://videoart.am/api"];

  process.env.STAGE == "production" ? h[0] : h[1];
};
const fullPath = (p: string, isImage: boolean = false): string => {
  if (isImage) {
    return "https://videoart.am/api" + p;
  }
  const host = getHost();
  return host + p;
};
export default fullPath;
