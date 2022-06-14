const fs = require('fs/promises');


async function read(){
    try {
const file = await fs.readFile('./services/data.json')
return JSON.parse(file)
    }catch(e){


        console.error('Error reading');
        process.exit(1);
    }
}

async function write(data){

    try{
await fs.writeFile('./services/data.json',JSON.stringify(data));
    }catch(e){


        console.error('Error data writing');
        console.error(e)
        process.exit(1);
    }

}

async function getAll(){
    const data = await read();
    return Object.entries(data).map(([id,v])=>Object.assign({}, {id},v));
}
async function getById(id){
    const data =await read();
    const desert =  data[id]
    if(desert) {
    return Object.assign({},{id},desert);
    }else{return undefined}
}
module.exports = ()=>(req, res, next) =>{
    req.storage={
        getAll,
        getById
    };
    next()
}