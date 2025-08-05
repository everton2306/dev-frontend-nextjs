import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import BackButton from "./BackButton";
import { updateProduct } from "@/services/api";
import { toast } from "sonner";

type ProductProps = {
  product: Product;
};

export default function EditProduct({ product }: ProductProps) {
  const router = useRouter();
  const [form, setForm] = useState<Product>(product);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "price") {
      const numericString = value.replace(/[^\d,\.]/g, "").replace(",", ".");
      const numericValue = parseFloat(numericString);
      setForm({ ...form, price: isNaN(numericValue) ? 0 : numericValue });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProduct(form.id!, form)
      .then(() => {
        toast.success("Produto editado com sucesso!");
        router.push(`/products/${form.id}`);
      })
      .catch(() => {
        toast.error("Não foi possível editar o produto.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 flex items-center justify-center p-6 font-sans py-8">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 transition-transform hover:scale-105 duration-300">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Editar Produto
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Título */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Título
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200"
              required
            />
          </div>

          {/* Preço */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Preço
            </label>
            <input
              name="price"
              type="text"
              placeholder="R$ 0,00"
              value={
                form.price
                  ? form.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })
                  : ""
              }
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Descrição */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Descrição
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Categoria */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Categoria
            </label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200"
            />
          </div>

          {/* URL da Imagem */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              URL da Imagem
            </label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Botões */}
          <div className="flex justify-center gap-4 mt-8">
            <BackButton onClick={() => router.back()} />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition duration-200"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
