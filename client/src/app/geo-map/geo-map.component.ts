import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.css']
})
export class GeoMapComponent implements OnInit {
  public componentData7: any = '';
  public userSettings7: any = {
    useGoogleGeoApi: false,
    geoLocDetailServerUrl: 'https://www.simplymovein.com/api/v4/get-location',
    geoPredictionServerUrl: 'https://www.simplymovein.com/api/v4/search-location',
    geoLatLangServiceUrl: 'https://www.simplymovein.com/api/v4/geocode',
    serverResponseListHierarchy: ['data', 'items'],
    serverResponseatLangHierarchy: ['data'],
    serverResponseDetailHierarchy: ['data'],
    recentStorageName: 'componentData5',
    geoCountryRestriction: ['in'],
  };

  constructor() { }

  ngOnInit() {
  }

  autoCompleteCallback7(data: any): any {
    console.log(data)
    this.componentData7 = JSON.stringify(data);
  }
    
}
