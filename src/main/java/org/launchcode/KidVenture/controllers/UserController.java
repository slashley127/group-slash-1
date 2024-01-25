package org.launchcode.KidVenture.controllers;

import jakarta.validation.Valid;
import org.launchcode.KidVenture.models.User;
import org.launchcode.KidVenture.models.data.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping("user")
public class UserController {
    private UserRepository userRepository;
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable int id){
        return userRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createUser(@RequestBody User user) throws URISyntaxException{
        User savedUser = userRepository.save(user);
        return ResponseEntity.created(new URI("/users/" + savedUser.getId())).body(savedUser);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateUser(@PathVariable int id, @RequestBody User user){
        User currectUser = userRepository.findById(id).orElseThrow(RuntimeException::new);
        currectUser.setUsername(user.getUsername());
        currectUser.setEmail(user.getEmail());
        currectUser.setPassword(user.getPassword());
        currectUser = userRepository.save(user);
        return ResponseEntity.ok(currectUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable int id){
        userRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
