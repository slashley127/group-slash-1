package org.launchcode.KidVenture.models;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;


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

    @Lob
    private byte[] profilePicture;




    public Child(){
    }


    public Child( String childName, LocalDate dateOfBirth, byte[] profilePicture){
        super();
        this.childName = childName;
        this.dateOfBirth = dateOfBirth;
        this.profilePicture = profilePicture;
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


    public byte[] getProfilePicture(){
        return profilePicture;
    }

    public void setProfilePicture(byte[] profilePicture){
        this.profilePicture = profilePicture;
    }


//    @Override
//    public String toString(){
//        return childName;
//    }




//    @Override
//    public boolean equals(Object o){
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        Child that = (Child) o;
//        return id == that.id;
//    }


//    @Override
//    public int hashCode(){
//        return Objects.hash(id);
//    }
}
