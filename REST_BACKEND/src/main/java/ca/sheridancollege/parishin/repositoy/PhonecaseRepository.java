package ca.sheridancollege.parishin.repositoy;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ca.sheridancollege.parishin.beans.Phonecase;

@Repository
public interface PhonecaseRepository extends JpaRepository<Phonecase, Long> {

}
