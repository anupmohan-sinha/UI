import { IndiaStat, DistrictData } from './india.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndiaService {
  private url = 'https://api.covid19india.org/data.json';
  private districtDataUrl = 'https://api.covid19india.org/state_district_wise.json';

  constructor(private http: HttpClient) { }

  getStatewiseData(): Observable<IndiaStat> {
    return this.http.get<IndiaStat>(this.url);
  }

  getDistrictLevelCases(): Observable<DistrictData> {
    return this.http.get<DistrictData>(this.districtDataUrl);
  }

}
