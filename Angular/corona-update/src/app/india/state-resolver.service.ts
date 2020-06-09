import { DistrictData } from './india.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IndiaService } from './india.service';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class StateResolverService implements Resolve<DistrictData> {
    constructor(private indiaService: IndiaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DistrictData> {
        return this.indiaService.getDistrictLevelCases();
    }
}
