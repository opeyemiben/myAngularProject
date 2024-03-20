import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})

export class CitiesComponent implements OnInit{
myCity: string;

cities: Array<string> = [];
//cities: string[] = ['Osogbo','Enugu','Kaduna','Benin','Akure'];
numOfCities: number = 0;
statesVisited: string[] = [];
properties: any[];
numOfCitiesCountEmitted: number; //this property will be binded to the output from the child component

constructor(){
this.myCity = 'Lagos';
this.cities = ['Osogbo','Enugu','Kaduna','Benin','Akure'];
this.numOfCities = this.cities.length;
this.properties = [false, 56, "me"];
this.numOfCitiesCountEmitted = 0;
}

ngOnInit(){
this.getStatesVisited();
}

getStatesVisited(){
  this.statesVisited = ['Lagos', 'Anambra', 'Kano', 'Ekiti', 'Plateau'];
}

numOfCitiesCount(num: number){
this.numOfCitiesCountEmitted = num;
}
}
