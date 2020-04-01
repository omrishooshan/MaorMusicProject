import { Component,ElementRef,
  ViewChild, 
  OnInit} from '@angular/core';
import { ApiServicesService } from '../services/ApiServices.service';
import { ClientsServiceService } from '../services/clients-service.service';
import { Clients, Projects } from '../models/MyModels';

/*THE NAME NOTAFICATIONS NEEDS TO BE CHANGED BEFORE DEPLOYING!!*/

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  constructor(public serviceConnection : ApiServicesService, public ClientsService : ClientsServiceService){}

  ClientsList:Clients[]
  //creating over here viewchild to fetch the value from the elements of the input's project
  @ViewChild('projectNameInputRef') projectNameInputRef: ElementRef;
  @ViewChild('DescriptionInputRef') DescriptionInputRef: ElementRef;
  @ViewChild('PriceInputRef') PriceInputRef: ElementRef;
  idForClient:number=null
  ngOnInit(){

      
  }
  pushProject()
  {
    //if the user didnt choose a client mehtod will be canceled
    if(this.idForClient==null){
        alert("You must choose a client first..")
        return
    }
    const projectName=this.projectNameInputRef.nativeElement.value;
    const description=this.DescriptionInputRef.nativeElement.value;
    const Price=this.PriceInputRef.nativeElement.value;
    

// adding all values to our new project (including client's id from @output in child element checkbox)

    const NewProject =new Projects(projectName,description,this.idForClient,Price)
      //uploading project to database(with api service )      
this.serviceConnection.PostNewProject(NewProject);
       //this.serviceConnection.AddProject(newProject)
        
   this.projectNameInputRef.nativeElement.value="";
    this.DescriptionInputRef.nativeElement.value="";
    this.PriceInputRef.nativeElement.value="";

  }

  //this method is listening to @output from checkbox-client in order to get clinets id
  onIdGenerated(idForCLientInProject :number) {
    console.log("check-"+idForCLientInProject)
    this.idForClient=idForCLientInProject
 
  }

}
