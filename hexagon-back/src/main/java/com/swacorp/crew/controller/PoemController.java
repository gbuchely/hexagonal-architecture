package com.swacorp.crew.controller;

import com.swacorp.crew.adapter.driver.SpringMvcDriver;
import com.swacorp.crew.poem.command.AskForPoem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
class PoemController { 
	private SpringMvcDriver springMvcDriver;

	@Autowired
	public PoemController(SpringMvcDriver springMvcDriver) {
		this.springMvcDriver = springMvcDriver;
	}
		
	@GetMapping("/askForPoem")
	public String askForPoem(@RequestParam(name = "lang", required = false, defaultValue = "en") String language, Model webModel) {
		springMvcDriver.reactTo(new AskForPoem(language), webModel);
		return "poemView";
	}
}
