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

  const productoExistente = productos.some(
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
  console.log("el producto fue encontrado");

  return producto;
}

// Primero se llama a getProductos, debe traer un [] array vacio.
console.log(getProductos());

// aca la llamo y agrego ese producto
agregarProductos(
  "producto prueba",
  "este es un producto prueba",
  200,
  "Sin imagen",
  "codigo123",
  25
);

// aca vuelvo a llamar a la funcion getProductos, esta vez deberia imprimer el primer producto que agregue
console.log(getProductos());

// aca intento agregar los mismo datos del primer producto  con la intencion de que de error, por que ya existe
agregarProductos(
  "producto prueba",
  "este es un producto prueba",
  200,
  "Sin imagen",
  "codigo123",
  25
);

// aca en caso de que exista deberia mostrarlo, y si no marcar como null no encontrado
console.log(getProductoById(2));
