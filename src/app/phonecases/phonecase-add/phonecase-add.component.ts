import { Component } from '@angular/core';
import { Phonecase } from '../phonecase';
import { PhonecaseService } from '../phonecase.service';
import { FormsModule } from '@angular/forms';
import { ProgrammerService } from '../../programmers/programmer.service';
import { Programmer } from '../../programmers/programmer';
import { CommonModule } from '@angular/common';
import { RouterLink, Routes } from '@angular/router';

@Component({
  selector: 'app-phonecase-add',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './phonecase-add.component.html',
  styleUrl: './phonecase-add.component.css'
})
export class PhonecaseAddComponent {
	
	phonecase: Phonecase = {
		id:0,
		name: '',
		price: 0,
		quantity: 0,
		programmerName: ''
	}
	
	programmers: Programmer[] = []; 
	
	constructor(private phonecaseService: PhonecaseService, private programmerService: ProgrammerService) {}
	
	getProgrammers(): void {
  this.programmerService.getAll().subscribe({
    next: (data: Programmer[]) => {
      console.log('Programmers:', data); // Add this line for debugging
      this.programmers = data;
    },
    error: (error) => {
      console.error('Error fetching programmers:', error);
    }
  });
}
	
	ngOnInit():void {
		this.getProgrammers();
		this.programmerService.onProgrammerAdded.subscribe(
			(data:Programmer) => this.programmers.push(data)
		);
	}
	
	
	savePhonecase():void {
		const data= {
			name:this.phonecase.name,
			price:this.phonecase.price,
			quantity:this.phonecase.quantity,
			programmerName:this.phonecase.programmerName
		};
		
		this.phonecaseService.create(data).subscribe(
			(data:Phonecase)=>this.phonecaseService.onPhonecaseAdded.emit(data)
		);
		this.phonecase.name = '';
		this.phonecase.quantity = 0;
		this.phonecase.price = 0;
		this.phonecase.programmerName = '';

	}
	
	

}
