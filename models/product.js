const products=[];

// module.exports= class Product{
//     constructor(t){                                           //""this code is for saving data in file system""";
//         this.title=t;
//     }

//     save(){
//         products.push(this);
//     }

//     static fetchAll(){
//         return products;
//     }
// }
const fs=require('fs');
const path =require('path');

const rootDir =require('../util/path');

const p= path.join(rootDir,'data','products.json');
module.exports= class Product{
    constructor(t){
        this.title=t;
    }

    save(){
        fs.readFile(p,(err,fileContent)=>{
            let products=[];
            if(!err){
                products=JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb){                    // cb is callback bkz this code is async and if we use return the prod.length gets undefined.

        fs.readFile(p,(err,fileContent)=>{
            if(err){
                cb([]);
            }
            else{
                cb(JSON.parse(fileContent));
            }
        });
        
    }
}
