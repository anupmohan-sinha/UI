import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorldStat, CountryCases, CountryIsoStat } from './world.model';


@Injectable({
  providedIn: 'root'
})
export class WorldService {

  constructor(private http: HttpClient) { }
  private url = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php';
  private countryWiseUrl = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php';
  private countryWiseISOUrl = 'https://covid19-data.p.rapidapi.com/all';

  getWorldStat(): Observable<WorldStat> {
    let headers = new HttpHeaders();
    headers = headers.set('x-rapidapi-key', 'd1da68c6a2msh3b6d9d162251087p1a1ea9jsn523a7f1824ef');
    return this.http.get<WorldStat>(this.url, { headers });
  }

  getCountryCases(): Observable<CountryCases> {
    let headers = new HttpHeaders();
    headers = headers.set('x-rapidapi-key', 'd1da68c6a2msh3b6d9d162251087p1a1ea9jsn523a7f1824ef');
    return this.http.get<CountryCases>(this.countryWiseUrl, { headers });
  }

  getCountryCasesByISOCode(): Observable<CountryIsoStat> {
    let headers = new HttpHeaders();
    headers = headers.set('x-rapidapi-key', 'd1da68c6a2msh3b6d9d162251087p1a1ea9jsn523a7f1824ef');
    return this.http.get<CountryIsoStat>(this.countryWiseISOUrl, { headers });
  }
}
