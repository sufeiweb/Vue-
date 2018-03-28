const promiseFile = (url, token, formData) => {
import $ from 'jquery';
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      type: 'POST',
      cache: false,
      data: formData,
      processData: false,
      contentType: false,
      beforeSend: function (request) {
        request.setRequestHeader('Authorization', 'Bearer ' + token);
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (error) {
        reject(error)
      }
    })
  })
};

export default promiseFile
