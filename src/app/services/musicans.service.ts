import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Musicians } from '../models/MyModels';
@Injectable({
  providedIn: 'root'
})
export class MusicansService {

localUrl ="http://52.58.210.191/api/Query"

 httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};
 constructor(private Http : HttpClient) { }

 //adding a new musician to data base
postMusician(newmusician:Musicians){

  this.Http.post(this.localUrl,JSON.stringify({
    Request:
    {
      TblName:"Musicians",
      methodName:"Insert"
    },
    Param:[ {
      Name:newmusician.name,
      Cellphone:newmusician.cellphone,
      Email:newmusician.email,
      Instrument:newmusician.instrument,
      pricePerSession:newmusician.pricePerSession

    }]
  }),this.httpOptions).subscribe(
    (data :any)=>{
      console.log(data)
    }
  )
}

//getting the list of all musicians there is
getMusicians() {
  return this.Http.post(this.localUrl,JSON.stringify({
    Request:
    {
      TblName:"Musicians",
      methodName:"QueryTable"
    },
    Param:[
    ]
  }),this.httpOptions)
}
}
