package org.launchcode.KidVenture.models;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Entity
public class Child extends AbstractEntity{

    @OneToMany(mappedBy = "child")
    private List<EmergencyContact> emergencyContacts = new ArrayList<>();

    private String childName;
    @JsonFormat(pattern="MM/dd/yyyy")
    private Date dateOfBirth;

    public Child(){
    }

    public Child(String childName, Date dateOfBirth){
        super();
        this.childName = childName;
        this.dateOfBirth = dateOfBirth;
    }

    public String getChildName() {
        return childName;
    }

    public void setChildName(String childName) {
        this.childName = childName;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    @Override
    public String toString() { return childName; }

    public List<EmergencyContact> getEmergencyContacts() {
        return emergencyContacts;
    }

    public void addEmergencyContact(EmergencyContact emergencyContact) {
        this.emergencyContacts = emergencyContacts;
    }
}