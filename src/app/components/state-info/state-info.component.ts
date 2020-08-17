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
  public stateHistorical: Object[];
  primaryXAxis: Object;
  public tooltip: Object;
  public title: string;
  constructor(
    private covidStateDataService: CovidStateDataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.stateId = this.route.snapshot.params.stateId;
    console.log(this.stateId);

    new DataManager({ url: 'https://api.covidtracking.com/v1/states/' + this.stateId + '/daily.json', adaptor: new ODataAdaptor() })
      .executeQuery(new Query().take(8)).then((e: ReturnOption) => this.stateHistorical = e.result as object[]).catch((e) => true);

    this.title = 'Historical Positive Tests';
    this.primaryXAxis = {
      valueType: 'Category'
    };
    this.tooltip = {
        enable: true
    };
  }

}

