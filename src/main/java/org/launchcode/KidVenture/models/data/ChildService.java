package org.launchcode.KidVenture.models.data;
import org.launchcode.KidVenture.models.Child;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChildService {
    @Autowired
    private ChildRepository childRepository;

    public Optional<Child> getChildProfileById(Long id){
        return childRepository.findById(id);
    }



    public List<Child> getAllChildren(){
        return childRepository.findAll();
    }


    public Child createChild(Child child){
        return childRepository.save(child);
    }

    public Optional<Child> updateChild(Long id, Child updatedChild){
        Optional<Child> existingChildProfileOptional = childRepository.findById(id);
        if(existingChildProfileOptional.isPresent()) {
            Child existingChild = existingChildProfileOptional.get();
            existingChild.setChildName(updatedChild.getChildName());
            existingChild.setDateOfBirth(updatedChild.getDateOfBirth());
            return Optional.of(childRepository.save(existingChild));
        }else {
            return Optional.empty();
        }
    }

    public boolean deleteChild(Long id){
        if(childRepository.existsById(id)) {
            childRepository.deleteById(id);
            return true;
        }else {
            return false;
        }
    }
}