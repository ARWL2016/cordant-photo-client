import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 *  Display welcome page.
 */

@Component({
  selector: 'cor-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {

  constructor(
    private router: Router
  ) { }

  public enter() {
    this.router.navigate(['photos']);
  }

}
