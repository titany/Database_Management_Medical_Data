package com.mga.beans;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "OtherDataList", propOrder = { "id", "filename", "date" })
@XmlRootElement(name = "other_data_list")
public class OtherDataList {

	@XmlElement(name = "id", required = true)
	private Integer id;

	@XmlElement(name = "filename", required = true)
	private String filename;

	@XmlElement(name = "date", required = true)
	private String date;

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
		// System.out.println("inside set date"+ date);
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

}
