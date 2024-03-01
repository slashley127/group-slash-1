package org.launchcode.KidVenture.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class Enrichment {

    @Id
    private int id;
    private String activity;
    private String benefits;
    private String indoor;
    private String toddler;
    private String bigKid;
    private String teenager;

    public Enrichment() {
    }

    public Enrichment(int id, String activity, String benefits, String indoor, String toddler, String bigKid, String teenager) {
        this.id = id;
        this.activity = activity;
        this.benefits = benefits;
        this.indoor = indoor;
        this.toddler = toddler;
        this.bigKid = bigKid;
        this.teenager = teenager;
    }

    public int getId() {
        return id;
    }

    public String getActivity() {
        return activity;
    }

    public String isIndoor() {
        return indoor;
    }

    public String isToddler() {
        return toddler;
    }

    public String isBigKid() {
        return bigKid;
    }

    public String isTeenager() {
        return teenager;
    }

    public String getBenefits() {
        return benefits;
    }

    @Override
    public String toString() {
        return activity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Enrichment that = (Enrichment) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
