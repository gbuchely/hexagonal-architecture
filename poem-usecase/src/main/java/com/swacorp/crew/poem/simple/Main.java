package com.swacorp.crew.poem.simple;

import com.swacorp.crew.poem.boundary.Boundary;
import com.swacorp.crew.poem.simple.adapter.driven.ConsoleWriter;
import com.swacorp.crew.poem.simple.adapter.driven.HardcodedPoemLibrary;
import com.swacorp.crew.poem.simple.adapter.driver.SimulatedUser;

/**
 * Main class that starts the hexagon example application.
 * 
 * The application is inspired by a talk by A. Cockburn and T. Pierrain on hexagonal architecture:
 * https://www.youtube.com/watch?v=th4AgBcrEHA
 * 
 * @author b_muth
 *
 */
public class Main {
	public static void main(String[] args) {
		new Main().startApplication();
	}

	private void startApplication() {
		// Instantiate driven, right-side adapters

		HardcodedPoemLibrary poemLibrary = new HardcodedPoemLibrary();
		ConsoleWriter consoleWriter = new ConsoleWriter();

		// Inject driven adapters into boundary
		Boundary boundary = new Boundary(poemLibrary, consoleWriter);

		// Start the driver adapter for the application
		new SimulatedUser(boundary).run();
	}
}
