import { Component } from '@angular/core';
import { PhonecaseDisplayComponent } from './phonecase-display/phonecase-display.component';
import { PhonecaseAddComponent } from './phonecase-add/phonecase-add.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-phonecases',
  standalone: true,
  imports: [PhonecaseAddComponent, PhonecaseDisplayComponent, RouterOutlet],
  templateUrl: './phonecases.component.html',
  styleUrl: './phonecases.component.css'
})
export class PhonecasesComponent {

}
