import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

    public showContainer: boolean;
    constructor(public breakpointObserver: BreakpointObserver) {}

    ngOnInit() {
      this.breakpointObserver
        .observe(['(min-width: 800px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.showContainer = true;
          } else {
            this.showContainer = false;
          }
        });
    }

}
