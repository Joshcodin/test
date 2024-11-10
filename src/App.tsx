import Navbar from "./components/Navbar";
import ChatBot from "./components/ChatBot";
import WhatsAppButton from "./components/WhatsAppButton";
import { ArrowRight } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors">
      <Navbar />
      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 bg-slate-700 dark:bg-gray-550 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Defending Your <span className="text-blue-500">Rights </span> with
              <span className="text-blue-500"> Excellence</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Expert in legal representation when you need it most
            </p>
            <a
              href="https://www.sierra-leone.org/laws.html"
              target="_bank"
              className="inline-flex items-center bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors"
            >
              Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Practice Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Law",
                desc: "to pedestrians waiting to cross a zebra crossing, and to pedestrians and cyclists waiting to cross a parallel crossing. Horse riders should also give way to pedestrians on a zebra crossing, and to pedestrians and cyclists on a parallel crossing",
              },
              {
                title: "Civil Litigation",
                desc: "crossing (see Rule 195). Pedestrians have priority when on a zebra crossing, on a parallel crossing or at light controlled crossings when they have a green signal. You should give way ",
              },
              {
                title: "Family Law",
                desc: "pedestrians on a zebra crossing, and to pedestrians and cyclists on a parallel crossing (see Rule 195). Pedestrians have priority when on a zebra crossing, on a parallelcrossing or at light controlled crossings when they have a green signal.",
              },

              {
                title: "Criminal Defense",
                desc: "to pedestrians crossing or waiting to cross a road into which or from which you are turning. You MUST give way to pedestrians on a zebra crossing, and to pedestrians and cyclists on a parallel ",
              },
              {
                title: "Estate Planning",
                desc: "should also give way to pedestrians on a zebra crossing, and to pedestrians and cyclists on a parallel crossingAt a junction you should give way ",
              },
              {
                title: "Estate Planning",
                desc: "At a junction you should give way to pedestrians crossing or waiting tocross a road into which or from which you are turning.You MUST give way to ",
              },
            ].map((area, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="attorneys" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Legal Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Moses J. Coker",
                role: "CTO/CEO",
                image: "/image1",
              },
              {
                name: "Thomas Bangura",
                role: "Head Of Legal Services",
                image: "",
              },

              {
                name: "Collin Ogoo",
                role: "Oracle/All in One ",
                image:
                  "https://www.google.com/search?sca_esv=fd368eb7b8bad299&sxsrf=ADLYWIIonLAgnMggq58d3fK54v6yYmHXgg:1731184947548&q=Moses+j+coker&udm=2&fbs=AEQNm0A-2qeMemLzzt_2BVemHLFNuCSl5jMwuDXSDytcTb5xOFugulBwSVKrCaczAYRUt2Z5_be3-rr2W2-c6mcvRLEBy7B8OoFBW2ddfwIZ-c2oYTCDQ1iCuvHelksIAXRGLHukGddKBP6yt5C23FV63C6WSY7rsohu2QCQPF_BM43tJgshsEo&sa=X&ved=2ahUKEwiY-Nq-jtCJAxVZZ0EAHaDhJbsQtKgLegQIEBAB&biw=1500&bih=873&dpr=2#vhid=sEPcEHqLMrAlaM&vssid=mosaic",
              },
            ].map((attorney, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {attorney.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {attorney.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 justify-center  sm:px-6 lg:px-8">
          <h2 className="text-4xl bg-white font-bold dark:text-white dark:bg-slate-700 text-center rounded-md mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <form className="space-y-4 ">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-2 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-800 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-white dark:bg-gray-800 text-center text-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Office</h3>
              <p className="mb-4">
                12 Coker Street
                <br />
                Orogu,Allen Town
              </p>
              <p className="mb-4">
                Phone: (+23276) 461115
                <br />
                Email: info@justice-associates.com
              </p>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: By appointment only
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 dark:bg-gray-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Justice-4-All, All rights reserved.</p>
        </div>
      </footer>

      <WhatsAppButton phoneNumber="+23276461115" />
      <ChatBot />
    </div>
  );
}

export default App;
