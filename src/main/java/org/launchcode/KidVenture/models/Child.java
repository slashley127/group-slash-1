package org.launchcode.KidVenture.models;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


import java.time.LocalDate;
import java.util.Date;
import java.util.Objects;


@Entity
public class Child {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String childName;

    @JsonFormat(pattern = "MM/dd/yyyy")
    private LocalDate dateOfBirth;

    private String profilePictureUrl;




    public Child(){
    }


    public Child( String childName, LocalDate dateOfBirth, String profilePictureUrl){
        super();
        this.childName = childName;
        this.dateOfBirth = dateOfBirth;
        this.profilePictureUrl = profilePictureUrl;
    }


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }
    public String getChildName() {
        return childName;
    }


    public void setChildName(String childName) {
        this.childName = childName;
    }


    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }


    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }


    public String getProfilePictureUrl(){
        return profilePictureUrl;
    }

    public void setProfilePictureUrl(String profilePictureUrl){
        this.profilePictureUrl = profilePictureUrl;
    }


    @Override
    public String toString(){
        return childName;
    }




    @Override
    public boolean equals(Object o){
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Child that = (Child) o;
        return id == that.id;
    }


    @Override
    public int hashCode(){
        return Objects.hash(id);
    }
}
