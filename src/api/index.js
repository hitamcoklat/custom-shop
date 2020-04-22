import axios from "axios";

export function requestServer(url, method, data) {
  if (method === "get" || method === "delete") {
    return axios({
        method: method,
        url: url,
    }).then(function(response) {
        return response
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
