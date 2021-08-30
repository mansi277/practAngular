import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  @Input('foods') foodArr :string[]=[];
  data:string="This Wishlist has been saved";
  @Output() stringData:EventEmitter<string>=new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
sendData(){
  this.stringData.emit(this.data);
}
}
