import Link from "next/link";
export default function Signup() {
  return (
    <>
      <h1>Buat Akun</h1>
      <input type="text" />
      <button>Buat Akun</button>
      <p>Atau gunakan akun</p>
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
        Udah punya akun? <Link href="/auth/signin">Log in aja</Link>
      </p>
    </>
  );
}
