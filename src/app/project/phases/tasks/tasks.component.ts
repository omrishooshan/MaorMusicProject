import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})


export class TasksComponent implements OnInit {
  
@ViewChild ('SessionInputRef')SessionInputRef: ElementRef;
  @Input() tasksname : string
  @Input() taskIndex : number
  sessionsArry=["fdff"];
  constructor() { }

  ngOnInit() {
  }
  addSession(){
    const newSession= this.SessionInputRef.nativeElement.value
    this.sessionsArry.push(newSession);
  }
}
