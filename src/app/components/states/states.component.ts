import { Component, OnInit } from '@angular/core';
import { CovidStateDataService } from 'src/app/services/covid-state-data.service'

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  statesCurrent;
  statesInfo;
  constructor(
    private covidStateDataService: CovidStateDataService
  ) { }

  ngOnInit(): void {
    this.statesCurrent = this.covidStateDataService.getCurrentStateData();
    console.log(this.statesCurrent);
  }

}
