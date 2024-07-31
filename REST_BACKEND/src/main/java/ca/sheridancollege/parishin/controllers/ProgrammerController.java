package ca.sheridancollege.parishin.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sheridancollege.parishin.beans.Programmer;
import ca.sheridancollege.parishin.repositoy.ProgrammerRepository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/programmers")
public class ProgrammerController {
	
	private ProgrammerRepository proRepo;
	
	@GetMapping(value={"/", ""})
	public List<Programmer> getCollection() {
		return proRepo.findAll();
	}
	
	@GetMapping(value={"/{id}"})
	public Programmer getElement(@PathVariable Long id) {
		
		Optional <Programmer> opPro = proRepo.findById(id);
		
		if (opPro.isPresent()) {
			return opPro.get();
		}else {
			return null;
		}
	}
	
	@PostMapping(value={"/", ""}, headers= {"Content-type=application/json"})
	public Programmer postCollection(@RequestBody Programmer programmer) {
		
		programmer.setId(0l);
		return proRepo.save(programmer);
		
	}
	

}
