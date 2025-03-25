import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div>Counter Stuff Goes Here</div>
    <div class="flex gap-4">
      <a class="link" routerLink="ui">UI</a>
      <a class="link" RouterLink="UI">UI</a>
    </div>

    <div>
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class CounterComponent {}
