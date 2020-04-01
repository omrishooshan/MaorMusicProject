import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../services/ApiServices.service';
import { map, tap } from 'rxjs/operators';
import { Projects, Clients } from '../../models/MyModels';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientsServiceService } from '../../services/clients-service.service';
@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent implements OnInit {
  /*p and p2 are for the paginations*/
  p:number=1;
  p2:number=1;
  arrayOfProjects :Array<Projects>
  arrayOfClientsWithProject :Array<Clients>
  
  constructor(public serviceConnection : ApiServicesService,config: NgbModalConfig, private modalService: NgbModal,public ClientService :ClientsServiceService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
 
        this.serviceConnection.getAllProjects().pipe(map(x=>x["data"])).subscribe(

            data=>
            {
            
              this.arrayOfClientsWithProject=data as Clients[];
            }
            )
   
  }

  open(content) {
    
    this.modalService.open(content);
  }

}