import { Component, OnInit } from '@angular/core';
import { CouponComponent } from '../coupon/coupon.component';

const topPickData = [
   {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
   {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
   {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
   {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
   {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
];

const couponData = [
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
  {id: "1", title:"Coupon title", details: "Coupon details", img:"https://image.freepik.com/free-vector/abstract-discount-background_1057-4481.jpg"}, 
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topPicks = topPickData;

  coupons = couponData;

  constructor() { }

  ngOnInit() {
  }

}
