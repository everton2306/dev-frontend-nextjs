import { deleteProduct } from "@/services/api";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

type DeleteProductProps = {
  product: Product;
  onCancel?: () => void;
};

export default function DeleteProduct(props: DeleteProductProps) {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteProduct(props.product.id!);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center transition-transform hover:scale-105 duration-300">
        {/* Título */}
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Confirmar Exclusão
        </h2>
        {/* Mensagem */}
        <p className="mb-6 text-gray-700 text-lg">
          Você realmente deseja excluir o produto "
          <span className="font-semibold">{props.product.title}</span>"?
        </p>

        {/* Botões */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-md transition duration-200"
          >
            Excluir
          </button>
          <button
            onClick={props.onCancel ? props.onCancel : () => router.back()}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow-md transition duration-200"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
