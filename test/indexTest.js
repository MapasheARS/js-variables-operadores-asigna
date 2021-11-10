describe("cantidades", () => {
  it("numManzanas incrementa 5", () => {
    expect(numManzanas).to.equal(6);
  });

  it("numPlatanos disminuye 2", () => {
    expect(numPlatanos).to.equal(3);
  });
});

describe("precios", () => {
  it("precioManzanas se duplica", () => {
    expect(precioManzanas).to.equal(10);
  });

  it("precioPlatanos divide entre 2", () => {
    expect(precioPlatanos).to.equal(3);
  });
});

describe("totales", () => {
  it("totalPlatanos es igual a numPlatanos * precioPlatanos", () => {
    expect(totalPlatanos).to.equal(numPlatanos * precioPlatanos);
  });

  it("totalManznas es igual a numManzanas * precioManzanas", () => {
    expect(totalManzanas).to.equal(numManzanas * precioManzanas);
  });
});
