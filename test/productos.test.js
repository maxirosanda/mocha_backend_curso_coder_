const assert = require('chai').assert;
var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');

let id_producto = ""
let url_producto =""
let nombre_producto=""
describe("Probar login y base de datos productos", ()=>{
  
   
        it("Agregar un Producto",async () => {
          
    var data = new FormData();
    data.append('url', fs.createReadStream('/Users/maxi/Desktop/logo192.png'));
    data.append('nombre', 'mocha');
    data.append('descripcion ', 'descripcion mocha');
    data.append('precio', '344');
    data.append('stock', '42');

    var config = {
      method: 'post',
      url: 'http://localhost:8080/productos',
      headers: { 
        'Cookie': 'connect.sid=s%3AkJ8y18B1hrC4fkfBdIGOvRoFiv0CWMwe.Ev0l5Jyd0xY%2FuGbgBfAv2Oy%2F6JF5A%2FiXJc2FpoM15fs', 
        ...data.getHeaders()
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      id_producto=JSON.stringify(response.data[0]._id)
      url_producto=JSON.stringify(response.data[0]._id)
      nombre_producto=JSON.stringify(response.data[0].nombre)
     
    }).then(function(){
      console.log(nombre_producto)
      assert.equal(nombre_producto,'mocha')
      
    })
    .catch(function (error) {
      console.log(error);
    });
    
})

//------------------------------------------------------------------------------------------
/*
it("traer producto",()=>{
  var config = {
    method: 'get',
    url: `http://localhost:8080/producto/${id_producto}`,
    headers: { 
      'Cookie': 'connect.sid=s%3AkJ8y18B1hrC4fkfBdIGOvRoFiv0CWMwe.Ev0l5Jyd0xY%2FuGbgBfAv2Oy%2F6JF5A%2FiXJc2FpoM15fs'
    }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  
})
  

//---------------------------------------------------------------------------------

it("actualizar producto", async ()=>{

  var data = JSON.stringify({
    "nombre": "actualizar mocha19",
    "descripcion": "descripcion actualizada mocha",
    "precio": 2323,
    "stock": 32,
    "urldos": "nombremqRdmcp66O.png"
  });
  
  var config = {
    method: 'put',
    url: `http://localhost:8080/productos/${id_producto}`,
    headers: { 
      'Content-Type': 'application/json', 
      'Cookie': 'connect.sid=s%3AkJ8y18B1hrC4fkfBdIGOvRoFiv0CWMwe.Ev0l5Jyd0xY%2FuGbgBfAv2Oy%2F6JF5A%2FiXJc2FpoM15fs'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    //console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

  })


//---------------------------------------------------------------------------------------------

it("borrar producto",()=>{
  var data = JSON.stringify({
    "url": `${url_producto}`
  });
  
  var config = {
    method: 'delete',
    url: `http://localhost:8080/productos/${id_producto}`,
    headers: { 
      'Content-Type': 'application/json', 
      'Cookie': 'connect.sid=s%3AkJ8y18B1hrC4fkfBdIGOvRoFiv0CWMwe.Ev0l5Jyd0xY%2FuGbgBfAv2Oy%2F6JF5A%2FiXJc2FpoM15fs'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
   // console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
 
})
*/
})