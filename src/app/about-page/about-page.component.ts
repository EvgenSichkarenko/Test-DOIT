import { Component, OnInit , Input} from '@angular/core';
import {constructDependencies} from '@angular/core/src/di/reflective_provider';
import {AboutService} from './about-service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'] ,
  providers: [AboutService]
})
export class AboutPageComponent implements OnInit {
  @Input() mark;
  lat = 46.473335;
  lng = 30.647343;
  zoom = 10;

  onChoseLocation(event) {
    const nMarker = {
      name: 'Unidentified',
      label: 'New Marker',
      lat: event.coords.lat,
      lng: event.coords.lng ,
    };
    this.marker.push(nMarker);
    console.log(event);
  }
  zoomin() {
    this.zoom = this.zoom + 1;
  }
  zoomout() {
    this.zoom = this.zoom - 1;
  }
  clschool() {
    this.marker = [];
    // for (let i in this.school) {
    //   this.marker.push(this.school[i]);
    // }
    this.marker = this.school;
  }
  clgas() {
    this.marker = [];
    // for (let i in this.gasStations)  {
    //   this.marker.push(this.gasStations[i]);
    // }
    this.marker = this.gasStations;
  }
  clphar() {
    this.marker = [];
    // for (let i in this.pharmacies) {
    //   this.marker.push(this.pharmacies[i]);    }
    this.marker = this.pharmacies;
  }
  clrest() {
    this.marker = [];
    // for (let i in this.restaurants) {
    //   this.marker.push(this.restaurants[i]);
    // }
    this.marker = this.restaurants;
  }
  show() {
    const newmarker = JSON.parse(localStorage.getItem('marker')) ;
    this.marker = newmarker;
    // for (let i in newMarker ){
    //    this.marker.push(newMarker[i]);
    // }
  }
  save() {
    localStorage.setItem('marker', JSON.stringify(this.marker) );
  }
  constructor(private aboutService: AboutService) {}
   school = [];
   gasStations = [];
   pharmacies = [];
   restaurants = [];
   marker = [];
  // save();
  ngOnInit() {
    this.school = this.aboutService.school;
    this.gasStations = this.aboutService.gasStations;
    this.pharmacies = this.aboutService.pharmacies;
    this.restaurants = this.aboutService.restaurants;
    this.marker = this.aboutService.marker;
    // this.save() = this.aboutService.saves();
  }
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
