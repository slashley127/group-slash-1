
package org.launchcode.KidVenture.controllers;
import org.apache.coyote.Response;
import org.launchcode.KidVenture.models.Child;
import org.launchcode.KidVenture.models.data.ChildRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/child")
public class ChildController {


    private final ChildRepository childRepository;


    public ChildController(ChildRepository childRepository){
        this.childRepository = childRepository;
    }


    @GetMapping
    public List<Child> getChildren(){
        return childRepository.findAll();
    }


    @GetMapping("/{id}")
    public Child getChild(@PathVariable int id){
        return childRepository.findById(id).orElseThrow(RuntimeException::new);
    }


    @PostMapping
    public ResponseEntity createChild(@RequestBody Child child) throws URISyntaxException {
        Child savedChild = childRepository.save(child);
        return ResponseEntity.created(new URI("/child/" + savedChild.getId())).body(savedChild);
    }


    @PutMapping("/{id}")
    public ResponseEntity updateChild(@PathVariable int id, @RequestBody Child child){
        Child currentChild = childRepository.findById(id).orElseThrow(RuntimeException::new);
        currentChild.setChildName(child.getChildName());
        currentChild.setBirthday(child.getBirthday());
        currentChild = childRepository.save(child);
        return ResponseEntity.ok(currentChild);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity deleteChild(@PathVariable int id){
        childRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}

