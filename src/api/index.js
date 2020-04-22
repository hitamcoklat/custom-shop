import axios from "axios";

export function requestServer(url, method, data) {
  if (method === "get" || method === "delete") {
    axios({
        method: method,
        url: url,
    }).then(function(response) {
        console.log(response)
    });      
    return request({
      url: url,
      method: method,
      params: data,
    });
  } else if (method === "PUT" || method === "POST") {
    return request({
      url: url,
      method: method,
      data,
    });
  }
}

export default requestServer;
