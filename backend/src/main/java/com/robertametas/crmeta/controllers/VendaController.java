package com.robertametas.crmeta.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.robertametas.crmeta.entities.Venda;
import com.robertametas.crmeta.services.VendaService;

@RestController
@RequestMapping(value ="/vendas")
public class VendaController {
	
	@Autowired
	private VendaService service;
	
	@GetMapping
	public List<Venda> findSales(){
		return service.findVendas();
		
	}
	

}
