package org.samdasgu.inventoryservice.repository;

import org.samdasgu.inventoryservice.entities.Inventory;
import org.springframework.data.repository.CrudRepository;

public interface InventoryRespository extends CrudRepository<Inventory, String>{

}
