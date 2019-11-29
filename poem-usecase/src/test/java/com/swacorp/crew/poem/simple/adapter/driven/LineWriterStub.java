package com.swacorp.crew.poem.simple.adapter.driven;

import com.swacorp.crew.poem.boundary.port.driven.IWriteLines;

public class LineWriterStub implements IWriteLines {
	private String[] lines;

	@Override
	public void writeLines(String[] lines) {
		this.lines = lines;
	}

	public String[] getLines() {
		return lines;
	}
}
