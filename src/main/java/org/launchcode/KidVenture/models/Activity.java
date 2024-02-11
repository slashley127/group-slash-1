package org.launchcode.KidVenture.models;

import jakarta.validation.constraints.*;
import jakarta.persistence.*;

import java.util.Date;


@Entity
public class Activity extends AbstractEntity {

    //TO DO: change child from String to Child type once we add the child profiles.

    private String nameOfActivity;
    private String child;
    private String date;
    private double durationOfActivity;
    private String typeOfActivity;
    public String mood;

    public Activity() {
    }
    public Activity(String nameOfActivity, String child, String date, double durationOfActivity, String typeOfActivity, String mood) {
        super();
        this.nameOfActivity = nameOfActivity;
        this.child = child;
        this.date = date;
        this.durationOfActivity = durationOfActivity;
        this.typeOfActivity = typeOfActivity;
        this.mood = mood;
    }

    public String getNameOfActivity() {
        return nameOfActivity;
    }

    public void setNameOfActivity(String nameOfActivity) {
        this.nameOfActivity = nameOfActivity;
    }

    public String getTypeOfActivity() {
        return typeOfActivity;
    }

    public void setTypeOfActivity(String typeOfActivity) {
        this.typeOfActivity = typeOfActivity;
    }

    public String getChild() {
        return child;
    }

    public void setChild(String child) {
        this.child = child;
    }


    public double getDurationOfActivity() {
        return durationOfActivity;
    }

    public void setDurationOfActivity(double durationOfActivity) {
        this.durationOfActivity = durationOfActivity;
    }

    public String getMood() {
        return mood;
    }

    public void setMood(String mood) {
        this.mood = mood;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

}
