import { Injectable } from '@angular/core';
import { Clients } from '../models/MyModels';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  localUrl ="http://52.58.210.191/api/Query"

  httpOptions = {
   headers : new HttpHeaders({'Content-Type': 'application/json'})
 };
  constructor(public Http:HttpClient) { }


  //add new client
  postClient(newclient : Clients){

    this.Http.post(this.localUrl,JSON.stringify({
      Request:
      {
        TblName:"Clients",
        methodName:"Insert"
      },
      Param:[ {
        firstName:newclient.firstName,
        lastName:newclient.lastName
  
      }]
    }),this.httpOptions).subscribe(
      (data :any)=>{
        console.log(data)
      }
    )
  }

  getClientByFullName(firstname) {
   
    return this.Http.post(this.localUrl,JSON.stringify({
      Request:
      {
        TblName:"Clients",
        methodName:"getClientsByName"
      },
      Param:[firstname

      ]
    }),this.httpOptions)
  
  }
  getClients(){
   return  this.Http.post(this.localUrl,JSON.stringify({
      Request:
      {
        TblName:"Clients",
        methodName:"QueryTable"
      },
      Param:[ ]
    }),this.httpOptions)
  }
}
/**		"TblName":"Clients",
		"methodName":""
	},
	"Param":["yaniv shukrun"] */