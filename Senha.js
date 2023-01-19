function clic() {
    var quant = document.getElementById("QuantidadeCaracteres");
    var numeros = document.querySelector('input[name="OPCAO"]:checked').value;
    var simbolo = document.querySelector('input[name="OPCAO1"]:checked').value;
    var resul = document.getElementById("Resposta");

    var senha = "";
    var posicao;

    var opcao1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if (Number(quant.value) >= 8 && Number(quant.value) <= 20) {//tera que ser no mínimo 8 caracteres e no máximo 20
        if (numeros === "Nao" && simbolo === "Nao") {//sem números e sem símbolos
            for (let i = 0; i < Number(quant.value); i++) {
                posicao = parseInt(Math.random() * 52);
                senha += opcao1[posicao];
            }

        } else if (numeros === "Sim" && simbolo === "Nao") {//quer números,mas não quer simbolos 
            var opcao2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", , "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

            for (let i = 0; i < Number(quant.value); i++) {
                posicao = parseInt(Math.random() * 62);
                senha += opcao2[posicao];
                
            }
            

        } else if (numeros === "Nao" && simbolo === "Sim") { //com simbolos e sem números
            var opcao3 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "@", "#", "$", "%", "&", "*", "/", "+", "-", "=", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


            for (let i = 0; i < Number(quant.value); i++) {
                posicao = parseInt(Math.random() * 62);
                senha += opcao3[posicao];
                console.log(opcao1[posicao]);
            }
            
        } else if (numeros === "Sim" && simbolo === "Sim") { //ambos,símbolos e números
            var opcao4 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "@", "#", "$", "%", "&", "*", "/", "+", "-", "="];

            for (let i = 0; i < Number(quant.value); i++) {
                posicao = parseInt(Math.random() * 72);
                senha += opcao4[posicao];
            }
          
        }

        resul.innerHTML = senha;
        quant.value = "";
    } else {
        alert("A quantidade de caracteres deve ser entre 8 e 20");
    }

}