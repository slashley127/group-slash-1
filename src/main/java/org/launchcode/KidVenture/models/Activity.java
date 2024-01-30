package org.launchcode.KidVenture.models;

import jakarta.validation.constraints.*;
import jakarta.persistence.*;


@Entity
public class Activity extends AbstractEntity {

    //TO DO: change child from String to Child type once we add the child profiles.



    private String child;



    private int month;


    private int day;


    private int year;


    private String typeOfActivity;



    private double durationOfActivity;
    private boolean isEnrichmentActivity;

    private boolean isScreenTime;

    public String mood;

    public Activity() {
    }

    public Activity(String child, int month, int day, int year, String typeOfActivity, double durationOfActivity, String mood, boolean isEnrichmentActivity, boolean isScreenTime ) {
        super();
        this.child = child;
        this.month = month;
        this.day = day;
        this.year = year;
        this.typeOfActivity = typeOfActivity;
        this.durationOfActivity = durationOfActivity;
        this.mood = mood;
        this.isEnrichmentActivity = isEnrichmentActivity;
        this.isScreenTime = isScreenTime;
    }

    public boolean getIsEnrichmentActivity() {
        return isEnrichmentActivity;
    }

    public void setEnrichmentActivity(boolean isEnrichmentActivity) {
        this.isEnrichmentActivity = isEnrichmentActivity;
    }

    public boolean getIsScreenTime() {
        return isScreenTime;
    }

    public void setIsScreenTime(boolean isScreenTime) {
        this.isScreenTime = isScreenTime;
    }

    public String getChild() {
        return child;
    }

    public void setChild(String child) {
        this.child = child;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getTypeOfActivity() {
        return typeOfActivity;
    }

    public void setTypeOfActivity(String typeOfActivity) {
        this.typeOfActivity = typeOfActivity;
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
}
