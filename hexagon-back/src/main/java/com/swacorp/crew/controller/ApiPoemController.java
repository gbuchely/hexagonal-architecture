package com.swacorp.crew.controller;

import com.swacorp.crew.adapter.driver.ApiRestDriver;
import com.swacorp.crew.poem.command.AskForPoem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
import java.util.List;


@RestController
@RequestMapping("/api")
class ApiPoemController {

	@Value("${subUrl}")
	private String subsidiaryUri;

	private ApiRestDriver apiRestDriver;

	@Autowired
	public ApiPoemController(ApiRestDriver apiRestDriver) {
		this.apiRestDriver = apiRestDriver;
	}
		
	@GetMapping("/askForPoem")
	public List askForPoem(@RequestParam(name = "lang", required = false, defaultValue = "en") String language, Model webModel) {
		return apiRestDriver.reactTo(new AskForPoem(language));
	}

	@GetMapping("/")
	public List index(@AuthenticationPrincipal Jwt jwt) {
		printClaims(jwt);
		List<String> out = new ArrayList();
		out.add("/api/");
		out.add(String.format("Hello, %s!", jwt.getSubject()));
		return out;
	}

	@GetMapping("/subsidiary")
	public List subsidiary(@AuthenticationPrincipal Jwt jwt) {
		System.out.println("subUrl : " + subsidiaryUri);
		printClaims(jwt);

		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		headers.setBearerAuth(jwt.getTokenValue());
		HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

		ResponseEntity<String> result = restTemplate.exchange(subsidiaryUri + "/api/", HttpMethod.GET, entity, String.class);

		System.out.println(result.getBody());

		List<String> out = new ArrayList();
		out.add("/api/subsidiary/");
		out.add("Get " + result.getBody() + " from Subsidiary");
		return out;
	}

	private void printClaims(Jwt jwt) {
		System.out.println("headers:\n" + jwt.getHeaders());
		System.out.println("\nclaims:\n" + jwt.getClaims());
	}
}
