import { Component, OnInit } from '@angular/core';
import { CovidStateDataService } from 'src/app/services/covid-state-data.service'
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-state-info',
  templateUrl: './state-info.component.html',
  styleUrls: ['./state-info.component.css']
})
export class StateInfoComponent implements OnInit {
  stateId;
  stateHistorical;
  constructor(
    private covidStateDataService: CovidStateDataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.stateId = this.route.snapshot.params.stateId;
    console.log(this.stateId);

    
    this.stateHistorical = this.covidStateDataService.getHistoricalStateData(this.stateId);
  }

}

