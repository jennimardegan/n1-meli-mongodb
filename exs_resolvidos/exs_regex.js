//Localizar todos os nomes que contenham 'r', independente de maiúscula e minúscula
db.alunas.find({nome: {$regex: /r/, $options: 'i'}}).pretty()

//db.alunas.find({"nome": /r/i}).pretty() -- i=ignore case -- o Mongo entende que é um regex desta forma

//Localizar todos os nomes que iniciam com a letra 'a'
db.alunas.find({"nome": /^a/i}).pretty()

//Localizar todos os nomes que terminam com 'na' (método também utilizado para pedaços de palavras, não apenas caracteres)
db.alunas.find({"nome": /na$/i}).pretty()

//---------------------------------------------------------------------------------------------------
//1. Selecione todos os registros em que os livros contenham em qualquer parte da palavra, 'Clean'
db.alunas.find({"livros.titulo": /Clean/}).pretty()

//2. Selecione todos os registros em que os titulos dos livros terminem com a letra 'S'
db.alunas.find({"livros.titulo": /S$/}).pretty()

//3. Selecione todos os registros em que todos os livros terminem com a letra 't'
db.alunas.find({"livros.titulo": /t$/i}).pretty()

//4. Selecione todos os nomes das alunas que terminem com a letra 'k' ou 'o'
db.alunas.find({$or: [{"nome": /k$/i}, {"nome": /o$/i}]}).pretty()
db.alunas.find({"nome": {$in:[/k$/, /o$/]}}).pretty() //escrevendo com IN nesse caso é melhor pois estamos falando do mesmo objeto "nome"

//5. Selecione todos os registros em que os nomes comecem com a letra 'a'
db.alunas.find({"nome": /^a/i}).pretty()

//6. Selecione todos os registros em que nomes comecem com a letra 'a' ou 'h'
db.alunas.find({$or: [{"nome": /^a/i}, {"nome": /^h/i}]}).pretty()
db.alunas.find({"nome": {$in:[/^a/, /^h/]}}).pretty()