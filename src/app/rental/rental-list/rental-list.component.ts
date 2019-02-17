import { Component, OnInit } from '@angular/core';
import {RentalService} from'../shared/rental.service';
import{ Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']

})
export class RentalListComponent implements OnInit {

  rentals: Rental[] = [];
  testVariable:string="";

  constructor(private rentalService:RentalService) { }

  
  ngOnInit() {

    const testNumber:number =1;
  //  this.testVariable = this.rentalService.testFunction(1);
    const rentalObservable = this.rentalService.getRentals();

    rentalObservable.subscribe(
      (rentals:Rental[])=>{
        
          this.rentals = rentals;

      },
      (err)=>{
        
      },
      ()=>{
     
      });


    
    }
    
  }


