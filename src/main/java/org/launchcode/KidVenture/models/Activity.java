package org.launchcode.KidVenture.models;

import jakarta.validation.constraints.*;
import jakarta.persistence.*;


@Entity
public class Activity extends AbstractEntity {

    //TO DO: change child from String to Child type once we add the child profiles.

    @NotBlank
    @Size(max= 50, message= "Name must be fewer than 50 characters")
    private String child;

    @NotBlank
    private Month month;

    @Positive
    @NotBlank
    @Max(value =31, message="Must be a valid date")
    @Min(value = 1, message = "Must be a valid date")
    private int day;

    @Positive
    @NotBlank
    @Min(value= 2024, message= "Must be a year 2024 or later")
    @Max(value=2200, message="The year you've entered is too far in the future")
    private int year;

    @NotBlank
    private TypeOfActivity typeOfActivity;

    @NotBlank
    @Positive
    private double durationOfActivity;

    public Activity() {
    }

    public Activity(String child, Month month, int day, int year, TypeOfActivity typeOfActivity, double durationOfActivity) {
        super();
        this.child = child;
        this.month = month;
        this.day = day;
        this.year = year;
        this.typeOfActivity = typeOfActivity;
        this.durationOfActivity = durationOfActivity;
    }



    public String getChild() {
        return child;
    }

    public void setChild(String child) {
        this.child = child;
    }

    public Month getMonth() {
        return month;
    }

    public void setMonth(Month month) {
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
