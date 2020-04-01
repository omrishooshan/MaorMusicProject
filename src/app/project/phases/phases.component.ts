import { Component, OnInit ,Input, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.scss'],
})
export class PhasesComponent implements OnInit {
  //this viewchild fatches the input of a new task name
  @ViewChild ('TaskInputRef')TaskInputRef: ElementRef;
  //ends
    //input test to enter phases
  @Input() phasename: string;
  @Input() phaseindex : Number
  //ends

  //array for test which we will send as @input to show task names
  taskArry=[];
  //ends
  constructor() { }

  addTask(event : Event){
    const newtask = this.TaskInputRef.nativeElement.value
this.taskArry.push(newtask)
  }
  //ends here
  ngOnInit() {
  }
}
