import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientsServiceService } from '../../services/clients-service.service';
import { map } from 'rxjs/operators';
import { Clients } from '../../models/MyModels';
@Component({
  selector: 'app-checkbox-client',
  templateUrl: './checkbox-client.component.html',
  styleUrls: ['./checkbox-client.component.scss']
})
export class CheckboxClientComponent implements OnInit {
  @Output() private  IdGenerated = new EventEmitter<number>();
  constructor(config: NgbModalConfig, private modalService: NgbModal,public ClientService :ClientsServiceService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  clients:Array<Clients>
myid:Number=0


  open(content) {
    this.modalService.open(content);
  }
  ngOnInit() {
    this.ClientService.getClients().pipe(map(x=>x["data"])).subscribe(
      (data)=>this.clients =data as Clients[],
      (data :any)=>{
        console.log(this.clients)
     
      }
    )
  }
  save(event,id){
   
console.log(id)
this.IdGenerated.emit(id);
  }
}



