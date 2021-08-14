const express = require("express"); // Importante o EXPRESS
const app = express(); // Instanciando o express
const Parser = require("body-parser");
const conexao = require("./database/conexao"); //Criando a conexão com o Banco de dados
const categoria = require('./database/Categoria'); // Rota para gravar e buscar categorias
const {body, validationResult} = require('express-validator');
const Swal = require('sweetalert2');


//VARIÁVEIS GLOBAIS
//var teste1 ='TESTANDO RESPOSTAS';

//Conectando ao banco

conexao
.authenticate()
.then(()=>{
    console.log('Conectado com sucesso');
})
.catch((msgErro)=>{
    console.log('ERRO DE CONEXÃO AO BANCO');
})



app.use(express.static('public')); // Configurando para utilizar os arquivos estáticos (css, js, img)
app.set('view engine','ejs'); // Configurando para renderizar com o EJS

app.use(Parser.urlencoded({extended:false}));
//app.use(Parser.json());
app.use(express.json());


/********* Funções de Mensagem *********/


function msgSucesso(){ 
    locals.teste();
   
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Categoria Salva com Sucesso!',
      showConfirmButton: false,
      timer: 1500
    })
  }
  app.locals.msgSucesso = msgSucesso




app.get("/", (req, resp)=> {
    resp.render("index");
    //resp.render("admin/admin"); Quando for para carregar arquivo que está dentro de uma pasta para organização
});

app.get("/admin", (req, resp)=>{
    resp.render("admin");
})


/*Rota para gravar Categoria*/
app.post("/gravarcategoria", [
    body('txt_nomeCategoria','Nome da categoria é obrigatório!')
    .exists().notEmpty(),
    body('txt_descricaoCategoria', 'Descrição da categoria é obrigatória!')
    .exists().notEmpty()],
    (req, resp)=>{  
    const errors = validationResult(req);   

    //checa se os campos foram prenchidos. Obrigatório para todos
    if(!errors.isEmpty()){         
         const aviso = errors.array();         
         resp.render('admin',
         {
            aviso : aviso
             
         })
    } 
    else{   
        
    
        
        //Salvando Categoria no banco de dados
        var nmCategoria = req.body.txt_nomeCategoria;
        var descricao = req.body.txt_descricaoCategoria;        
        categoria.create({
            nomeCategoria: nmCategoria,
            descricaoCategoria:descricao
        }).then(() => {            
            
            categoria.findAll({
                raw:'true'
            }).then(lista=>{
               
                resp.render('admin',
                            {
                            sucesso:'Categoria Cadastrada com sucesso!',
                            listaCategoria: lista                 
                            
                            
                            } 
                            
            )})
        });
    }
       
    
});

/*Rota para buscar categoria sem filtro */

app.get('/buscarCategoria', (req, resp)=>{

    categoria.findAll({
        raw : 'true'
    }).then(lista=>{
        console.log(lista);
        resp.render('admin',{
            listaCategoria : lista
        })
    })

})





app.listen(8080,()=>{
    console.log('Servidor Executando');
});