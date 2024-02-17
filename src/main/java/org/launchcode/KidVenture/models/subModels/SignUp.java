package org.launchcode.KidVenture.models.subModels;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.Objects;

public class SignUp{

    @NotNull
    @NotBlank
    @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters.")
    private String username;

    @NotNull
    @NotBlank
    @Size(min = 3, message = "Email must be at least 3 characters long.")
    private String email;

    @NotNull
    @NotBlank
    @Size(min = 5, max = 30, message = "Password must be between 5 and 30 characters.")
    private String password;

    private String verifyPassword;

    public SignUp(){
    }

    public SignUp(String username, String email, String password, String verifyPassword){
        super();
        this.username = username;
        this.email = email;
        this.password = password;
        this.verifyPassword = verifyPassword;
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

    public String getVerifyPassword() {
        return verifyPassword;
    }

    public void setVerifyPassword(String verifyPassword) {
        this.verifyPassword = verifyPassword;
    }


}

