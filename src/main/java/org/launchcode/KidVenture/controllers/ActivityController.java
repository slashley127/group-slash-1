package org.launchcode.KidVenture.controllers;


import jakarta.validation.Valid;
import org.launchcode.KidVenture.models.Activity;
import org.launchcode.KidVenture.models.Month;
import org.launchcode.KidVenture.models.TypeOfActivity;
//import org.launchcode.KidVenture.models.data.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("kidVenture")
public class ActivityController {

   // @Autowired
   // private ActivityRepository activityRepository;

    @GetMapping("create")
    public String displayAddEmployerForm(Model model) {
        model.addAttribute("title", "Add Activity");
        model.addAttribute(new Activity());
        model.addAttribute("months", Month.values());
        model.addAttribute("typesOfActivities", TypeOfActivity.values());
        return "activities/create";
    }

    @PostMapping("create")
    public String processAddEmployerForm(@ModelAttribute @Valid Activity newActivity,
                                         Errors errors, Model model) {

        if (errors.hasErrors()) {
            return "activities/create";
        }
       // activityRepository.save(newActivity);
        return "redirect:../";
    }

    //NOTE: Adding an arraylist of activities just to test this while we don't have the database created yet.

    Activity soccer = new Activity("Sally", Month.JANUARY, 19, 2024, TypeOfActivity.SPORTSANDEXERCISE, 60)
    Activity marioKart = new Activity("Peter", Month.JANUARY, 20, 2024, TypeOfActivity.VIDEOGAME, 30);
    ArrayList<Activity> sampleActivities = new ArrayList<>();

    @GetMapping("delete")
    public String displayDeleteActivityForm(Model model) {


            model.addAttribute("title", "Delete Activity");
          //  model.addAttribute("Activities",activityRepository.findAll());
        //Adding a stand-in until we have the database connected
        model.addAttribute("Activities", sampleActivities);
            return "activities/delete";

    }
    @PostMapping("delete")
    public String processDeleteActivitiesForm(@RequestParam(required = false) int[] ids) {

        if (ids != null) {
            for (int id : ids) {
             //   activityRepository.remove(id);
            }
        }

        return "redirect:/activities";
    }



}

