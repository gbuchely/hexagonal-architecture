package com.swacorp.crew.adapter.driver;

import com.swacorp.crew.adapter.driven.ApiRestPublisher;
import com.swacorp.crew.poem.boundary.driver_port.IReactToCommands;

import java.util.List;

public class ApiRestDriver {
	private IReactToCommands driverPort;
	private ApiRestPublisher apiRestPublisher;

	public ApiRestDriver(IReactToCommands driverPort, ApiRestPublisher apiRestPublisher) {
		this.driverPort = driverPort;
		this.apiRestPublisher = apiRestPublisher;
	}

	public List reactTo(Object command) {

		// Forward the command to the hexagon driver port.
		driverPort.reactTo(command);
		return apiRestPublisher.getVerses();
	}
}
