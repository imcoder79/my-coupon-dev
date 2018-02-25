import { Component, OnInit } from '@angular/core';

const favoritesData = [
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
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites = favoritesData;  

  constructor() { }

  ngOnInit() {
  }

}
