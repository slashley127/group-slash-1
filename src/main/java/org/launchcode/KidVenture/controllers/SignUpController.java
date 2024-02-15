package org.launchcode.KidVenture.controllers;

import org.launchcode.KidVenture.models.subModels.SignUp;
import org.launchcode.KidVenture.models.data.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/newUser")
public class SignUpController {





//
//    private final UserRepository userRepository;
//
//    public SignUpController(UserRepository signUpRepository){
//        this.signUpRepository = signUpRepository;
//    }
//
//    @GetMapping
//    public List<SignUp> getUsers() {
//        return signUpRepository.findAll();
//    }
//
//    @GetMapping("/{id}")
//    public SignUp getUser(@PathVariable int id) {
//        return signUpRepository.findById(id).orElseThrow(RuntimeException::new);
//    }
//
//    @PostMapping
//    public ResponseEntity createUser(@RequestBody SignUp signUp) throws URISyntaxException {
//        SignUp savedSignUp = signUpRepository.save(signUp);
//        return ResponseEntity.created(new URI("/user/" + savedSignUp.getId())).body(savedSignUp);
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity updateUser(@PathVariable int id, @RequestBody SignUp signUp) {
//        SignUp currentSignUp = signUpRepository.findById(id).orElseThrow(RuntimeException::new);
//        currentSignUp.setUsername(signUp.getUsername());
//        currentSignUp.setEmail(signUp.getEmail());
//        currentSignUp.setPassword(signUp.getPassword());
//        currentSignUp.setVerifyPassword(signUp.getVerifyPassword());
//        currentSignUp = signUpRepository.save(signUp);
//
//        return ResponseEntity.ok(currentSignUp);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity deleteUser(@PathVariable int id){
//        signUpRepository.deleteById(id);
//        return ResponseEntity.ok().build();
//    }

}
