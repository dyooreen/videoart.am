const getHost = (isReverted: boolean) => {
  const h = ["http://strapi:1337", "https://videoart.am/api"];
  if (isReverted) h.reverse();
  process.env.STAGE == "production" ? h[0] : h[1];
};
const fullPath = (p: string, isImage: boolean = false): string => {
  const host = getHost(isImage ? true : false);
  return host + p;
};
export default fullPath;
