import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../../pipes/highlight.pipe'; // Ensure the path is correct

@Component({
  selector: 'app-peaple-cards',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightPipe], // Now this works as HighlightPipe is standalone
  templateUrl: './peaple-cards.component.html',
  styleUrls: ['./peaple-cards.component.css'] 
})
export class PeapleCardsComponent {
  searchTerm: string = ''; // Holds the current search term

  cards = [
    {
      name: 'Ahmad Attar',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 AED',
      image: '/ahmad/Screenshot1.png'
    },
    {
      name: 'Sara Ali',
      submittedOn: '2/3/2024',
      duration: '1 Week (5/4/2023 - 12/4/2023)',
      salary: '800 AED',
      image: '/sara/Screenshot2.png'
    },
    {
      name: 'John Doe',
      submittedOn: '3/3/2024',
      duration: '3 Weeks (10/4/2023 - 30/4/2023)',
      salary: '1200 AED',
      image: '/john/Screenshot3.png'
    }
  ];

  // Getter to filter cards based on the search term
  get filteredCards() {
    console.log('Searching for:', this.searchTerm); // Debugging line
    return this.cards.filter(card => 
      card.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
