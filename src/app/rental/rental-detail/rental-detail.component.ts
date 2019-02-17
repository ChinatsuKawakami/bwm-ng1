import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import{ Rental } from '../shared/rental.model';
import {Observable} from 'rxjs';
import{ RentalComponent} from "../rental.component";
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import{ RentalService } from '../shared/rental.service';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
   
   rental: Rental;

  constructor(private route:ActivatedRoute,
              private rentalService: RentalService) { }

  ngOnInit() {
     this.route.params.subscribe(
       (params)=>{
        this.getRental(params['rentalId']);
       })  
  }

  getRental(rentalId:string){
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental:Rental) => {
        this.rental = rental;
      });
    
  }

}
