
package org.launchcode.KidVenture.models;


import jakarta.persistence.*;


import java.util.ArrayList;
import java.util.List;


@Entity
public class Child extends AbstractEntity {

    private String childName;

    @OneToMany(mappedBy = "child")
    private List<Activity> activities = new ArrayList<>();

    private String birthday;

    public Child(){
    }
    public Child(String childName, String birthday, List<Activity> activities){
        super();
        this.childName = childName;
        this.birthday = birthday;
        this.activities= activities;
    }

    public String getChildName() {
        return childName;
    }


    public void setChildName(String childName) {
        this.childName = childName;
    }


    public String getBirthday() {
        return birthday;
    }


    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public void addActivity(Activity activity) {
        activities.add(activity);
    }

    public List<Activity> getActivities() {
        return activities;
    }

}
