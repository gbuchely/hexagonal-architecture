package com.swacorp.crew.poem.command;

/**
 * Command object representing the user request for a poem in a certain
 * language. Supported languages are: "de" for German, "en" for English.
 * 
 * @author b_muth
 *
 */
public class AskForPoem {
	private String language;

	public AskForPoem(String language) {
		this.language = language;
	}

	public String getLanguage() {
		return language;
	}
}
