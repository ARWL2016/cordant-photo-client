import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 *  Display app navigation features (top nav) and outlet for child routes
 */

@Component({
  selector: 'cor-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(
    private router: Router
  ) { }

  public exit() {
    this.router.navigate(['welcome']);
  }

}
