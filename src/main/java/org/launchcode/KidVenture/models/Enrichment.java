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

    public Enrichment() {
    }

    public Enrichment(int id, String activity, String benefits) {
        this.id = id;
        this.activity = activity;
        this.benefits = benefits;
    }

    public int getId() {
        return id;
    }

    public String getActivity() {
        return activity;
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
