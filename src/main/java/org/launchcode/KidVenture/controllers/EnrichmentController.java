package org.launchcode.KidVenture.controllers;


import org.launchcode.KidVenture.models.Enrichment;
import org.launchcode.KidVenture.models.data.EnrichmentRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import java.util.Random;

import java.util.List;

@RestController
@RequestMapping("/enrichment")
public class EnrichmentController {
    private final EnrichmentRepository enrichmentRepository;

    public EnrichmentController(EnrichmentRepository enrichmentRepository) {
        this.enrichmentRepository = enrichmentRepository;
    }

    @GetMapping
    public List<Enrichment> getAllEnrichmentActivities() {
        return (List<Enrichment>) enrichmentRepository.findAll();
    }

    @GetMapping("/random")
    public Optional getRandomEnrichment() {
        Random rand = new Random();
        int id = rand.nextInt(70-1)+1;
        return enrichmentRepository.findById(id);

    }
}
