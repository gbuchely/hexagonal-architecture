package com.swacorp.crew.poem.simple.adapter.driven;

import com.swacorp.crew.poem.boundary.port.driven.IWriteLines;

import java.util.Objects;


/**
 * Right-side, driven adapter for writing text to the console.
 * 
 * @author b_muth
 *
 */
public class ConsoleWriter implements IWriteLines {
	public void writeLines(String[] lines) {
		Objects.requireNonNull(lines);
		for (String line : lines) {
			System.out.println(line);
		}
		System.out.println("");
	}
}