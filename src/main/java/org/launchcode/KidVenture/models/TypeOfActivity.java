package org.launchcode.KidVenture.models;

public enum TypeOfActivity {
    SPORTSANDEXERCISE("Sports & Exercise", false),
    ARTSANDCRAFTS("Arts & Crafts", false),
    VIDEOGAME("Video Games", true),
    TV("Television", true),
    INTERNET("Internet", true),
    MUSIC("Music",false),
    PUZZLESANDBOARDGAMES("Puzzles & Board Games", false),
    IMAGINARYPLAY("Imaginary Play", false),
    TOYS("Toys", false),
    READING("Reading", false),
    OTHER("Other", false);

    private final String displayName;
    private final boolean screenTime;

    TypeOfActivity(String displayName, boolean screenTime) {
        this.displayName = displayName;
        this.screenTime = screenTime;
    }

    public String getDisplayName () {
        return this.displayName;
    }

    public boolean isScreenTime() {
        return this.screenTime;
    }


}
