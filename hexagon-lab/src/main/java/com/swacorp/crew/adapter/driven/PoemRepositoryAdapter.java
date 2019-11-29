package com.swacorp.crew.adapter.driven;

import com.swacorp.crew.repository.Poem;
import com.swacorp.crew.repository.PoemRepository;
import com.swacorp.crew.poem.boundary.driven_port.IObtainPoems;

import java.util.Collection;
import java.util.stream.Collectors;

public class PoemRepositoryAdapter implements IObtainPoems {
	private PoemRepository poemRepository;

	public PoemRepositoryAdapter(PoemRepository poemRepository) {
		this.poemRepository = poemRepository;
	}
	
	@Override
	public String[] getMePoems(String language) {
		Collection<Poem> poems = poemRepository.findByLanguage(language);
		final String[] poemsArray = poems.stream()
			.map(p -> p.getText())
			.collect(Collectors.toList())
			.toArray(new String[0]);
		return poemsArray;
	}
}
