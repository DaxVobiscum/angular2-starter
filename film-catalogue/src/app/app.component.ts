import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';

import { MdcTemporaryDrawer } from '@angular-mdc/web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(MdcTemporaryDrawer)
  private mdcDrawer: MdcTemporaryDrawer;

  title = 'Film Catalogue';

  ngAfterViwInit() { }

  showDrawer() {

    this.mdcDrawer.open();
  }
}
