import { Component } from '@angular/core';
import { ProgrammerAddComponent } from './programmer-add/programmer-add.component';
import { ProgrammerDisplayComponent } from './programmer-display/programmer-display.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-programmers',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './programmers.component.html',
  styleUrl: './programmers.component.css'
})
export class ProgrammersComponent {

}
