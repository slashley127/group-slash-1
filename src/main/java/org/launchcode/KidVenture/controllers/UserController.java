package org.launchcode.KidVenture.controllers;

import org.launchcode.KidVenture.models.data.UserRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    private UserRepository userRepository;
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }


}
