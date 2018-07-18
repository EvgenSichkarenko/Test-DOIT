import { Component, OnInit } from '@angular/core';
import {constructDependencies} from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  lat = 46.473335;
  lng = 30.647343;
  zom = 10;

  //Markes
   marker = [
    {
      name: 'My geolocation',
       lat: 46.466761,
       lng: 30.6464893,
    } ,
    {
      name: 'School Two',
      lat: 46.469576,
      lng: 30.6408383,
    } ,
    {
      name: 'School Three',
      lat: 46.468461,
      lng: 30.6424813,
    }

  ];

  ///click for Map///
  //  onChoseLocation(event) {
  //    this.lat = event.coords.lat;
  //    this.lng = event.coords.lng;
  //  }

  // clickedMarker(marker: marker){
  //    console.log('Click marker' + marker.name) ;
  // }


  //Creat many marker on map
  onChoseLocation(event){
    const nMarker = {
      name: 'Untitled',
      lat: event.coords.lat,
      lng: event.coords.lng ,
    };
    this.marker.push(nMarker);
  }

  zoomIn(){
    this.zom = this.zom + 1;
  }
  zoomOut(){
    this.zom = this.zom - 1;
  }

  constructor() { }

  ngOnInit()
  }
}

interface marker {
  name: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
