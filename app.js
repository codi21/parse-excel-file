var Excel = require('exceljs');

let workbook = new Excel.Workbook();
let usuarios = [];
workbook.xlsx.readFile('./excel-files/01 - Config - Usuarios y Roles.xlsx').then(function(){
        var worksheet = workbook.worksheets[0];
        worksheet.eachRow(function(row,rowNumber) {
            if ( rowNumber > 2 ){
                let usuario = {
                    email : '' ,
                    firstName : '',
                    imageUrl : '',
                    lastName: '',
                    login : '',
                    nickname:'',
                    authorities: [],
                    password : ''
                }

               console.log(JSON.stringify(row.values)); 
               let name = row.getCell(1).value;
               let res = name.split(" ");
               usuario.lastName=res[0];
               usuario.firstName=res[2]||res[1];
               usuario.authorities.push(row.getCell(2).value);
               usuario.login = row.getCell(3).value;
               usuario.password= row.getCell(3).value;
               usuarios.push(usuario);



               /*
               row.eachCell(function (cell,colNumber){
                   /*
                   switch ( colNumber ) {

                       case 1 :
                           usuario.nickname = cell.value;  
                           usuarios.push (usuario);
                           
                           break;
                        case 2 :
                           usuario.authorities.push(cell.value);
                        case 3 :
                           usuario.login = cell.value;
                   }
                   

                });
                */
                
            }
        });
    console.log(usuarios);
});
