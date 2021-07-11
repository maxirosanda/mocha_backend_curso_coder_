const assert = require('assert')
var axios = require('axios');

let id_producto = ""

describe("Probar login y base de datos productos",()=>{

          
  it("login",()=>{
    var data = JSON.stringify({
      "username": "maxi_rosanda2",
      "password": "123"
    });
    
    var config = {
      method: 'post',
      url: 'http://localhost:8080/login',
      headers: { 
        'Content-Type': 'application/json', 
        'Cookie': 'connect.sid=s%3AkJ8y18B1hrC4fkfBdIGOvRoFiv0CWMwe.Ev0l5Jyd0xY%2FuGbgBfAv2Oy%2F6JF5A%2FiXJc2FpoM15fs'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  })
    
    it("Deslogearse",()=>{
        var config = {
            method: 'get',
            url: 'http://localhost:8080/logout',
            headers: { 
              'Cookie': 'connect.sid=s%3AdCs4W_MPyqoo5bqfFfzILACXQL7jAT1M.25aHJ%2BH83%2Ffeuv2sXIQH9STXvx7cTxYRdmJOanwgFxQ'
            }
          };
          
          axios(config)
          .then(function (response) {
            //console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
          
    })


})