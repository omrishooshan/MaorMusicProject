import { Component, OnInit } from '@angular/core';
import { Musicians } from '../../models/MyModels';
import { MusicansService } from '../../services/musicans.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-musician-table',
  templateUrl: './musician-table.component.html',
  styleUrls: ['./musician-table.component.scss']
})
export class MusicianTableComponent implements OnInit {
  p:number=1;

  arrayMusicianTest: Array<Musicians>
  
  constructor(public musicianConnection: MusicansService) { }

  ngOnInit() {
          
//fetching the right data (we only need musicians) and fitting it to the model of musicians
           this.musicianConnection.getMusicians().pipe(map(X=>X["data"])).subscribe(
           (data)=> this.arrayMusicianTest= data as Musicians[]
           )
    
  }

}
