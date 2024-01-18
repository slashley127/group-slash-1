package org.launchcode.KidVenture.controllers;


import jakarta.validation.Valid;
import org.launchcode.KidVenture.models.Activity;
import org.launchcode.KidVenture.models.TypeOfActivity;
import org.launchcode.KidVenture.models.data.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("kidVenture")
public class ActivityController {

    @Autowired
    private ActivityRepository activityRepository;

    @GetMapping("add")
    public String displayAddEmployerForm(Model model) {
        model.addAttribute("title", "Add Activity");
        model.addAttribute(new Activity());
        model.addAttribute("types", TypeOfActivity.values());
        return "activities/create";
    }

    @PostMapping("add")
    public String processAddEmployerForm(@ModelAttribute @Valid Activity newActivity,
                                         Errors errors, Model model) {

        if (errors.hasErrors()) {
            return "activities/create";
        }
        activityRepository.save(newActivity);
        return "redirect:../";
    }

}

