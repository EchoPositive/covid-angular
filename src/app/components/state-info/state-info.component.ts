import { Component, OnInit } from '@angular/core';
import { CovidStateDataService } from 'src/app/services/covid-state-data.service'
import { ActivatedRoute } from '@angular/router';
import { DataManager, WebApiAdaptor, UrlAdaptor, ODataAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import 'rxjs/Rx';

const SERVICE_URI: string = 'https://ej2services.syncfusion.com/production/web-services/';

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
    // this.stateHistorical = this.covidStateDataService.getHistoricalMnStateData();
    // console.log(this.stateHistorical);
  }

}

