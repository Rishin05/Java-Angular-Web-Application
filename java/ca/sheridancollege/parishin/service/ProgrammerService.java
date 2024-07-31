package ca.sheridancollege.parishin.service;

import java.util.List;

import org.springframework.stereotype.Service;

import ca.sheridancollege.parishin.domain.Programmer;



@Service
public interface ProgrammerService {
	
	public List<Programmer> findAll();
	public Programmer save(Programmer programmer);
	

}
