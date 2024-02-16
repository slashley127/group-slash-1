package org.launchcode.KidVenture.controllers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.launchcode.KidVenture.models.User;
import org.launchcode.KidVenture.models.data.UserRepository;
import org.launchcode.KidVenture.models.subModels.Login;
import org.launchcode.KidVenture.models.subModels.SignUp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class AuthenticationController {
    @Autowired
    UserRepository userRepository;

    private static final String userSessionKey = "user";

    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }
        Optional<User> user = userRepository.findById(userId);

        if (user.isEmpty()) {
            return null;
        }
        return user.get();
    }

    private static void setUserInSession(HttpSession session, User user){
        session.setAttribute(userSessionKey, user.getId());
    }

    @GetMapping("/signUp")
    public String displaySignUp(Model model){
        model.addAttribute(new SignUp());
        model.addAttribute("title", "SignUp");
        return "signup";
    }

    @PostMapping("/signUp")
    public String processSignUp(@ModelAttribute @Valid SignUp signUp, Errors errors,
                                HttpServletRequest request, Model model) {
        if(errors.hasErrors()){
            model.addAttribute("title", "SignUp");
            return "signup";
        }
        User existingUser = userRepository.findByUsername(signUp.getUsername());

        if (existingUser != null){
            errors.rejectValue("username", "username.alreadyexists", "A user with that username already exists.");
            model.addAttribute("title", "SignUp");
            return "signup";
        }
        String password = signUp.getPassword();
        String verifyPassword = signUp.getVerifyPassword();
        if (!password.equals(verifyPassword)) {
            errors.rejectValue("password", "passwords.mismatch", "Passwords do not match.");
            model.addAttribute("title", "SignUp");
            return "signup";
        }

        User newUser = new User(signUp.getUsername(), signUp.getPassword());
        userRepository.save(newUser);
        setUserInSession(request.getSession(), newUser);

        return "redirect";
    }


    @GetMapping("/login")
    public String displayLogin(Model model){
        model.addAttribute(new Login());
        model.addAttribute("title", "Login");
        return "login";
    }


    @PostMapping("/login")
    public String processLogin(@ModelAttribute @Valid Login login, Errors errors, HttpServletRequest request, Model model){
        if(errors.hasErrors()){
            model.addAttribute("title", "Login");
            return "login";
        }
        User theUser = userRepository.findByUsername(login.getUsername());

        if(theUser == null) {
            errors.rejectValue("username", "user.invalid", "The username does not exist");
            model.addAttribute("title", "Login");
            return "login";
        }

        String password = login.getPassword();

        if(!theUser.isMatchingPassword(password)) {
            errors.rejectValue("password", "password.invalid", "Invalid password");
            model.addAttribute("title", "Login");
            return "login";
        }
        setUserInSession(request.getSession(), theUser);
        return "redirect";
    }


    @GetMapping("/logout")
    public String logout(HttpServletRequest request){
        request.getSession().invalidate();
        return "redirect:/login";
    }
}
