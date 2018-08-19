package com.ucbcbba.spring.tomcat.springboottotomcat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class SpringBootToTomcatApplication extends SpringBootServletInitializer {

	/**
	 * Used when running as a jar
	 *
	 * @param args
	 */
	public static void main(String[] args) {
		SpringApplication.run(SpringBootToTomcatApplication.class, args);
	}

	/**
	 * Used when running as a WAR within a web container
	 * @param builder
	 * @return
	 */
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(SpringBootToTomcatApplication.class);

	}
}