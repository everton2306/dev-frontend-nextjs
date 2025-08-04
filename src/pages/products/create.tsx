import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "../../types/product";
import { createProduct } from "../../services/api";
import BackButton from "@/components/BackButton";

// Função para formatar moeda BRL
const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function CreateProduct() {
  const router = useRouter();
  const [price, setPrice] = useState<number | null>(null);
  const [priceDisplay, setPriceDisplay] = useState<string>("");

  const [form, setForm] = useState<Product>({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "price") {
      // Remove tudo que não for dígito ou vírgula
      const numericString = value.replace(/[^\d,]/g, "");
      const numericValue = parseFloat(numericString);

      setForm({ ...form, price: isNaN(numericValue) ? 0 : numericValue });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProduct(form);
    router.push("/");
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 pt-4 pb-4">
      <BackButton />
      <div className="min-h-screen via-indigo-50 to-pink-50 flex justify-center items-center p-6 font-sans">
        <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 transition-transform hover:scale-105 duration-300">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Criar Novo Produto
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Título */}
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Título
              </label>
              <input
                name="title"
                placeholder="Descrição do produto"
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
                value={form.price ? formatCurrency(form.price) : ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200"
                required
              />
            </div>

            {/* Descrição */}
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Descrição
              </label>
              <textarea
                name="description"
                placeholder="Descrição detalhada do produto"
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
                placeholder="Categoria do produto"
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
                placeholder="URL da imagem"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200"
              />
            </div>

            {/* Botão de Envio */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              >
                Criar Produto
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
