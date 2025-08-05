import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import BackButton from "./BackButton";

type ProductProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 transition-transform hover:scale-105 duration-300">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
          Detalhes do Produto
        </h1>
        {/* Conteúdo principal */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Imagem */}
          <div className="flex-1">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full max-h-96 object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Detalhes */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4 text-gray-700">
              {product.title}
            </h2>
            <p className="text-xl text-purple-600 mb-4">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p className="mb-4 text-gray-700">{product.description}</p>
            <p className="mb-4">
              <span className="font-semibold text-gray-600">Categoria:</span>{" "}
              {product.category}
            </p>
          </div>
        </div>

        {/* Botões */}
        <div className="mt-8 flex justify-center gap-4">
          <BackButton />

          <button
            onClick={() => router.push(`/products/edit/${product.id}`)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition duration-200"
          >
            Editar
          </button>
          <button
            onClick={() => router.push(`/products/delete/${product.id}`)}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-md transition duration-200"            
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
