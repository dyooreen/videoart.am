// Get the preferred locale, similar to the above or using a library
function getLocale(langs) {
  return langs
    .filter((lang) => lang.isDefault == true)
    .map((lang) => lang.code);
}
const fullPath = (p) => {
  const host =
    process.env.STAGE == "production"
      ? "http://strapi:1337"
      : "https://videoart.am/api";
  return host + p;
};
export async function middleware(request) {
  let data = await (
    await fetch(fullPath(`/i18n/locales`), {
      cache: "force-cache",
    })
  ).json();
  let locales = data.map((i) => i.code);

  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(data);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)", "/"],
};
