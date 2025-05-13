import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ContactForm from "@/components/contactForm"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <hr className="border-b border-zinc-600" />
      <Hero></Hero>
      <hr className="border-b border-zinc-600" />
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  )
}
