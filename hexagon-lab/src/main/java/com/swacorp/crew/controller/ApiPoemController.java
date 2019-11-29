package com.swacorp.crew.controller;

import com.swacorp.crew.adapter.driver.ApiRestDriver;
import com.swacorp.crew.poem.command.AskForPoem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
}
