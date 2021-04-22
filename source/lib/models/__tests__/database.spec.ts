import { Database } from '../database';

describe("database class should", () => {
    test("evolutions of a pokemon", () => {
        let evolution = Database.getEvolution("Bulbasaur");
        expect(evolution.length).toEqual(3);
    })

    test("return the evolution object for every pokemon", () => {
        let evolution = Database.getEvolution("Bulbasaur");
        evolution.forEach(ev => {
            expect(typeof ev.evolution.base).toMatch(/string/)
        })
    })

    test("evolution returs sorted value", () => {
        let evolution = Database.getEvolution("Bulbasaur");
        expect(evolution[0]?.evolution.evolve).toEqual(0);
    })
})
