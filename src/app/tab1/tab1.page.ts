import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any
  constructor() {
    
async function getUser() {
var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "fefa0178d76ef3625775679a862e9154");
myHeaders.append('Access-Control-Allow-Origin', '*');
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    let response = await fetch("https://v3.football.api-sports.io/status", {
      method: "GET", 
      "headers": {
        "x-rapidapi-key": "fefa0178d76ef3625775679a862e9154",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        'Access-Control-Allow-Origin':'*'
    },redirect:"follow"});
    let userData = await response.json();
    console.log(userData)
    this.data= userData;

  // let response=await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  // let datapoke=await response.json()
  // return datapoke.name

}

  getUser().then(value=>{
    this.data=value
  })
  }



}
