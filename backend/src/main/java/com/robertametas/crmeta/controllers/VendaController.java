package com.robertametas.crmeta.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.robertametas.crmeta.entities.Venda;
import com.robertametas.crmeta.services.SmsService;
import com.robertametas.crmeta.services.VendaService;

@RestController
@RequestMapping(value ="/vendas")
public class VendaController {
	
	@Autowired
	private VendaService service;
	
	@Autowired
	private SmsService smsService;
	
	@GetMapping
	public Page<Venda> findVendas(
			@RequestParam(value= "minDate", defaultValue="") String minDate, 
			@RequestParam(value= "maxDate", defaultValue="") String maxDate, 
			Pageable pageable){
		return service.findVendas(minDate, maxDate, pageable);
		
	}
	
	@GetMapping("/{id}/notificacao")
	public void notifySms(@PathVariable Long id) {
		smsService.sendSms(id);
	}
	

}
