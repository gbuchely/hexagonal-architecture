package com.swacorp.crew.adapter.driver;

import com.swacorp.crew.adapter.driven.SpringMvcPublisher;
import com.swacorp.crew.poem.boundary.port.driver.IReactToCommands;
import org.springframework.ui.Model;

public class SpringMvcDriver{
	private IReactToCommands driverPort;
	private SpringMvcPublisher springMvcPublisher;

	public SpringMvcDriver(IReactToCommands driverPort, SpringMvcPublisher springMvcPublisher) {
		this.driverPort = driverPort;
		this.springMvcPublisher = springMvcPublisher;
	}

	public void reactTo(Object command, Model webModel) {
		// Inform the web publisher about the current Spring MVC model,
		// so that it can add attributes to it later.
		springMvcPublisher.setWebModel(webModel);
		
		// Forward the command to the hexagon driver port.
		driverPort.reactTo(command);
	}
}
