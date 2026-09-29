import uipages from "./uipages";

export function buildUrl(page: keyof typeof uipages, params?: Record<string, string | number>) {

  const uiPath = uipages[page];
  if (!params) {
    return uiPath;
}
  const qParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)])
  );

  return `${uiPath}?${qParams.toString()}`;
}
