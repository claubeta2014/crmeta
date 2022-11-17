package com.robertametas.crmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertametas.crmeta.entities.Venda;
import com.robertametas.crmeta.repositories.VendaRepository;

@Service
public class VendaService {
	
    @Autowired
	private VendaRepository repository;
    
	public List<Venda> findVendas() {
		return repository.findAll();	
		
	}
}
