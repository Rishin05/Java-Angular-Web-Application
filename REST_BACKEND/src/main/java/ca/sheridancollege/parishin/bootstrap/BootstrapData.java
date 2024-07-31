package ca.sheridancollege.parishin.bootstrap;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import ca.sheridancollege.parishin.beans.Phonecase;
import ca.sheridancollege.parishin.beans.Programmer;
import ca.sheridancollege.parishin.repositoy.PhonecaseRepository;
import ca.sheridancollege.parishin.repositoy.ProgrammerRepository;
import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class BootstrapData implements CommandLineRunner {
	
	private ProgrammerRepository proRepo;
	private PhonecaseRepository pcRepo;

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		Programmer pro1 = Programmer.builder().name("Mark").build();
		Programmer pro2 = Programmer.builder().name("Elon").build();
		Programmer pro3 = Programmer.builder().name("Bill").build();
		
		proRepo.save(pro1);
		proRepo.save(pro2);
		proRepo.save(pro3);
		
		Phonecase p1 = Phonecase.builder().name("Black").price(12.99).quantity(3)
				.programmerName("Mark").build();
		Phonecase p2 = Phonecase.builder().name("Clear").price(9.99).quantity(5)
				.programmerName("Elon").build();
		Phonecase p3 = Phonecase.builder().name("Pink").price(14.99).quantity(8)
				.programmerName("Mark").build();
		Phonecase p4 = Phonecase.builder().name("Blue").price(13.99).quantity(2)
				.programmerName("Elon").build();
		Phonecase p5 = Phonecase.builder().name("Red").price(11.99).quantity(10)
				.programmerName("Bill").build();
		Phonecase p6 = Phonecase.builder().name("Green").price(10.99).quantity(4)
				.programmerName("Elon").build();
		Phonecase p7 = Phonecase.builder().name("Gold").price(16.99).quantity(7)
				.programmerName("Bill").build();
		Phonecase p8 = Phonecase.builder().name("White").price(9.99).quantity(9)
				.programmerName("Mark").build();
		Phonecase p9 = Phonecase.builder().name("Silver").price(15.99).quantity(12)
				.programmerName("Bill").build();
		Phonecase p10 = Phonecase.builder().name("Brown").price(8.99).quantity(1)
				.programmerName("Mark").build();
		
		pcRepo.save(p1);
		pcRepo.save(p2);
		pcRepo.save(p3);
		pcRepo.save(p4);
		pcRepo.save(p5);
		pcRepo.save(p6);
		pcRepo.save(p7);
		pcRepo.save(p8);
		pcRepo.save(p9);
		pcRepo.save(p10);

	}

}
