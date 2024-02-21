package org.launchcode.KidVenture.controllers;




import org.apache.coyote.Response;
import org.launchcode.KidVenture.models.Child;
import org.launchcode.KidVenture.models.data.ChildRepository;
import org.launchcode.KidVenture.models.data.ChildService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/child")
public class ChildController {


    @Autowired
    private ChildService childService;


    @GetMapping
    public List<Child> getAllChildProfiles(){
        return childService.getAllChild();
    }


    @GetMapping("/{id}")
    public ResponseEntity<Child> getChildById(@PathVariable("id") Long id){
        Optional<Child> childProfileOptional = childService.getChildProfileById(id);
        return childProfileOptional.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Child> createChild(@RequestBody Child child){
        Child createdChild = childService.createChild(child);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdChild);
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> updateChild(@PathVariable("id") Long id, @RequestBody Child updatedChild){
        Optional<Child> updatedChildProfileOptional = childService.updateChild(id, updatedChild);
        return updatedChildProfileOptional.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


}