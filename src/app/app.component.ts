import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicExampleComponent } from './features/basic-example/basic-example.component';
import { LiveExampleComponent } from './features/live-example/live-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicExampleComponent, LiveExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'reactive-forms';
}
