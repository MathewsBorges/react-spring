package com.mathewsborges.reactSpring.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mathewsborges.reactSpring.entities.Sale;
import com.mathewsborges.reactSpring.repositories.SaleRepository;



@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	public List<Sale> findSales() {
		return repository.findAll();
	}
	
}
