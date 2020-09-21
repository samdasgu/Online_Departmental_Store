package org.samdasgu.inventoryservice.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.samdasgu.inventoryservice.entities.Inventory;
import org.samdasgu.inventoryservice.model.InventoryDTO;
import org.samdasgu.inventoryservice.repository.InventoryRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InventoryService {

	@Autowired
	private InventoryRespository inventoryRepository;

	public InventoryDTO getInventoryByCode(String invCode) {
		Inventory inventory = inventoryRepository.findById(invCode).orElse(null);
		return inventory != null ? 
				new InventoryDTO(inventory.getInvCode(), inventory.getInvName(), inventory.getInvQty(), inventory.getUnitPrice()) :
					new InventoryDTO();
	}

	public List<InventoryDTO> searchInventoryByParam(String... searchParams) {
		String invNameSearchString = searchParams[0];
		return StreamSupport.stream(inventoryRepository.findAll().spliterator(), false)
				.filter(inventory -> inventory.getInvName().toLowerCase().indexOf(invNameSearchString.toLowerCase()) >= 0)
				.map(inventory -> new InventoryDTO(inventory.getInvCode(),inventory.getInvName(), inventory.getInvQty(), inventory.getUnitPrice()))
				.collect(Collectors.toList());
	}

	public String saveInventory(InventoryDTO inventoryDTO) {
		Inventory inventory = inventoryRepository.findById(inventoryDTO.getInvCode()).orElse(new Inventory());
		inventory.setInvCode(inventoryDTO.getInvCode());
		inventory.setInvName(inventoryDTO.getInvName());
		inventory.setInvQty(inventoryDTO.getInvQty());
		inventory.setUnitPrice(inventoryDTO.getUnitPrice());
		inventoryRepository.save(inventory);
		return inventory.getInvCode();
	}
	
	
	
}
