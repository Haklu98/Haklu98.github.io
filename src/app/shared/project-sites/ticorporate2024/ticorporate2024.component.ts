import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ticorporate2024',
  standalone: true,
  imports: [MatCardModule, NgIf, CommonModule, MatButtonModule],
  templateUrl: './ticorporate2024.component.html',
  styleUrl: './ticorporate2024.component.scss'
})
export class Ticorporate2024Component {

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    if (window.screen.width > 1300) {
      this.showcode1 = true;
      this.showcode2 = true;
      this.showcode3 = true;
      this.showcode4 = true;
      this.showcode5 = true;
      this.showcode6 = true;
    }

    if (window.screen.width < 1300) {
      this.showcode1 = false;
      this.showcode2 = false;
      this.showcode3 = false;
      this.showcode4 = false;
      this.showcode5 = false;
      this.showcode6 = false;
    }

  }

  showcode1: boolean = false;
  showcode2: boolean = false;
  showcode3: boolean = false;
  showcode4: boolean = false;
  showcode5: boolean = false;
  showcode6: boolean = false;

  toggleCode1() {
    this.showcode1 = !this.showcode1;
  }

  toggleCode2() {
    this.showcode2 = !this.showcode2;
  }

  toggleCode3() {
    this.showcode3 = !this.showcode3;
  }

  toggleCode4() {
    this.showcode4 = !this.showcode4;
  }

  toggleCode5() {
    this.showcode5 = !this.showcode5;
  }

}
