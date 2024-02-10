package org.launchcode.KidVenture.models.data;

import org.launchcode.KidVenture.models.EmergencyContact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmergencyContactRepository extends JpaRepository<EmergencyContact, Integer> {
}
