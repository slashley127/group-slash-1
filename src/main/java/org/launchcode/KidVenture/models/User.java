package org.launchcode.KidVenture.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Entity
public class User {

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String username;


    @Email
    private String email;


    private String pwHash;


    public User(){
    }


    public User(String username, String email, String password){
        super();
        this.username = username;
        this.email = email;
        this.pwHash = encoder.encode(password);
    }


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
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


    public boolean isMatchingPassword(String password){
        return encoder.matches(password, pwHash);
    }

    public String getPwHash() {
        return pwHash;
    }


    public void setPwHash(String pwHash) {
        this.pwHash = pwHash;
    }
}
