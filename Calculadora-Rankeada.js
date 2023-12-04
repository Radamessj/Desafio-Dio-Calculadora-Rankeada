function Partida(Vitorias, Derrotas) {
    let result = Vitorias - Derrotas
    return result
  }
  
  function classificacao() {
    let resultClass = partida(47, 15)
    let nivel = ""
    if (resultClass <= 10) {
      nivel = "Ferro"
    } else if (resultClass <= 20) {
      nivel = "Bronze"
    } else if (resultClass <= 50) {
      nivel = "Prata"
    } else if (resultClass <= 80) {
      nivel = "Ouro"
    } else if (resultClass <= 90) {
      nivel = "Diamante"
    } else if (resultClass <= 100) {
      nivel = "Lendário"
    } else if (resultClass >= 100) {
      nivel = "Imortal"
    }
    return "O Herói tem de saldo de ${resultClass} e está no nível de ${nivel}"
  }
  
  console.log(classificacao())