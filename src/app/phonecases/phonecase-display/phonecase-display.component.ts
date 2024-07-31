import { Component } from '@angular/core';
import { Phonecase } from '../phonecase';
import { PhonecaseService } from '../phonecase.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-phonecase-display',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './phonecase-display.component.html',
  styleUrl: './phonecase-display.component.css'
})
export class PhonecaseDisplayComponent {
	
	phonecases: Phonecase[] =[] ;
	
	constructor(private phonecaseService: PhonecaseService) {}
	
	getPhonecases(): void {
		this.phonecaseService.getAll().subscribe({
			next:(data) => {
				this.phonecases=data;
			}
		})
	}
	
	ngOnInit():void{
		this.getPhonecases();
		this.phonecaseService.onPhonecaseAdded.subscribe(
			(data:Phonecase) =>this.phonecases.push(data)
		);
	}
	
	deletePhonecase(id: number): void {
    this.phonecaseService.delete(id).subscribe(() => {
      this.phonecases = this.phonecases.filter(phonecase => phonecase.id !== id);
    });
  }

}
