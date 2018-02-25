import { Component, OnInit } from '@angular/core';

const storesData = [
  {id:"1",label:"Flowers",link:"1800Flowers"},
{id:"2",label:"Academy ",link:"Academy"},
{id:"3",label:"ACMoore",link:"ACMoore"},
{id:"4",label:"adidas",link:"adidas"},
{id:"5",label:"Arby's",link:"Arby's"},
{id:"6",label:"AutoZone",link:"AutoZone"},
{id:"7",label:"Nike    ",link:"NIke"},
{id:"8",label:"Bealls",link:"Bealls"},
{id:"9",label:"Bealls  ",link:"Bealls"},
{id:"10",label:"Beauty.com",link:"Beauty.com"},
{id:"11",label:"Hertz",link:"Hertz"},
{id:"12",label:"Hibbett",link:"Hibbett"},
{id:"13",label:"Hobby Lobby",link:"Hobby Lobby"},
{id:"14",label:"Home Depot",link:"Home Depot"},
{id:"15",label:"iFly",link:"iFly"},
{id:"16",label:"jcpenney",link:"jcpenney"},
{id:"17",label:"Jet.com",link:"Jet.com"},
{id:"18",label:"Jets Pizza",link:"Jets Pizza"},
{id:"19",label:"Joann",link:"Joann"},
{id:"20",label:"Karmaloop",link:"Karmaloop"},
];

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  stores = storesData; 

  constructor() { }

  ngOnInit() {
  }

}
