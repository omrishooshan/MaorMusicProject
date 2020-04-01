import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],

})
export class ProjectComponent implements OnInit {
@ViewChild ('PhaseInputRef')PhaseInputRef: ElementRef;

  //input test//
  test="test";
  //
  constructor(private route : ActivatedRoute){}
  //the "show" below is for opaning the input card for each time we want to add phase or task
  show = false;
//ends

//array for test which we will send as @input to show phase names
  phaseArry=[];
  //ends
ProjectId="";
ProjectName="";

  ngOnInit() {
    this.ProjectId=this.route.snapshot.params.id;
    this.ProjectName=this.route.snapshot.params.name;
  }
  addPhase(event:Event){
    const newPhase = this.PhaseInputRef.nativeElement.value
    this.phaseArry.push(newPhase)
  }
}





