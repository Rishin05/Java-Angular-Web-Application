import { Component } from '@angular/core';
import { Programmer } from '../programmer';
import { ProgrammerService } from '../programmer.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, Routes } from '@angular/router'

@Component({
  selector: 'app-programmer-add',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './programmer-add.component.html',
  styleUrl: './programmer-add.component.css'
})
export class ProgrammerAddComponent {
	
	programmer: Programmer = {
		id:0,
		name:''
	}
	
	constructor(private programmerService: ProgrammerService) {}
	
	saveProgrammer():void {
		const data= {
			name:this.programmer.name
		};
		
		this.programmerService.create(data).subscribe(
			(data:Programmer)=>this.programmerService.onProgrammerAdded.emit(data)
		);
		this.programmer.name = '';
	}
	

}
