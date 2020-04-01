import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ClientsServiceService } from '../services/clients-service.service';
import { Clients } from '../models/MyModels';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
@ViewChild ('FirstnameInputRef') FirstnameInputRef : ElementRef
@ViewChild('LastnameInputRef') LastnameInputRef : ElementRef
  constructor(public ClientService : ClientsServiceService) { }
 
  pushClient(){
    const FirstName = this.FirstnameInputRef.nativeElement.value
    const LastName = this.LastnameInputRef.nativeElement.value



    const addclient = new Clients(FirstName,LastName)
   this.ClientService.postClient(addclient)


  }
  ngOnInit() {
  }

}
