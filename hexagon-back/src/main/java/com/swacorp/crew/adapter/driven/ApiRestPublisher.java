package com.swacorp.crew.adapter.driven;



import com.swacorp.crew.poem.boundary.port.driven.IWriteLines;

import java.util.ArrayList;
import java.util.List;

public class ApiRestPublisher implements IWriteLines {

	private List<String> verses = new ArrayList();

	/**
	 * Returns the lines of the last call to {@link #writeLines(String[])}
	 * 
	 * @return the latest lines, or null if {@link #writeLines(String[])} hasn't
	 *         been called.
	 */

	@Override
	public void writeLines(String[] strings) {
		verses.clear();
		for (String val: strings) {
			verses.add(val);
		}
	}

	public List getVerses() {
		return verses;
	}
}