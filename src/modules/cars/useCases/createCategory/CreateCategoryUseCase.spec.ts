describe("Create category - Use Case", () => {
  it("I wait that 2 + 2 to be 4", () => {
    const soma = 2 + 2;
    const resultado = 4;

    expect(soma).toBe(resultado);
  });

  it("I wait that 2 + 2 not to be 5", () => {
    const soma = 2 + 2;
    const resultado = 5;

    expect(soma).not.toBe(resultado);
  });
});
