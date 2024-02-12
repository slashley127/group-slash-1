package org.launchcode.KidVenture.models.data;

import org.launchcode.KidVenture.models.Child;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChildRepository extends JpaRepository<Child, Integer> {
}
