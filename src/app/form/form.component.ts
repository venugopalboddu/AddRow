import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
    row: any = [ ];
    fdata: any;
    public selectedOption = "Two";
    constructor(private s: DataService){}

    ngOnInit() {
    //this.addTable();
    }
      addTable() {
       this.s.getData().subscribe((res)=>{
        this.fdata = res[0];
        console.log(this.fdata);
        this.row.push(this.fdata);
       });
      }
      addAlert(){
        alert("Duplicate");
      }
      deleteRow(x) {
        var delBtn = confirm(" Do you want to delete row?");
        if ( delBtn == true ) {
          this.row.splice(x, 1 );
        }
      }
}
