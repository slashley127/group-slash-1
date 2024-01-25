package org.launchcode.KidVenture.controllers;

import org.launchcode.KidVenture.models.User;
import org.launchcode.KidVenture.models.data.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {
    private UserRepository userRepository;
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GetMapping("{id")
    public User getUser(@PathVariable Long id){
        return userRepository.findById(id).orElseThrow(RuntimeException::new);
    }

}
