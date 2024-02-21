package org.launchcode.KidVenture.controllers;

import org.launchcode.KidVenture.models.User;
import org.launchcode.KidVenture.models.data.UserRepository;
import org.launchcode.KidVenture.models.data.UserService;
import org.launchcode.KidVenture.models.subModels.Login;
import org.launchcode.KidVenture.models.subModels.SignUp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collections;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/signup")
    public String getSignUpURI(){
        return "http://localhost:8080/user/signup";
    }

    @GetMapping("/login")
    public String getLoginURI(){
        return "http://localhost:8080/user/login";
    }

    @PostMapping("/signup")
    public ResponseEntity<User> signUp(@RequestBody SignUp signUp){
        Optional<User> existingUser = userService.findByUsername(signUp.getUsername());
        if(existingUser.isPresent()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username is already taken");
        }
        User user = new User();
        user.setUsername(signUp.getUsername());
        user.setEmail(signUp.getEmail());
        user.setPassword(signUp.getPassword());

        User savedUser = userService.save(user);

        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }
//
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody Login login){
//        boolean loggedIn = userService.login(login);
//        if(loggedIn){
//            return ResponseEntity.ok().build();
//        } else{
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//        }
//    }
//
//    @GetMapping("/profile")
//    public ResponseEntity<SignUp> getUserProfile(Authentication authentication){
//        SignUp signUp = userService.getUserProfile(authentication.getName());
//        return ResponseEntity.ok(signUp);
//    }
//
//    @PutMapping("/profile")
//    public ResponseEntity<?> updateUserProfile(Authentication authentication, @RequestBody SignUp signUp){
//        userService.updateUserProfile(authentication.getName(), signUp);
//        return ResponseEntity.ok().build();
//    }


//
//
//    private static final String userSessionKey = "user";
//
//    public User getUserFromSession(HttpSession session) {
//        Integer userId = (Integer) session.getAttribute(userSessionKey);
//        if (userId == null) {
//            return null;
//        }
//        Optional<User> user = userRepository.findById(userId);
//
//        if (user.isEmpty()) {
//            return null;
//        }
//        return user.get();
//    }
//
//    private static void setUserInSession(HttpSession session, User user){
//        session.setAttribute(userSessionKey, user.getId());
//    }
//
//
//    @GetMapping("/{signUp}")
//    public String displaySignUp(Model model){
//        model.addAttribute(new SignUp());
//        model.addAttribute("title", "Sign Up");
//        return "register";
//    }
//
////    @PostMapping
////    public ResponseEntity createUser(@RequestBody SignUp signUp) throws URISyntaxException {
////        return ResponseEntity.created(new URI("/user/")).build();
////    }
//
//
//    @PostMapping("/{signUp}")
//    public String processSignUp(@ModelAttribute @Valid @RequestBody SignUp signUp, Errors errors,
//                                HttpServletRequest request, Model model) {
//        if(errors.hasErrors()){
//            model.addAttribute("title", "SignUp");
//            return "signUp";
//        }
//        User existingUser = userRepository.findByUsername(signUp.getUsername());
//
//        if (existingUser != null){
//            errors.rejectValue("username", "username.alreadyexists", "A user with that username already exists.");
//            model.addAttribute("title", "SignUp");
//            return "signUp";
//        }
//        String password = signUp.getPassword();
//        String verifyPassword = signUp.getVerifyPassword();
//        if (!password.equals(verifyPassword)) {
//            errors.rejectValue("password", "passwords.mismatch", "Passwords do not match.");
//            model.addAttribute("title", "SignUp");
//            return "signUp";
//        }
//
//        User newUser = new User(signUp.getUsername(), signUp.getPassword(), signUp.getEmail());
//        userRepository.save(newUser);
//        setUserInSession(request.getSession(), newUser);
//
//        return "redirect";
//    }

//
//
//    @GetMapping("/login")
//    public String displayLogin(Model model){
//        model.addAttribute(new Login());
//        model.addAttribute("title", "Log In");
//        return "login";
//    }
//
//
//    @PostMapping("/login")
//    public String processLogin(@ModelAttribute @Valid Login login, Errors errors, HttpServletRequest request, Model model){
//        if(errors.hasErrors()){
//            model.addAttribute("title", "Log In");
//            return "login";
//        }
//        User theUser = userRepository.findByUsername(login.getUsername());
//
//        if(theUser == null) {
//            errors.rejectValue("username", "user.invalid", "The username does not exist");
//            model.addAttribute("title", "Log In");
//            return "login";
//        }
//
//        String password = login.getPassword();
//
//        if(!theUser.isMatchingPassword(password)) {
//            errors.rejectValue("password", "password.invalid", "Invalid password");
//            model.addAttribute("title", "Log In");
//            return "login";
//        }
//        setUserInSession(request.getSession(), theUser);
//        return "redirect";
//    }
//
//
//    @GetMapping("/logout")
//    public String logout(HttpServletRequest request){
//        request.getSession().invalidate();
//        return "redirect:/login";
//    }
}
