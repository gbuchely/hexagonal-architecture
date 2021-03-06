package com.swacorp.crew.adapter.driven;

import java.util.Map;
import java.util.Objects;

import com.swacorp.crew.poem.boundary.driven_port.IWriteLines;
import org.springframework.ui.Model;

public class SpringMvcPublisher implements IWriteLines {
	private static final String LINES_ATTRIBUTE = "lines";

	private Model webModel;

	public void setWebModel(Model webModel) {
		Objects.requireNonNull(webModel);
		this.webModel = webModel;
	}

	public void writeLines(String[] lines) {
		Objects.requireNonNull(lines);
		webModel.addAttribute(LINES_ATTRIBUTE, lines);
	}

	/**
	 * Returns the lines of the last call to {@link #writeLines(String[])}
	 * 
	 * @return the latest lines, or null if {@link #writeLines(String[])} hasn't
	 *         been called.
	 */
	public String[] getLines() {
		String[] lines = null;

		if (webModel != null) {
			Map<String, Object> attributes = webModel.asMap();
			lines = (String[]) attributes.get(LINES_ATTRIBUTE);
		}
		return lines;
	}
}