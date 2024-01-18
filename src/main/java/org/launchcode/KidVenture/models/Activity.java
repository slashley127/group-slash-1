package org.launchcode.KidVenture.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Date;
import java.util.Objects;

public class Activity extends AbstractEntity {

    //TO DO: change child from String to Child type once we add the child profiles.
    private String child;
    private Date date;

    private TypeOfActivity typeOfActivity;

    private double durationOfActivity;

    public Activity() {
    }

    public Activity(String child, Date date, TypeOfActivity typeOfActivity, double durationOfActivity) {
        this.child = child;
        this.date = date;
        this.typeOfActivity = typeOfActivity;
        this.durationOfActivity = durationOfActivity;
    }



    public String getChild() {
        return child;
    }

    public void setChild(String child) {
        this.child = child;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public TypeOfActivity getTypeOfActivity() {
        return typeOfActivity;
    }

    public void setTypeOfActivity(TypeOfActivity typeOfActivity) {
        this.typeOfActivity = typeOfActivity;
    }

    public double getDurationOfActivity() {
        return durationOfActivity;
    }

    public void setDurationOfActivity(double durationOfActivity) {
        this.durationOfActivity = durationOfActivity;
    }


}
