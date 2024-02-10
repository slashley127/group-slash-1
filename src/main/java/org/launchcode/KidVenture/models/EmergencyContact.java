package org.launchcode.KidVenture.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "emergency-contact")
public class EmergencyContact {

    //Many-to-one relationship with child profile
//    @ManyToOne
//    private Child child;

    //IDs
    @Id
    @GeneratedValue
    private int id;

    //required variables
//    @NotBlank
    private String firstName;
    //    @NotBlank
    private String lastName;
    //    @NotBlank
//    @Size(min = 10, max = 10, message = "Invalid phone number.")
    private String phoneNumber;
    //    @NotBlank
    private String relationship;

    //optional variables
    private String workplace;

    //    @Email(message = "Invalid email.")
    private String email;
    private int age;

    private String address;
    private String city;
    private String state; //added enum for this

    //    @Size(min = 5, max = 5, message = "Zip code must be 5 digits.")
    private int zip;
    private String notes;


    // constructors

    public EmergencyContact () {

    }

    public EmergencyContact( String firstName, String lastName, String phoneNumber, String relationship, String workplace, String email, int age, String address, String city, String state, int zip, String notes) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.relationship = relationship;
        this.workplace = workplace;
        this.email = email;
        this.age = age;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.notes = notes;
    }

    // getters and setters

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getRelationship() {
        return relationship;
    }

    public void setRelationship(String relationship) {
        this.relationship = relationship;
    }

    public String getWorkplace() {
        return workplace;
    }

    public void setWorkplace(String workplace) {
        this.workplace = workplace;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }


    public int getId() {
        return id;
    }


}
