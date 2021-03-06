package com.swacorp.crew.poem.simple.adapter.driven;

import com.swacorp.crew.poem.boundary.port.driven.IObtainPoems;

public class PoemObtainerStub implements IObtainPoems {
	public static final String ENGLISH_POEM = "Random english poem.";
	public static final String GERMAN_POEM = "Random german poem.";

	@Override
	public String[] getMePoems(String language) {
		if ("de".equals(language)) {
			return new String[] { GERMAN_POEM };
		} else {
			return new String[] { ENGLISH_POEM };
		}
	}
}
