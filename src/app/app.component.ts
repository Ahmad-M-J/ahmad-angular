import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PeapleCardsComponent } from './Components/peaple-cards/peaple-cards.component';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from './pipes/highlight.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,PeapleCardsComponent,FormsModule,HighlightPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ahmad';
}
