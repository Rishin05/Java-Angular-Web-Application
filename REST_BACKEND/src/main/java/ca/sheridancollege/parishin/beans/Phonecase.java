package ca.sheridancollege.parishin.beans;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
public class Phonecase {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String name;
	private double price;
	private int quantity;
	private String programmerName;
	
	@JsonIgnore
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinTable(name="PROGRAMMER_PHONECASE",
	    joinColumns=@JoinColumn(name="PHONECASE_ID"),
	    inverseJoinColumns=@JoinColumn(name="PROGAMMER_ID"))
	private Programmer programmer;

}
