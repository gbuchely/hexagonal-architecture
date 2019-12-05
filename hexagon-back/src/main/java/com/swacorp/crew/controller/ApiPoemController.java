package com.swacorp.crew.controller;

import com.swacorp.crew.adapter.driver.ApiRestDriver;
import com.swacorp.crew.poem.command.AskForPoem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@RestController
@RequestMapping("/api")
class ApiPoemController {
	private ApiRestDriver apiRestDriver;

	@Autowired
	public ApiPoemController(ApiRestDriver apiRestDriver) {
		this.apiRestDriver = apiRestDriver;
	}
		
	@GetMapping("/askForPoem")
	public List askForPoem(@RequestParam(name = "lang", required = false, defaultValue = "en") String language, Model webModel) {
		// Forward commands to the hexagon, by using SpringMvcDriver
		//String val = springMvcDriver.reactTo(new AskForPoem(language), webModel);
		return apiRestDriver.reactTo(new AskForPoem(language));
	}

	@GetMapping("/")
	public List index(@AuthenticationPrincipal Jwt jwt) {
		System.out.println("headers:\n" + jwt.getHeaders());
		System.out.println("\nclaims:\n" + jwt.getClaims());
		List<String> out = new ArrayList();
		out.add(String.format("Hello, %s!", jwt.getSubject()));
		return out;
	}

	@GetMapping("/pri")
	public List primary() {
		List<String> out = new ArrayList();
		out.add("Primary");
		return out;
	}

	@GetMapping("/sub")
	public List subsidiary(@AuthenticationPrincipal Jwt jwt) {
		final String uri = "http://localhost:8081/api/pri";

		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		headers.setBearerAuth(jwt.getTokenValue());
		HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);

		ResponseEntity<String> result = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);

		System.out.println(result.getBody());

		List<String> out = new ArrayList();
		out.add("Get " + result.getBody() + " from Subsidiary");
		return out;
	}
}
