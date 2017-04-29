// https://www.codewars.com/kata/51646de80fd67f442c000013/train/javascript

function stripUrlParams(url, paramsToStrip) {

  let stripTheseParams = paramsToStrip || [];
  let newParams = [];

  const splitUrl = url.split("?");
  const baseUrl = splitUrl[0];

  if (splitUrl.length > 1) {
    let paramStrings = splitUrl[1].split("&");
    for (let i = 0; i < paramStrings.length; i++) {
      let paramName = paramStrings[i].split("=")[0];
      if (!stripTheseParams.includes(paramName)) {
        newParams.push(paramStrings[i]);
        stripTheseParams.push(paramName);
      }
    }
    return baseUrl + "?" + newParams.join("&");
  }
  return baseUrl;
}