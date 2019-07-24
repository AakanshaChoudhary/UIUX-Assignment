import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { OrderByPipe } from './orderBy.pipe'


@Component({
  selector: 'app-table-assignment',
  templateUrl: './table-assignment.component.html',
  styleUrls: ['./table-assignment.component.css'],
})
export class TableAssignmentComponent implements OnInit {
  products = [];
  isDesc: boolean = false;
  column: string;
  direction: number;
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get('./assets/product.json').subscribe(
      data => {
        this.products = data as string[];
        //console.log(this.products[1]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    )
  }
  sort(property: string) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    // console.log(this.column);
    this.direction = this.isDesc ? 1 : -1;
  };
}
