import { Injectable } from '@angular/core';
import { Projects } from '../models/MyModels';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  constructor(public Http:HttpClient) { }

  localUrl ="http://52.58.210.191/api/Query"

 httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

getAllProjects() {

 return this.Http.post(this.localUrl,JSON.stringify({
    Request:
    {
      TblName:"Clients",
      methodName:"QueryTable"
    },
    Param:["ProjectsTbl"]

  }),this.httpOptions)
}

PostNewProject(newproject : Projects){

  this.Http.post(this.localUrl,JSON.stringify({
    Request:
    {
      TblName:"Projects",
      methodName:"Insert"
    },
    Param:[ {
      clientId:newproject.clientId,
      description: newproject.description,
      name: newproject.name,
      estimatedPrice : newproject.estimatedPrice
    }]

  }),this.httpOptions).subscribe(
    (data :any)=>{
      console.log(data)
    }
  )
}

}

