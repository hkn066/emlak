package com.hakan.EmlakDemo1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.hakan.EmlakDemo1.*"})
public class EmlakDemo1Application {
	public static void main(String[] args) {
		SpringApplication.run(EmlakDemo1Application.class, args);
	}

}
