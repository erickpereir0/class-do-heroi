import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o nome do herói: ", (nomeDoHeroi) => {
  rl.question("Digite a quantidade de XP do herói: ", (xpDoHeroi) => {
    xpDoHeroi = parseInt(xpDoHeroi);

    function xp(xpDoHeroi) {
      if (xpDoHeroi < 1000) {
        return `${nomeDoHeroi} alcançou a categoria Ferro com ${xpDoHeroi} de XP.`;
      } else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
        return `${nomeDoHeroi} alcançou a categoria Bronze com ${xpDoHeroi} de XP.`;
      } else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
        return `${nomeDoHeroi} alcançou a categoria Prata com ${xpDoHeroi} de XP.`;
      } else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
        return `${nomeDoHeroi} alcançou a categoria Ouro com ${xpDoHeroi} de XP.`;
      } else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
        return `${nomeDoHeroi} alcançou a categoria Platina com ${xpDoHeroi} de XP.`;
      } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
        return `${nomeDoHeroi} alcançou a categoria Ascendente com ${xpDoHeroi} de XP.`;
      } else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
        return `${nomeDoHeroi} alcançou a categoria Imortal com ${xpDoHeroi} de XP.`;
      } else {
        return `${nomeDoHeroi} alcançou a categoria Radiante com ${xpDoHeroi} de XP.`;
      }
    }

    console.log(xp(xpDoHeroi));

    rl.close();
  });
});
