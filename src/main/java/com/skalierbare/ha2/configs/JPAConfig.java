package com.skalierbare.ha2.configs;


import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.skalierbare.ha2.repository")
@Configuration
public class JPAConfig {
}
