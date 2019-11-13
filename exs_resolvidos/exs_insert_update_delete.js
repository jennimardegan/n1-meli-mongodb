//Criar um novo cadastro de aluna dentro do arquivo .json (criar um Documento)
db.alunas.insertOne({nome: "Sabrina", dateOfBirth: "12/08/1989", nasceuEmSp: "false", id: 19, livros:{titulo: "Clean Code", leu: "true"}})
//Pode ser utilizado apenas insert(...)
//Para inserir mais de um documento ao mesmo tempo: insertMany(...)

//1. Crie 5 novos registros de alunas.
//Deve conster os critérios abaixo: 3 que nasceram em sp, 2 que não.
//Deve conter pelo menos alguns dos livros colocados: HTML, CSS, Design, JavaScript, Java, C#, MySQL, MongoDB
//As datas de nascimento devem ser inferiores à data atual
db.alunas.insertMany([
    {nome: "Monica", 
    dateOfBirth: "30/06/1986", 
    nasceuEmSp: "true", 
    id: 20, 
    livros:[
        {titulo: "HTML", leu: "true"},
        {titulo: "Design", leu: "false"}
    ]},
    {nome: "Karoline", 
    dateOfBirth: "17/12/1988", 
    nasceuEmSp: "true", 
    id: 21, 
    livros:[
        {titulo: "Java", leu: "true"},
        {titulo: "C#", leu: "false"}
    ]},
    {nome: "Joyce", 
    dateOfBirth: "27/09/1986", 
    nasceuEmSp: "true", 
    id: 22, 
    livros:[
        {titulo: "MySQL", leu: "true"},
        {titulo: "Design", leu: "true"}
    ]},
    {nome: "Graciani", 
    dateOfBirth: "12/08/1984", 
    nasceuEmSp: "false", 
    id: 23, 
    livros:[
        {titulo: "MongoDB", leu: "false"},
        {titulo: "C#", leu: "true"}
    ]},
    {nome: "Shirley", 
    dateOfBirth: "22/10/1986", 
    nasceuEmSp: "false", 
    id: 24, 
    livros:[
        {titulo: "HTML", leu: "true"},
        {titulo: "Design", leu: "true"}
    ]}])


    //Alterar informação de um documento
    db.alunas.update({"nome": "Lucia"},{$set: {"nasceuEmSp": "false"}}) //Se houvesse mais de 01 Lucia, alteraria apenas a primeira. Para alterar todas updateMAny().
    //update + unset/pull para retirar uma informação
    db.alunas.update({"nome": "Lucia"},{$unset: {"nasceuEmSp": "false"}})

    //Incluir uma nova informação em um documento
    db.alunas.update({"nome":"Jennifer"},{$push:{"livros":{"titulo": "Harry Potter", "leu": "true"}}})

    //Deletar uma aluna
    db.alunas.remove({_id: ObjectId("5dc3585c9577e7760f326f08")}) //Feito por id para garantir que apenas este será excluído
    