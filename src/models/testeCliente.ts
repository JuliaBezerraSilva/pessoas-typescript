// este produto está aqui apenas como referência de como testar models
// Originalmente foi executado a partir da pasta SRC
//usando o comando:
//npx tsx .\src\testeProduto.ts

import { Cliente } from "./Cliente.js";

const p1 = new Cliente(
  1,
  "André Solicito",
  "068.753.540-98",
  "41.068.896-4",
  "23/05/1980",
);
const p2 = new Cliente(
  2,
  "Janete de Oliveira",
  "501.764.310-98",
  "20.360.374-6",
  "12/01/1970",
);
const p3 = new Cliente(
  3,
  "José de Almeida",
  "862.373.890-08",
  "42.172.423-7",
  "13/07/1965",
);

console.log(p1);
console.log(p2);
console.log(p3);
