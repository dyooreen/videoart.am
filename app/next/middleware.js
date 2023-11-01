// Get the preferred locale, similar to the above or using a library
function getLocale(langs) {
  return langs
    .filter((lang) => lang.isDefault == true)
    .map((lang) => lang.code);
}

export async function middleware(request) {
  let data = await (
    await fetch(`https://videoart.am/api/i18n/locales`, {
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
