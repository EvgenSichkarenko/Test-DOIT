import { Component, OnInit , Input} from '@angular/core';
import {constructDependencies} from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  @Input() mark;
  lat = 46.473335;
  lng = 30.647343;
  zom = 10;
  label ;

  //Markes
  marker = [
    {
      name: 'Point of geolocation',
      label: 'My location',
      lat: 46.469576,
      lng: 30.6408383,
    } ,
  ] ;

  ///click for Map///
  //  onChoseLocation(event) {
  //    this.lat = event.coords.lat;
  //    this.lng = event.coords.lng;
  //  }


  //Creat many marker on map
  onChoseLocation(event){
    const nMarker = {
      name: 'Unidentified',
      label: 'New Marker',
      lat: event.coords.lat,
      lng: event.coords.lng ,
    };
    this.marker.push(nMarker);
    console.log(this.marker);
  }

  zoomIn(){
    this.zom = this.zom + 1;
  }

  zoomOut(){
    this.zom = this.zom - 1;
  }

  Save(){
     localStorage.setItem('marker', JSON.stringify(this.marker) );
  }

  Show(){
    const newMarker = JSON.parse(localStorage.getItem('marker')) ;
    for(let i in newMarker ){
       this.marker.push(newMarker[i]);
    }
  }

  school = [
    {
      name: 'School 58',
      label: 'School 58',
      lat: 46.4784188,
      lng: 30.72825134
    },
    {
      name: 'ONAFT',
      label: 'ONAFT',
      lat: 46.45110667,
      lng: 30.75414607
    },
    {
      name: 'School 125',
      label: 'School 125',
      lat: 46.48288707,
      lng: 30.66007564
    },
  ] ;

  gasStations = [
    {
      name: 'lukoil',
      label: 'lukoil',
      lat: 46.44813423,
      lng: 30.75532728
    },
    {
      name: 'Ukrnaf',
      label: 'Ukrnaf',
      lat: 46.4732856,
      lng: 30.70608089
    },
    {
      name: 'Wog',
      label: 'Wog',
      lat: 46.4601971,
      lng: 30.70071634
    },
  ] ;

  pharmacies = [
    {
      name: 'Asvit',
      label: 'Asvit',
      lat: 46.39313101,
      lng: 30.72099501
    },
    {
      name: 'Farmacia',
      label: 'Farmacia',
      lat: 46.44993147,
      lng: 30.75532728
    },
    {
      name: 'Med-Servys',
      label: 'Med-Servys',
      lat: 46.47754116,
      lng: 30.71338765
    },
  ] ;

  restaurants = [
    {
      name: 'Grand Prix',
      label: 'Grand Prix',
      lat: 46.48115889,
      lng: 30.73836976
    },
    {
      name: 'Sophie Cafe',
      label: 'Sophie Cafe',
      lat: 46.43449473,
      lng: 30.70377461
    },
    {
      name: 'Benedikt',
      label: 'Benedikt',
      lat: 46.41366887,
      lng: 30.75149647
    },
  ] ;

  clSchool(){
    this.marker = [];
    for(let i in this.school){
      this.marker.push(this.school[i]);
    }
  }

  clGas(){
    this.marker = [];
    for(let i in this.gasStations){
      this.marker.push(this.gasStations[i]);
    }
  }
  clPhar(){
    this.marker = [];
    for (let i in this.pharmacies){
      this.marker.push(this.pharmacies[i]);    }
  }
  clRest(){
    this.marker = [];
    for (let i in this.restaurants){
      this.marker.push(this.restaurants[i]);
    }
  }

  constructor() {

  }
  ngOnInit() {}
}

  // allMarker = [
  //   {
  //     name: "--select--" ,
  //     id: 0
  //   },
  //   {
  //     name: 'school',
  //     id: 1
  //   } ,
  //   {
  //     name: 'gasStations',
  //     id:  2
  //   } ,
  //   {
  //     name: 'pharmacies',
  //     id: 3
  //   },
  //   {
  //     name: 'restaurants',
  //     id:  4
  //   }
  // ] ;
  // clSchool(){
  //   for(let i in  this.allMarker){
  //      if(this.allMarker ===  1){
  //        for (let i in this.school){
  //          this.marker.push(this.school[i]);
  //        } }
  //       if(this.allMarker[i] === 2){
  //       for (let i in this.gasStations){
  //         this.marker.push(this.gasStations[i]);
  //       }
  //     // } if(this.allMarker[i] === 3){
  //     //   for (let i in this.restaurants){
  //     //     this.marker.push(this.restaurants[i]);
  //     //   }
  //     // } if(this.allMarker[i] === 4){
  //     //   for (let i in this.pharmacies){
  //     //     this.marker.push(this.pharmacies[i]);
  //     //   }
  //     // }
  //   }
  // }

