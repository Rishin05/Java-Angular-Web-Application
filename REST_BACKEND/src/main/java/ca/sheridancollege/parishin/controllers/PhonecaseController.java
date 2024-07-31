package ca.sheridancollege.parishin.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sheridancollege.parishin.beans.Phonecase;
import ca.sheridancollege.parishin.repositoy.PhonecaseRepository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/phonecases")
public class PhonecaseController {
	
	private PhonecaseRepository pcRepo;

	@GetMapping(value={"/", ""})
	public List<Phonecase> getCollection() {
		return pcRepo.findAll();
	}
	
	@GetMapping(value={"/{id}"})
	public Phonecase getElement(@PathVariable Long id) {
		
		Optional <Phonecase> opPc = pcRepo.findById(id);
		
		if (opPc.isPresent()) {
			return opPc.get();
		}else {
			return null;
		}
	}
	
	@PostMapping(value={"/", ""}, headers= {"Content-type=application/json"})
	public Phonecase postCollection(@RequestBody Phonecase phonecase) {
		
		phonecase.setId(0l);
		return pcRepo.save(phonecase);
		
	}

	@DeleteMapping(value={"/{id}"})
	public String deletePhonecase(@PathVariable Long id) {
		
		Optional <Phonecase> opPc = pcRepo.findById(id);
		
		if (opPc.isPresent()) {
			pcRepo.deleteById(id);
			return "Phonecase Deleted";
		}
		return "Phonecase not present";
		
	}


}
