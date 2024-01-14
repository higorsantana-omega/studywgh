const carro = "ford";
const carro1 = "forda";

console.log(carro === carro1);

function test (name1, name2) {
	if (name1 === name2) {
		return console.log('São os mesmos')
	} else {
		throw new Error('São diferentes')
	}

}

test(carro, carro1)
