export function AUTH(url: string, config: object) {
  const options = {
    ...config,
  };
  return fetch(url, options);
}
