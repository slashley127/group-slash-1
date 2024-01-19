package org.launchcode.KidVenture.models;

public enum Month {
    JANUARY("January"),
    FEBRUARY("February"),
    MARCH("March"),
    APRIL("April"),
    MAY("May"),
    JUNE("June"),
    JULY("July"),
    AUGUST("August"),
    OCTOBER("October"),
    NOVEMBER("November"),
    DECEMBER("December");

    private final String displayName;

    Month(String displayName) {
        this.displayName = displayName;
    }
    public String getDisplayName() {
        return this.displayName;
}
}
