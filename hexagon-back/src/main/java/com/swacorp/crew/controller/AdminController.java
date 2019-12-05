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
import java.util.List;


@RestController
@RequestMapping("/admin")
class AdminController {
	private ApiRestDriver apiRestDriver;

	@Autowired
	public AdminController(ApiRestDriver apiRestDriver) {
		this.apiRestDriver = apiRestDriver;
	}
		
	@GetMapping("/")
	public List admin() {
		List<String> out = new ArrayList();
		out.add("Administrator");
		return out;
	}
}
