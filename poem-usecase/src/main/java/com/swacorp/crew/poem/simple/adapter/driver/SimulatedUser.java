package com.swacorp.crew.poem.simple.adapter.driver;

import com.swacorp.crew.poem.boundary.Boundary;
import com.swacorp.crew.poem.boundary.port.driver.IReactToCommands;
import com.swacorp.crew.poem.command.AskForPoem;

/**
 * The driver adapter. It's on the left side of the hexagon. It sends user
 * requests as command objects to a driver port on the hexagon boundary. For
 * simplicity, sending is done autonomously without user interaction. That's
 * why the class is called {@link SimulatedUser}.
 * 
 * @author b_muth
 *
 */
public class SimulatedUser {
	private IReactToCommands driverPort;

	public SimulatedUser(Boundary driverPort) {
		this.driverPort = driverPort;
	}

	public void run() {
		driverPort.reactTo(new AskForPoem("en"));
		driverPort.reactTo(new AskForPoem("de"));
	}
}
