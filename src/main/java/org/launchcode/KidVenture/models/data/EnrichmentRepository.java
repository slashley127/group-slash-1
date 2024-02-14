package org.launchcode.KidVenture.models.data;
import org.launchcode.KidVenture.models.Enrichment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnrichmentRepository extends CrudRepository<Enrichment,Integer> {
}
