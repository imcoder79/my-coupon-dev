import { Component, OnInit } from '@angular/core';

const categoriesData = [

  {id:"1",label:"Apparel(4)",link:"Apparel(4)"},				
{id:"2",label:"Baby&Toddler(9)",link:"Baby&Toddler(9)"},
{id:"3",label:"Beverages(8)",link:"Beverages(8)"},
{id:"4",label:"Books&Magazines(1)",link:"Books&Magazines(1)"},
{id:"5",label:"Foods(31)",link:"Foods(31)"},
{id:"6",label:"HealthCare(19)",link:"HealthCare(19)"},
{id:"7",label:"HomeEntertainment(3)",link:"HomeEntertainment(3)"},
{id:"8",label:"Household(25)",link:"Household(25)"},
{id:"9",label:"LocalCoupons(1)",link:"LocalCoupons(1)"},
{id:"10",label:"Office&Electronics(3)",link:"Office&Electronics(3)"},
{id:"11",label:"PersonalCare(32)",link:"PersonalCare(32)"},
{id:"12",label:"PetCare(11)",link:"PetCare(11)"},
{id:"13",label:"ProfessionalServices(1)",link:"ProfessionalServices(1)"},
{id:"14",label:"Travel(3)",link:"Travel(3)"},
{id:"15",label:"CreditCard/BankingOffers",link:"CreditCard/BankingOffers"},
{id:"16",label:"CouponCodes",link:"CouponCodes"},
{id:"17",label:"Recipes",link:"Recipes"},
{id:"18",label:"Brands",link:"Brands"},
{id:"19",label:"GroceryStores",link:"GroceryStores"},
];

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = categoriesData;

  constructor() { }

  ngOnInit() {
  }

}
