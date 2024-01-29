package org.launchcode.KidVenture.controllers;

import jakarta.validation.Valid;
import org.launchcode.KidVenture.models.User;
import org.launchcode.KidVenture.models.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping("newUser")
public class UserController {
    @Autowired
    private UserRepository userRepository;


    @GetMapping("/user")
    public User getUser(@PathVariable int id) {
        return userRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createUser(@Valid @RequestBody User user) throws URISyntaxException {
        User savedUser = userRepository.save(user);
        return ResponseEntity.created(new URI("/user/" + savedUser.getId())).body(savedUser);
    }

    @PostMapping("/user")
    public ResponseEntity updateUser(@PathVariable int id, @RequestBody User user) {
        User currentUser = userRepository.findById(id).orElseThrow(RuntimeException::new);
        currentUser.setUsername(user.getUsername());
        currentUser.setEmail(user.getEmail());
        return ResponseEntity.ok(currentUser);
    }

    @DeleteMapping("/user")
    public ResponseEntity deleteUser(@PathVariable int id){
        userRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
