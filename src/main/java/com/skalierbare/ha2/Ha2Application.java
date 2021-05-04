package com.skalierbare.ha2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.skalierbare.ha2.repository")
public class Ha2Application {

	public static void main(String[] args) {
		SpringApplication.run(Ha2Application.class, args);
	}

}
