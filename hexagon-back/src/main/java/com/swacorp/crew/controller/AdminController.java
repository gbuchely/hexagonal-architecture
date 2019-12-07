package com.swacorp.crew.controller;

import com.swacorp.crew.adapter.driver.ApiRestDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	public List index(@AuthenticationPrincipal Jwt jwt) {
		printClaims(jwt);
		List<String> out = new ArrayList();
		out.add("/admin/");
		out.add(String.format("Hello ADMIN, %s!", jwt.getSubject()));
		return out;
	}

	private void printClaims(Jwt jwt) {
		System.out.println("headers:\n" + jwt.getHeaders());
		System.out.println("\nclaims:\n" + jwt.getClaims());
	}
}
