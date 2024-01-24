let productos = [];

const getProductos = () => productos;

function agregarProductos(
  titulo,
  descripcion,
  precio,
  rutaDeImagen,
  codigo,
  stock
) {
  const productoExistente = productos.find(
    (producto) => producto.codigo === codigo
  );

  if (productoExistente) {
    console.log("Producto ya existe , no se puede agregar");
    return;
  }

  const producto = {
    id: generarId(),
    titulo: titulo,
    descripcion: descripcion,
    precio: precio,
    rutaDeImagen: rutaDeImagen,
    codigo: codigo,
    stock: stock,
  };

  productos.push(producto);
}

function generarId() {
  let id = 0;

  if (productos.length === 0) {
    id = 1;
  } else {
    id = productos[productos.length - 1].id + 1;
  }
  return id;
}

function getProductoById(productoId) {
  const producto = productos.find((producto) => producto.id === productoId);
  if (!producto) {
    console.log("Producto no encontrado");
    return null;
  }

  if (producto) {
    console.log("el producto fue encontrado");
  }
  return producto;
}

console.log(getProductos());
