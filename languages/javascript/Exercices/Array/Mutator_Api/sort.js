const teams = ["PSG", "Barcelona", "Real Madrid"];
console.log(teams.sort(() => -1)) // Inverte a array
console.log(teams.sort((a, b) => a.length < b.length ? -1 : 1)) // Ordena do menor para o maior