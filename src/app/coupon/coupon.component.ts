import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  @Input() title;
  @Input() details;
  @Input() img;

  constructor() { }

  ngOnInit() {
  }

}
