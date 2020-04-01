import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-check-box-model',
  templateUrl: './check-box-model.component.html',
  styleUrls: ['./check-box-model.component.scss']
})
export class CheckBoxModelComponent implements OnInit {
  //array of musicians:
  musicians_for_session =[{name:"yishay ribo",isChecked:false}
  ,{name:"natan goshen",isChecked:false}
  ,{name:"aharon razel",isChecked:false}
  ,{name:"aharon razel",isChecked:false}
  ,{name:"aharon razel",isChecked:false}
  ,{name:"aharon razel",isChecked:false}
  ,{name:"aharon razel",isChecked:false}
  ,{name:"aharon razel",isChecked:false},
  {name:"hanny nachmias",isChecked:false}]

  p:number=1;

  musicians_for_session_after_saving=[]
  
  marked = false;
  theCheckbox = false;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }
  ngOnInit() {
  }
  toggleVisibility(e:Event){
    //over here we change the boolien of musician in the checkbox
   this.musicians_for_session[(<HTMLInputElement>e.target).value.toString()].isChecked =
    !this.musicians_for_session[(<HTMLInputElement>e.target).value.toString()].isChecked 
  
  }

  save(){
    //when user saves we loop and add only musicians with true ischecked to the new array
    for( let i:number=0 ;i < this.musicians_for_session.length;i++){
      if(this.musicians_for_session[i].isChecked){
        this.musicians_for_session_after_saving.push(this.musicians_for_session[i])
        console.log(this.musicians_for_session[i].name+ " saved")
      }
    }
    console.log("saved musicians "+this.musicians_for_session_after_saving.length)
  }
}
