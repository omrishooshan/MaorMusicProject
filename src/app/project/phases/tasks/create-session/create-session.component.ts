import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CreateSessionComponent implements OnInit {
  

  ngOnInit(){}
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
 
  open(content) {
    this.modalService.open(content);
  }


}
