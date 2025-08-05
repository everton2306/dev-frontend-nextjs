import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";

type ProductProps = {
  products: Product[];
};

export default function ProductsList({ products }: ProductProps) {
  return (
    <div className="p-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          Produtos
        </h1>
        <Link
          href="/products/create"
          className="block md:inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 mb-6 mx-auto md:mx-0 text-center"
        >
          Novo Produto
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col"
          >
            {/* Imagem */}            
            <Image
              src={product.image}
              alt={product.title}
              width={500} // ou sua preferência
              height={300} // ajuste conforme necessário
              className="w-full h-full max-h-96 object-contain rounded-lg shadow-md"
            />
            {/* Detalhes */}
            <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
              {product.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">{product.category}</p>
            <p className="text-lg text-green-600 font-bold mt-2">
              ${product.price}
            </p>

            {/* Ações */}
            <div className="mt-auto flex gap-3 pt-4">
              <Link
                href={`/products/${product.id}`}
                className="flex-1 bg-blue-600 text-white py-2 px-4 text-sm rounded-lg text-center hover:bg-blue-700 transition"
              >
                Ver
              </Link>
              <Link
                href={`/products/edit/${product.id}`}
                className="flex-1 bg-yellow-500 text-white py-2 px-4 text-sm rounded-lg text-center hover:bg-yellow-600 transition"
              >
                Editar
              </Link>
              <Link
                href={`/products/delete/${product.id}`}
                className="flex-1 bg-red-500 text-white py-2 px-4 text-sm rounded-lg text-center hover:bg-red-600 transition"
              >
                Excluir
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
