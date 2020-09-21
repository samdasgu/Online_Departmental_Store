package org.samdasgu.inventoryservice.model;

public class InventoryDTO {
	
	private String invCode;
	private String invName;
	private int invQty;
	private double unitPrice;
	
	public InventoryDTO() {
		
	}
	
	public InventoryDTO(String invCode, String invName, int invQty, double unitPrice) {
		super();
		this.invCode = invCode;
		this.invName = invName;
		this.invQty = invQty;
		this.unitPrice = unitPrice;
	}

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

	public int getInvQty() {
		return invQty;
	}

	public void setInvQty(int invQty) {
		this.invQty = invQty;
	}

	public double getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}
	
	
	
	

}
