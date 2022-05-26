import { Component } from '@angular/core';
import { Observable,Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  //selector:'date-pipe',
  //templateUrl: './app.component.html'
  template: `<div class="card">
  <div class="card-body">
    <h4 class="card-title">Async Pipe</h4>
    <p ngNonBindable>{{ time | async | date: 'mediumTime' }}</p>
    <p>{{ time | async | date: 'mediumTime' }}</p>
  </div>
</div>

`
})
export class AppComponent {
  title = 'app';
  time = new Observable<string>((Observer:Subscriber<string>) => {
    setInterval(() => Observer.next(new Date().toString()), 1000);
  });
  
}
