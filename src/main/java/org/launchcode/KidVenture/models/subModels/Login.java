package org.launchcode.KidVenture.models.subModels;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class Login {

    @NotNull
    @NotBlank
    private String username;

    @NotNull
    @NotBlank
    @Size(min = 5, max = 30, message = "Password must be between 5 and 30 characters.")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
