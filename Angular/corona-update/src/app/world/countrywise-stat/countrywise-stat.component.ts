import { CountryCases, CountryStat } from './../world.model';
import { WorldService } from './../world.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-countrywise-stat',
  templateUrl: './countrywise-stat.component.html',
  styleUrls: ['./countrywise-stat.component.scss']
})
export class CountrywiseStatComponent implements OnInit {

  displayedColumns: string[] = ['country_name', 'cases', 'deaths', 'total_recovered', 'new_deaths', 'new_cases', 'serious_critical',
   'active_cases', 'total_cases_per_1m_population'];
  dataSource: MatTableDataSource<CountryStat>;

  @Input() countryStat: CountryStat[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private worldService: WorldService) {
  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource<CountryStat>(this.countryStat);
    this.dataSource.paginator = this.paginator;
  }

}



