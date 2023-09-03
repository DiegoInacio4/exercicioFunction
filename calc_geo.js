function areaRetangulo() {
  base = prompt("Digite o tamanho da base: ");
  altura = prompt("Digite o tamanho da altura: ");
  return base * altura;
}

function areaTriangulo() {
  base = prompt("Digite o tamanho da base: ");
  altura = prompt("Digite o tamanho da altura: ");
  return (base * altura) / 2;
}

function areaQuadrado() {
  lado = prompt("Digite o tamanho do lado: ");
  return lado * lado;
}

function areaTrapezio() {
  baseMaior = parseFloat(prompt("Digite o tamanho da base maior: "));
  baseMenor = parseFloat(prompt("Digite o tamanho da base menor: "));
  altura = prompt("Digite o tamanho da altura: ");
  return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCirculo() {
  raio = prompt("Digite o tamanho do raio: ");
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Escolha uma opção: \n\n" +
      "1. Área do Retângulo\n" +
      "2. Área do Triângulo\n" +
      "3. Área do Quadrado\n" +
      "4. Área do Trapézio\n" +
      "5. Área do Círculo\n" +
      "6. Sair\n"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = areaRetangulo();
        break;
      case "2":
        resultado = areaTriangulo();
        break;
      case "3":
        resultado = areaQuadrado();
        break;
      case "4":
        resultado = areaTrapezio();
        break;
      case "5":
        resultado = areaCirculo();
        break;
      case "6":
        alert("Finalizando...");
        break;
      default:
        alert("Opçao Inválida");
        break;
    }

    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
