test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test ("One Dollar should be 146,26 Yenes", function() {
    const {fromDollarToYen} = require ('./app.js');
    const yenes = fromDollarToYen(10)
    const expected = 10/1.07*156.5;
    expect(fromDollarToYen(10)).toBeCloseTo(1462.6168, 4);
})

test ("One Yen should be 0,876 Pound", function() {
    const {fromYenToPound} = require ('./app.js');
    const Pound = fromYenToPound(10)
    const expected = 10/156.5*0.87;
    expect(fromYenToPound(10)).toBeCloseTo(0.05559105, 8);
})