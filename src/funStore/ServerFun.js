const promiseXHR = (url, token, data, type) => {
  "use strict";
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    if (typeof data === 'object') {
      xhr.setRequestHeader('Content-Type', 'application/json');
      data = JSON.stringify(data)
    } else {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    }
    if (token !== null) {
      xhr.setRequestHeader('Authorization', token.type + ' ' + token.value)
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          resolve(xhr.responseText)
        } else {
          reject(xhr.responseText)
        }
      }
    };
    xhr.send(data);
  })
};

export default promiseXHR;
