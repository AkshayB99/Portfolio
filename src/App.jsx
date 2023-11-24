
import Image from "./assets/BgImage.jpeg";
import "./Style.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  

  return (
    <>
      <section
        className="flex flex-col bg-fixed bg-cover"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <Header />
        {/* Home */}
        <Home />
        {/* About */}
        <About />
        {/* Skills */}
        <Skills />
        {/* Projects */}
        <Projects />
        {/* Contacts */}
        <Contact />
        {/* check text */}
        {/* <div className="mt-[1000px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          dicta esse deserunt non quis in nihil sequi? Atque nesciunt possimus
          architecto? Itaque eius veritatis expedita non recusandae optio,
          eveniet numquam quos laboriosam veniam corrupti ratione reprehenderit
          omnis molestiae explicabo incidunt at blanditiis maiores odio iste
          consequuntur! Sapiente veritatis facere praesentium! Necessitatibus
          illo et rem. Provident laudantium itaque beatae ea numquam fugiat
          autem consectetur voluptatum maxime dolorem iusto et expedita illo rem
          sapiente unde repudiandae doloremque ullam eveniet doloribus, quia sit
          harum molestiae. Quis hic totam unde distinctio sed vel quo libero
          eaque! Placeat ipsam dolores nam, sint consequatur adipisci amet
          assumenda eum perferendis, impedit, accusantium nostrum? Quis
          laudantium molestiae quod tenetur rerum doloremque illo nisi
          aspernatur quasi vero consequatur dolor consectetur, ab ad adipisci
          quam cumque hic odio blanditiis voluptatibus quos facere amet, quia
          impedit. Officiis officia minima eius, error provident veniam
          laudantium soluta deleniti tempore qui harum incidunt delectus sequi
          sit corrupti? Ab quibusdam, soluta commodi dolores enim est
          repellendus unde, qui nisi facere id corporis maxime aperiam amet
          nobis itaque et, nulla ipsum impedit assumenda? Inventore, dicta
          explicabo. Non sequi doloribus ea, facilis accusantium aliquam culpa
          odit maiores accusamus optio, sed sapiente sit! Molestiae dolorem
          quibusdam soluta dolores vel amet, impedit animi delectus iusto! Sequi
          sint id magni laborum harum dolor rerum minima possimus voluptas quo
          aliquid error necessitatibus officiis, accusamus a sit mollitia? Quis
          quasi culpa consequatur dicta odit ipsa voluptate perferendis commodi,
          ipsum enim nesciunt inventore reprehenderit voluptas blanditiis
          corporis maiores! Sed amet nemo esse ab quos, ratione consectetur
          voluptatem illum! Laborum neque ex aspernatur adipisci eaque ut sequi
          molestiae consequatur fuga ea praesentium culpa dolor totam, nihil
          deserunt eius ab asperiores porro, explicabo tempora repellat numquam
          odio necessitatibus! Doloribus ad recusandae delectus nobis distinctio
          accusamus at libero. Nisi aut incidunt enim odit id, itaque libero
          suscipit, perspiciatis sunt voluptatibus possimus porro non modi culpa
          cumque veritatis. Voluptatibus dolor tempora, cumque qui aliquam
          ducimus maxime nesciunt beatae delectus accusantium maiores aliquid
          repudiandae odio, a aut porro nemo? Odit maiores cum dignissimos,
          sapiente error sequi in accusantium facilis exercitationem animi quis
          esse sit beatae molestias at earum dolor delectus blanditiis obcaecati
          soluta. Explicabo sit quas adipisci, sunt accusantium sequi
          necessitatibus. Eos alias reiciendis quasi possimus inventore id
          doloremque nostrum sint dolorem ea quae impedit distinctio expedita,
          consequuntur, molestias modi numquam. Consequatur eos totam blanditiis
          maiores libero, accusamus dolorum, veritatis quisquam velit impedit
          iusto? Esse minima, sint, neque provident quia dicta magni maxime
          similique veniam tenetur deserunt, expedita illo ea quidem vel
          asperiores maiores harum! Nobis, nesciunt. Deleniti dignissimos
          laboriosam, suscipit minus molestias laudantium totam, aspernatur aut
          iusto vitae alias nihil, ducimus iure? Illum labore, voluptates sequi
          sint commodi, voluptatibus voluptate ea, necessitatibus accusantium
          culpa odio tempora. Temporibus distinctio, tempore consequatur,
          necessitatibus expedita culpa ea cumque dolores quisquam perferendis
          aut saepe et aperiam consectetur quasi nihil unde quia quibusdam ipsum
          reiciendis eaque quis architecto quam dolorum? Libero, dolorem
          deleniti quis, facere beatae vero dolorum soluta magni neque ipsum
          laudantium consequuntur, minus fuga iusto reprehenderit. Harum modi
          quis perferendis.
        </div> */}
      </section>
    </>
  );
}

export default App;
