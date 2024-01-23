package org.launchcode.KidVenture.models.data;

import org.launchcode.KidVenture.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
}
