import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  email: string = 'aleksi.hakala.98@gmail.com';
  instagram: string = '@lalexeii';

}
