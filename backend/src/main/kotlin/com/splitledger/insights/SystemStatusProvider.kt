package com.splitledger.insights

import org.springframework.stereotype.Component
import org.springframework.stereotype.Service
import java.time.Instant

data class HealthStatus(
    val status: String,
    val service: String,
    val kotlinEngine: String,
    val timestamp: Instant
)

@Component
class SystemStatusProvider {

    fun getStatus(): HealthStatus {
        return HealthStatus(
            status = "UP",
            service = "splitledger-backend",
            kotlinEngine = "active",
            timestamp = Instant.now()
        )
    }
}