import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { WorldService } from './world.service';
import { CountryCases } from './world.model';

@Injectable({providedIn: 'root'})
export class CountryResolverService implements Resolve<CountryCases> {
    constructor(private worldService: WorldService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryCases> {
        return this.worldService.getCountryCases();
    }
}
