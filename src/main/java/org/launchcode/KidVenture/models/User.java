package org.launchcode.KidVenture.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class User {

    @Id
    @GeneratedValue
    private int id;

    @NotNull(message = "Username is required.")
    @Size(min = 1, message = "Username is required")
    private String username;

    @NotNull(message = "Email is required")
    @Size(min = 1, message = "Email is required")
    @Email(message = "Email must be correctly formatted")
    private String email;

    @NotNull(message = "Password is required")
    @Size(min = 5, message = "Password must be at least 5 characters.")
    private String password;

    public User(){

    }

    public User(String username, String email, String password){
        this();
        this.username = username;
        this.email = email;
        this.password = password;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
