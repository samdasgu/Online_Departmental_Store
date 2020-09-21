package org.samdasgu.inventoryservice.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "INVENTORY")
public class Inventory {
	
	@Id
	@Column(name="INV_CODE")
	private String invCode;
	
	@Column(name="INV_NAME")
	private String invName;
	
	@Column(name="INV_QTY")
	private Integer invQty;
	
	@Column(name="UNIT_PRICE")
	private Double unitPrice;
	
	
	public String getInvCode() {
		return invCode;
	}
	public void setInvCode(String invCode) {
		this.invCode = invCode;
	}
	public String getInvName() {
		return invName;
	}
	public void setInvName(String invName) {
		this.invName = invName;
	}
	public Integer getInvQty() {
		return invQty;
	}
	public void setInvQty(Integer invQty) {
		this.invQty = invQty;
	}
	public Double getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(Double unitPrice) {
		this.unitPrice = unitPrice;
	}
	
	

}
