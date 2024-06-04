import Link from "next/link";
export default function Signin() {
  return (
    <>
      <h1>Log in</h1>
      <input type="text" />
      <button>Log in</button>
      <p>Atau log in dengan</p>
      <div className="flex gap-3">
        <div className="">
          <div className="w-fit h-fit ring-1 ring-white">apple id</div>
        </div>
        <div className="">
          <div className="w-fit h-fit ring-1 ring-white">google</div>
        </div>
        <div className="">
          <div className="w-fit h-fit ring-1 ring-white">facebook</div>
        </div>
      </div>
      <p className="max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        quasi doloribus adipisci obcaecati et cum dicta repellendus quisquam rem
        eius!
      </p>
      <p>
        Belum punya akun? <Link href="/auth/signup">Daftar</Link>
      </p>
    </>
  );
}
