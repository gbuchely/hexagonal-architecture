package com.swacorp.crew.poem.boundary;

import com.swacorp.crew.poem.command.AskForPoem;
import org.requirementsascode.Model;

import java.util.function.Consumer;

/**
 * The use case model ties each type of command to its appropriate command
 * handler interface.
 * 
 * In business terms, this example model means:
 * 
 * The user asks for a poem. The system displays a random poem.
 * 
 * @author b_muth
 *
 */
class UseCaseModel {
	private static final Class<AskForPoem> asksForPoem = AskForPoem.class;

	public static Model build(Consumer<AskForPoem> displaysRandomPoem) {
		Model model = Model.builder()
			.user(asksForPoem).system(displaysRandomPoem)
		.build();

		return model;
	}
}
