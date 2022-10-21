const fs= require('fs');
const { stringify } = require('querystring');

class Container{
    constructor(file){
        this.file = file;
    }
    save = async(product) =>{
        try{
            if(fs.existsSync(this.file)){
                let result = await this.getAll();
                if(result.length > 0){
                    console.log("primero");
                    let setId = result[result.length];
                    let newProduct ={
                        id: setId,
                        ...product
                    }
                    result.push(newProduct);
                    await fs.promises.writeFile(this.file, JSON.stringify(result,null,2));
                    return setId;
                }else{
                    console.log("segundo");
                    let setId = 1;
                    let newProduct ={
                        id: setId,
                        ...product
                    }
                    result.push(newProduct);
                    await fs.promises.writeFile(this.file, JSON.stringify(result,null,2));
                    return setId;
                }
            }else{
                    console.log("tercero");
                    let newProduct={
                    id: 1,
                    ...product
                }
                await fs.promises.writeFile(this.file, JSON.stringify(newProduct,null,2));
                return 1;
            }
        }catch (error) {
            console.log(error)
        }
    }

    getAll = async() =>{
        try {
            if(fs.existsSync(this.file)){
                let data = await fs.promises.readFile(this.file, 'utf8');
                let result = await JSON.parse(data);
                console.log(typeof(result));
                return result;
            }else{
                return [];
            }
        } catch(error) {
            console.log(error);
        }
    }

    deleteById = async(id) => {
        let result = await this.getAll();
        for(const i=0; i < result.length; i++){
            if(result[i].id == id){
                result.splice(i, 1);
                break;
            }
        }
        await fs.promises.writeFile(this.file, stringify(result,null,2));
    }

    getById = async(id) =>{
        let result = await this.getAll();
        for(element of result){
            if(element.id == id){
                return element;
            }
        }
        return 'Object not found'
    }

    deleteAll = async() =>{
        await fs.promises.writeFile(this.file, stringify([],null,2));
    }
}

module.exports = Container;
