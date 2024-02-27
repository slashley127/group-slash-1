package org.launchcode.KidVenture.controllers;


import jakarta.validation.Valid;
import org.launchcode.KidVenture.models.User;
import org.launchcode.KidVenture.models.data.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Optional;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id){
        Optional<User> userProfileOptional = userService.getUserById(id);
        return userProfileOptional.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("")
    public ResponseEntity<User> createUser(@Valid @RequestBody User user, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            return ResponseEntity.badRequest().build();
        }

        if(userService.existsByUsername(user.getUsername()) || userService.existsByEmail(user.getEmail())){
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        User createdUser = userService.createUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    @PostMapping("authenticate")
    public ResponseEntity<HashMap<String, Object>> authenticate(@Valid @RequestBody User user, BindingResult bindingResult){
        HashMap<String, Object> map = new HashMap<>();

        if(bindingResult.hasErrors()){
            map.put("status", "errors");
            return ResponseEntity.badRequest().body(map);
        }

        Optional<User> userData = userService.findByEmail(user.getEmail());

        if(userData.isPresent()){
            User userInfo = userData.get();
            if(userService.isMatchingPassword(user.getPwHash(), userInfo.getPwHash())){
                map.put("status", "success");
                map.put("id", userInfo.getId());
            } else {
                map.put("status", "failure");
            }
        } else {
            map.put("status", "failure");
        }
        return ResponseEntity.ok(map);
    }

}
