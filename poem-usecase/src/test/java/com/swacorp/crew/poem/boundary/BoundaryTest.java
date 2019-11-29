package com.swacorp.crew.poem.boundary;

import static org.junit.Assert.assertEquals;

import com.swacorp.crew.poem.command.AskForPoem;
import com.swacorp.crew.poem.simple.adapter.driven.LineWriterStub;
import com.swacorp.crew.poem.simple.adapter.driven.PoemObtainerStub;
import org.junit.Before;
import org.junit.Test;

public class BoundaryTest {
	private static final String EXPECTED_ENGLISH_POEM = PoemObtainerStub.ENGLISH_POEM;
	private static final String EXPECTED_GERMAN_POEM = PoemObtainerStub.GERMAN_POEM;
	
	private LineWriterStub lineWriter;
	private Boundary boundary;

	@Before
	public void setup() {
		PoemObtainerStub poemObtainerStub = new PoemObtainerStub();
		lineWriter = new LineWriterStub();
		boundary = new Boundary(poemObtainerStub, lineWriter);
	}

	@Test
	public void englishPoem() throws Exception {
		boundary.reactTo(new AskForPoem("en"));
		assertPoemIs(EXPECTED_ENGLISH_POEM);
	}

	@Test
	public void englishPoemWhenUnknownLanguage() throws Exception {
		boundary.reactTo(new AskForPoem("fr"));
		assertPoemIs(EXPECTED_ENGLISH_POEM);
	}

	@Test
	public void germanPoem() throws Exception {
		boundary.reactTo(new AskForPoem("de"));
		assertPoemIs(EXPECTED_GERMAN_POEM);
	}

	private void assertPoemIs(String expectedPoemVerse) {
		String[] actualPoemVerses = lineWriter.getLines();
		assertEquals(expectedPoemVerse, actualPoemVerses[0]);
	}

}
