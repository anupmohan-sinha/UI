import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { WorldService } from './world.service';
import { WorldStat } from './world.model';


@Injectable({providedIn: 'root'})
export class WorldResolverService implements Resolve<WorldStat> {
    constructor(private worldService: WorldService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WorldStat> {
        return this.worldService.getWorldStat();
    }
}
