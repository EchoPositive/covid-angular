import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidStateDataService {
  temp;
  tempTwo;
  tempThree;
  constructor(
    private http: HttpClient
  ) { }

  getCurrentStateData(){
    return this.http.get('https://api.covidtracking.com/v1/states/current.json');
  }

  getHistoricalStateData(stateId){
    return this.http.get('https://api.covidtracking.com/v1/states/' + stateId + '/daily.json');
  }
  
  getInformationStateData(){
    return this.http.get('https://api.covidtracking.com/v1/states/info.json');
  }
}
