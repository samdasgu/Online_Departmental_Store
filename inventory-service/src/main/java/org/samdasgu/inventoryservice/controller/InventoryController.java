package org.samdasgu.inventoryservice.controller;

import java.util.List;

import org.samdasgu.inventoryservice.model.InventoryDTO;
import org.samdasgu.inventoryservice.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/online-department-store")
@CrossOrigin
public class InventoryController {
	
	@Autowired
	private InventoryService inventoryService;
	
	@GetMapping("/inventory/{inventoryCode}")
	public InventoryDTO getInventoryByCode(@PathVariable("inventoryCode") String invCode) {
		return inventoryService.getInventoryByCode(invCode);
	}
	
	@GetMapping("/inventory")
	public List<InventoryDTO> searchInventory(@RequestParam("invName") String invNameSearchString) {
		return inventoryService.searchInventoryByParam(invNameSearchString);
	}
	
	@PostMapping("/inventory")
	public ResponseEntity<String> saveInventory(@RequestBody InventoryDTO inventoryDTO) {
		return new ResponseEntity<String>(inventoryService.saveInventory(inventoryDTO), HttpStatus.CREATED);
	}

}
