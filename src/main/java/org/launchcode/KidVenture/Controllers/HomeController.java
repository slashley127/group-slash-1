package org.launchcode.KidVenture.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping("/")
    public String index(Model model) {

        // TODO: Replace true with conditional when data is ready
        model.addAttribute("showReachedGoal", true);

        return "index";
    }

}
