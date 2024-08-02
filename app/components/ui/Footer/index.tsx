import Link from "next/link";

export default function Footer() {
  return (
    <footer className="animate-fade-in-soon mb-5 mt-auto text-orange-200">
      <p className="text-center text-sm">
        Copyright &copy; 2024 |{" "}
        <Link
          href="https://michaelriver.dev"
          target="_blank"
          className="transition-all duration-200 ease-in-out hover:opacity-60"
        >
          Michael River Nilsson
        </Link>
      </p>
    </footer>
  );
}
