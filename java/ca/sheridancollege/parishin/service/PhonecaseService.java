package ca.sheridancollege.parishin.service;

import java.util.List;

import org.springframework.stereotype.Service;

import ca.sheridancollege.parishin.domain.Phonecase;



@Service
public interface PhonecaseService {
	
	public List<Phonecase> findAll();
	public Phonecase save(Phonecase phonecase);

}
