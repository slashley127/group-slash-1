package org.launchcode.KidVenture.models;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


import java.util.Date;
import java.util.Objects;


@Entity
public class Child {


    @Id
    @GeneratedValue
    private int id;


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


    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id = id;
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
