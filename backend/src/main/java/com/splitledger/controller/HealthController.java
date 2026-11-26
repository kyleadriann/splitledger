package com.splitledger.controller;

import com.splitledger.insights.HealthStatus;
import com.splitledger.insights.SystemStatusProvider;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class HealthController {

    private final SystemStatusProvider statusProvider;

    public HealthController(SystemStatusProvider statusProvider) {

        this.statusProvider = statusProvider;
    }

    @GetMapping("/health")
    public HealthStatus health() {
        return statusProvider.getStatus();
    }
}