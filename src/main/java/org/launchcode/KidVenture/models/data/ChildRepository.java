package org.launchcode.KidVenture.models.data;


import org.launchcode.KidVenture.models.Child;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChildRepository extends JpaRepository<Child, Integer> {
}
