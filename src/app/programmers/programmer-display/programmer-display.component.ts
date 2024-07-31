import { Component } from '@angular/core';
import { Programmer } from '../programmer';
import { ProgrammerService } from '../programmer.service';
import { RouterLink, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-programmer-display',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './programmer-display.component.html',
  styleUrl: './programmer-display.component.css'
})
export class ProgrammerDisplayComponent {
	
	programmers: Programmer[] = [];
	
	constructor(private programmerService: ProgrammerService) {}
	
	getProgrammers():void {
		this.programmerService.getAll().subscribe({
			next:(data) => {
				this.programmers=data;
			}
		})
	}
	
	ngOnInit():void {
		this.getProgrammers();
		this.programmerService.onProgrammerAdded.subscribe(
			(data:Programmer) => this.programmers.push(data)
		);
	}
	

}
