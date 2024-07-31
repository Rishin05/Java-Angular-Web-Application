package ca.sheridancollege.parishin.repositoy;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ca.sheridancollege.parishin.beans.Programmer;

@Repository
public interface ProgrammerRepository extends JpaRepository<Programmer, Long> {

}
