const getHost = () => {
  const h = ["http://strapi:1337", "https://videoart.am/api"];

  return process.env.STAGE == "production" ? h[0] : h[1];
};

const fullPath = (
  p: string,
  isOnServerSide: boolean = false,
  isImage: boolean = false
): string => {
  if (isOnServerSide && isImage) {
    return "http://strapi:1337" + p;
  }

  if (isImage) {
    return "https://videoart.am/api" + p;
  }

  return getHost() + p;
};
export default fullPath;
