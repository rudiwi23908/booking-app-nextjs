import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="bg-blue-600 px-4 py-3 md:px-20 md:py-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-white font-bold text-lg" href="/">
          Booking.com
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <button
            className="text-white hover:underline"
            onClick={() => router.push("/auth/signin")}
          >
            Cek Pesanan
          </button>
          <Link className="text-white hover:underline" href={"/auth/signin"}>
            Masuk
          </Link>
          <Link className="text-white hover:underline" href={"/auth/signup"}>
            Daftar
          </Link>
        </nav>
        <button className="md:hidden">
          <MenuIcon className="h-6 w-6 text-white" />
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
