const Container = require('./Container.js');

let product1 ={
    title:'Queso',
    price: 1250,
    thumbnail:'https://www.lacteoslatam.com/wp-content/uploads/2022/09/Estudio-de-la-transferencia-de-NaCl-en-el-queso-costeno-picado.jpg'
}
let product2 ={
    title:'Jamon',
    price: 2100,
    thumbnail:'https://http2.mlstatic.com/D_NQ_NP_712474-MLA46939913329_082021-O.jpg'
}
let product3 ={
    title:'Mortadela',
    price: 1340,
    thumbnail:'https://tusuper.com.ar/image/cache/catalog/P2020/Carnes-Fiambres/mortadela---800x800.jpg'
}
let product4 ={
    title:'Salame',
    price: 1930,
    thumbnail:'https://http2.mlstatic.com/D_NQ_NP_681853-MLA47272906419_082021-O.jpg'
}
methods = async() => {
    let container = await new Container('products.txt');
    console.log(1);
    await container.save(product1);
    console.log(2);
    await container.save(product2);
    console.log(3);
    await container.save(product3);
    console.log(4);
    await container.save(product4);
    console.log(5);
    console.log(await container.getAll());
    console.log(6);
    console.log(await container.getById(2));
    console.log(7);
    await container.deleteById(2);
    console.log(8);
    console.log(await container.getById(2));
    console.log(9);
    await container.deleteAll();
    console.log(10);
    console.log(await container.getAll());
}

methods();