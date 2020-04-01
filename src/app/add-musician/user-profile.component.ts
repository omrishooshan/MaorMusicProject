import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Musicians } from '../models/MyModels';
import { MusicansService } from '../services/musicans.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
@ViewChild('nameInputRef') nameInputRef : ElementRef
@ViewChild('CellphoneInputRef') CellphoneInputRef : ElementRef
@ViewChild('instrumentInputRef') instrumentInputRef : ElementRef
@ViewChild('EmailInputRef') EmailInputRef : ElementRef
@ViewChild('PriceInputRef') PriceInputRef : ElementRef

  constructor( private musicanService : MusicansService) { }
    
   pushMusician(){
    const Cellphone= this.CellphoneInputRef.nativeElement.value;
    const instrument=this.instrumentInputRef.nativeElement.value;
    const Name=this.nameInputRef.nativeElement.value;
   const Email=this.EmailInputRef.nativeElement.value;
   const Price=this.PriceInputRef.nativeElement.value;

   const  mymusician : Musicians=new Musicians(Name,Cellphone,Email,instrument,Price)
   // this.musicanService.AddMusician(mymusician);
    //down here we bring the input lines back to empty after sumbiting the new musician
   this.CellphoneInputRef.nativeElement.value=" "
    this.instrumentInputRef.nativeElement.value=" ";
    this.nameInputRef.nativeElement.value=" ";
   this.EmailInputRef.nativeElement.value=" ";
   this.PriceInputRef.nativeElement.value=" ";
   //ends here

this.musicanService.postMusician(mymusician);

   }

  ngOnInit() {   
  }

  
}
