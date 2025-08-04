import { useRouter } from "next/navigation";

interface BackButtonProps {
  className?: string;
  onClick?: () => void;
}

export default function BackButton(props: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (props.onClick) {
      props.onClick();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow-md transition duration-200 ${props.className}`}
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Voltar
    </button>
  );
}
