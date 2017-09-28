
/**
 * fetch请求的封装方法，现主要用于get请求
 *
 * @param {object} payload fetch的请求内容，包括url，data的一个对象
 * @returns
 */
let Fetch = function (payload) {
  let fulUrl = payload.url;
  return fetch(fulUrl)
    .then(response =>
      response.json().then(json => ({
        json,
        response
      })))
    .then(({
      json,
      response
    }) => {
      if (!response.ok) {
        return Promise.reject(json)
      } else {
        if (typeof json !== 'undefined') {
          return Promise.resolve(json)
        } else {
          return Promise.reject(json)
        }
      }
    })
}
export default Fetch;