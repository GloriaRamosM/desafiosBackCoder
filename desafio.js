class ProductMannager {
  constructor() {
    this.productos = [];
  }

  getProductos = () => this.productos;

  agregarProductos(titulo, descripcion, precio, rutaDeImagen, codigo, stock) {
    if (
      !titulo ||
      !descripcion ||
      !precio ||
      !rutaDeImagen ||
      !codigo ||
      !stock
    ) {
      return console.log("Falta agregar datos a este producto");
    }

    const productoExistente = this.productos.some(
      (producto) => producto.codigo === codigo
    );

    if (productoExistente) {
      console.log("Producto ya existe , no se puede agregar");
      return;
    }

    const producto = {
      id: this.generarId(),
      titulo: titulo,
      descripcion: descripcion,
      precio: precio,
      rutaDeImagen: rutaDeImagen,
      codigo: codigo,
      stock: stock,
    };

    return this.productos.push(producto);
  }

  generarId() {
    let id = 0;

    if (this.productos.length === 0) {
      id = 1;
    } else {
      id = this.productos[this.productos.length - 1].id + 1;
    }
    return id;
  }

  getProductoById(productoId) {
    const producto = this.productos.find(
      (producto) => producto.id === productoId
    );
    if (!producto) {
      console.log("Producto no encontrado");
      return null;
    }
    console.log("el producto fue encontrado");

    return producto;
  }
}

const manejadorDeProducto = new ProductMannager();
manejadorDeProducto.agregarProductos(
  "Producto Prueba",
  "Este es un producto Prueba",
  200,
  "Sin Imagen",
  "Codigo123",
  25
);

let resultado = manejadorDeProducto.getProductos();
console.log(resultado);

manejadorDeProducto.agregarProductos(
  "Producto Prueba",
  "Este es un producto Prueba",
  200,
  "Sin Imagen",
  "Codigo123",
  25
);

manejadorDeProducto.agregarProductos(
  "Producto Gomas",
  "Este es un producto para usar haciendo deportes",
  600,
  "Sin Imagen",
  "Codigo125",
  27
);

console.log(resultado);
let resultadoID = manejadorDeProducto.getProductoById(3);
console.log(resultadoID);
