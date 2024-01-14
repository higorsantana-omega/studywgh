interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquatico";
  executarRugido(): void;
}

interface IFelinos extends IAnimal {
  visaoNoturna: boolean;
}

const animal: IFelinos = {
  nome: "elefante",
  tipo: "terrestre",
  visaoNoturna: true,
  executarRugido() {},
};

// TYPES
type IAviao = {
  voa: boolean;
};

// Generic Types
function adicionarLista<Naosei>(array: number[], valor: number) {
  return array.map((item) => item + valor);
}

adicionarLista([1, 2], 1);

//
