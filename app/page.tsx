import Image from "next/image";
import "./globals.css"
import Link from 'next/link'
export default function Home() {
  return (
  <>
    <div className="container">
    <h1 className="nickname">daerhtt</h1>
    <div className="profile-pic">
        <Image src="/me.jpg" alt="Фото пользователя daerhtt" width={1000} height={1000} loading="lazy"/>
    </div>
    <div className="buttons">
        <Link href="/about" className="button">About Me</Link>
        <Link href="/projects" className="button">Projects</Link>
        <Link href="/contacts" className="button">Contacts</Link>
    </div>
</div>
</>
  );
}
