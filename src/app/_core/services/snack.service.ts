import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 *  Convenience service for configuring toast notifications
 */

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  public default(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
     });
  }

}
