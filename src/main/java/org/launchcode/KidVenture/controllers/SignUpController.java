package org.launchcode.KidVenture.controllers;

import org.launchcode.KidVenture.models.SignIn;
import org.launchcode.KidVenture.models.data.SignInRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/newUser")
public class SignInController {

    private final SignInRepository signInRepository;

    public SignInController(SignInRepository signInRepository){
        this.signInRepository = signInRepository;
    }

    @GetMapping
    public List<SignIn> getUsers() {
        return signInRepository.findAll();
    }

    @GetMapping("/{id}")
    public SignIn getUser(@PathVariable int id) {
        return signInRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createUser(@RequestBody SignIn signIn) throws URISyntaxException {
        SignIn savedSignIn = signInRepository.save(signIn);
        return ResponseEntity.created(new URI("/user/" + savedSignIn.getId())).body(savedSignIn);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateUser(@PathVariable int id, @RequestBody SignIn signIn) {
        SignIn currentSignIn = signInRepository.findById(id).orElseThrow(RuntimeException::new);
        currentSignIn.setUsername(signIn.getUsername());
        currentSignIn.setEmail(signIn.getEmail());
        currentSignIn = signInRepository.save(signIn);

        return ResponseEntity.ok(currentSignIn);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable int id){
        signInRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
