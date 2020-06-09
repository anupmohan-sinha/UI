import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { WorldService } from './world.service';
import { CountryIsoStat } from './world.model';

@Injectable({providedIn: 'root'})
export class CountryIsoResolverService implements Resolve<CountryIsoStat> {
    constructor(private worldService: WorldService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryIsoStat> {
        return this.worldService.getCountryCasesByISOCode();
    }
}
