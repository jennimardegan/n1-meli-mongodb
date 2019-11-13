//Ordenar registros por data do ObjectId
db.alunas.find().sort({_id: 1}).pretty() // do primeiro criado para o último
db.alunas.find().sort({_id: -1}).pretty() // do último criado para o primeiro

db.alunas.find().sort({"nome": 1}).pretty() // coloca em ordem alfabética
db.alunas.find().sort({"dateOfBirth": 1}).pretty() // coloca em ordem de data de Nascimento (SE a data foi criada como data e não string apenas)
