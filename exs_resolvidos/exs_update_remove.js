// 1. Atualize os registros criados no exercício anterior, com os filtros abaixo (não se esqueça de buscar pelo _id):
// Deixe todos os registros criados acima que estiverem como true para false, e vice-versa.
//Monica
db.alunas.update({"_id" : ObjectId("5dc3585c9577e7760f326f05")},{$set: {"nasceuEmSp": "false"}})
//Karoline
db.alunas.update({"_id" : ObjectId("5dc3585c9577e7760f326f06")},{$set: {"nasceuEmSp": "false"}})
//Joyce
db.alunas.update({"_id" : ObjectId("5dc3585c9577e7760f326f07")},{$set: {"nasceuEmSp": "false"}})
//Shirley
db.alunas.update({"_id" : ObjectId("5dc3585c9577e7760f326f09")},{$set: {"nasceuEmSp": "true"}})

//Sugestão de solução para trocar todas que estão como true para false e vice-versa
db.alunas.updateMany({"nasceuEmSp":"true"}, {$set: {"nasceuEmSp":"false", "trocou": true}}) //criação da variavel 'trocou' para identificar quem originalmente estava como 'true'
db.alunas.updateMany({"nasceuEmSp":"false", "trocou": {$exists: false}}, {$set: {"nasceuEmSp":"true", "trocou": true}})

// Atualize a data de nascimento de 2 alunas.
//Monica
db.alunas.update({"_id" : ObjectId("5dc3585c9577e7760f326f05")},{$set: {"dateOfBirth": "01/01/1999"}})
//Shirley
db.alunas.update({"_id" : ObjectId("5dc3585c9577e7760f326f09")},{$set: {"dateOfBirth": "12/12/1998"}})

// Inclua pelo menos 3 livros que elas tenham lido.
//Monica
db.alunas.update(
    {_id:
        ObjectId("5dc3585c9577e7760f326f05")},
    {
        $push: {
            livros: {
        $each: [
        {"titulo":"Harry Potter", "leu": "true"},
        {"titulo": "Java", "leu": "false"},
        {"titulo": "CSS", "leu": "false"}]
    }}})

// 2. Exclua 5 itens dada uma determinada condição:
// Por ordenação de inserção, os dois primeiros que foram inseridos.
db.alunas.find().sort({_id: 1}).limit(2).pretty()
db.alunas.remove({_id: ObjectId("5dc0af6fa6372afcd62db403")}) //Natalya
db.alunas.remove({_id: ObjectId("5dc0af6fa6372afcd62db404")}) //Maria

// Por ordem alfabética, os dois primeiros.
db.alunas.find().sort({"nome": 1}).limit(2).pretty()
db.alunas.remove({_id: ObjectId("5dc0af6fa6372afcd62db40f")}) //Arya
db.alunas.remove({_id: ObjectId("5dc0af6fa6372afcd62db408")}) //Barbara

// Por ordem de data de nascimento decrescente, a primeira data
db.alunas.find().sort({"dateOfBirth": -1}).limit(1).pretty()
db.alunas.remove({_id: ObjectId("5dc3585c9577e7760f326f07")}) //Joyce