import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    collapsed = true;

    constructor(private ngxService: NgxUiLoaderService) {}

    showLoader() {
        this.ngxService.start();
        setTimeout(() => {
          this.ngxService.stop();
        }, 1500);
    }
}
