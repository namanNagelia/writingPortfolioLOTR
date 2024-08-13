"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import Image from "next/image";
import oneRing from "@/../public/oneRing.png";
import map from "@/../public/mddleEarthMap.jpg";
import silmarillion from "@/../public/books/silmarillion.jpg";
import fellowship from "@/../public/books/fellowship.jpg";
import twoTowers from "@/../public/books/twoTower.jpg";
import returnKing from "@/../public/books/rotk.jpg";
import DarkLordManuscript from "./manuscript";
import "./page.css";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-parchment to-lotr-bronze text-mirkwood">
      {/* Header with Ring */}
      <header className="relative h-40 flex items-center justify-center bg-gradient-to-b from-lotr-gold to-transparent">
        <Image
          src={oneRing}
          alt="The One Ring"
          width={100}
          height={100}
          className="absolute transform scale-100 hover:scale-110 transition-transform duration-300"
        />
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8 px-4">
        {/* Title and Map Section */}
        <Title />
        {/* Introduction */}
        <section className="mb-12 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
          <h2 className="font-ringbearer text-3xl text-lotr-gold mb-4">
            Welcome, Fellow Traveler
          </h2>
          <p className="font-roboto text-lg">
            Embark on an epic journey through the ages of Middle-earth. We start
            at the beginning of time with the Silmarillion, which takes us up to
            the 2nd age. We will then dwelve into the third age in detail up to
            the end of it, and along the way, see the various factors of greed,
            power and corruption on the characters, as well as relate it to the
            author, Tolkien and his experience.
          </p>
        </section>

        {/* Books Section as Bookshelf */}
        <Books />

        {/* Sauron's Perspective Teaser */}
        <section className="mb-12 bg-mirkwood text-parchment p-6 rounded-lg shadow-lg">
          <h2 className="font-ringbearer text-3xl text-lotr-gold mb-4">
            The Dark Lord's Tale
          </h2>
          <p className="font-roboto text-lg">
            Dare to see the story through the eyes of Sauron himself. Explore an
            alternative perspective that challenges everything you thought you
            knew about our Dark Lord.
          </p>
        </section>
        <DarkLordManuscript />
      </main>

      {/* Footer */}
      <footer className="bg-mirkwood text-parchment text-center py-4 mt-12">
        <p className="font-roboto text-sm">
          © 2024 Naman Nagelia's Journey Through Middle-earth
        </p>
      </footer>
    </div>
  );
};

const Books = () => {
  const books = [
    {
      title: "The Silmarillion",
      image: silmarillion,
      description:
        "The dawn of creation: Explore the mythical beginnings of Middle-earth, from the Music of the Ainur to the First Age of the Elves. The shaping and origins of Middle Earth. Press Read More for a book review.",
      fullSummary: `
    <p><strong>Introduction:</strong></p>
    <p>    J.R.R. Tolkien's The Silmarillion is like a bible for the legendarium he created. This collection of five books dives deep into the mythology of not only Middle Earth but the world, starting from the one creator Eru, and how he created the world where the events of the Hobbit and Lord of the Rings take place. It goes through each age of the world and offers a unique and immersive experience that will expand anyone's understanding of Middle Earth.</p>
    
    <p><strong>Relevance</strong></p>
    <p>    Sometimes, you may be reading books, or watching movies and shows, and you may want to learn more about the world. Middle Earth is a diverse world of different creatures, factions, races and creatures, along with their relations. The Silmarillion provides a backdrop for all of this, starting from the beginning of time and providing the context and historical events of the word up to the events following the Lord of the Rings. This is able to deeply immerse readers into the world, and help them gain a deeper understanding of Tolkien's legendarium and his body of work as a whole.</p>
    
    <p><strong>The 5 Sections</strong></p>
    <p>The Silmarillion is divided into 5 parts, each offering a different aspect of the world.</p>
    <p>1. Ainulindale is the creation myth of the world, similar to the old testament. Eru creates the universe through music sung by the Ainur</p>
    <p>2. Valaquenta introduces the Valar and Maiar, who descend to rule the world. However, we see rebellion in Melkor, who adds evil to the world and sets the stage for Sauron later on.</p>
    <p>3. Quenta Silmarillion is the longest part of the book. It tells about the first age, the elves coming into the world, and their history. We see the creation of the SIlmarils by Feanor, the wars and tragedies over the possession of it, and how Morgorth came to steal them.</p>
    <p>4. Akallabeth is about the men. It accounts for the downfall of Numenor and shows the beginning of Sauron and his influence of evil onto the world, as well as the rise of Isildur.</p>
    <p>5. Of the Rings of Power and the Third Age is a bridge to The Hobbit and the Lord of the Rings, telling about the creation of the Rings of Power, and Sauron eventually betraying everyone with his one ring. It goes all the way up to the destruction of the one Ring.</p>
    
    <p><strong>Analysis of the 5:</strong></p>
    <p>The 5 parts are a historical recount of the world, from the beginning to the "present day" as you may see with the hobbits and the fall of Sauron. For those who read only the Lord of the Rings, or watched the movies, The Silmarillion offers a deeper appreciation of Tolkien's world-building. It's a treasure trove of lore and history that enriches the reader's understanding of Middle-earth. The book introduces readers to new characters, places, and events which are briefly referenced in Tolkien's other works. It allows readers to see the grand scope of Tolkien's imagination and the intricate details that make his world so compelling. The reader can get engaged with characters in one point of the book, and then face the tragedies only a few pages later. The book is not just an intriguing and informative read, but a deeply emotional one as well.</p>
    
    <p><strong>Themes:</strong></p>
    <p>Beyond its contribution to the lore, The Silmarillion conveys themes of heroism, sacrifice, and the struggle between good and evil. These themes resonate with young readers who can draw parallels between the epic battles and personal struggles of Tolkien's characters and their own lives. The book also offers many different mediums of how it is written,  some poetry, and mythic language, which gives a different reading experience. There are songs and poems weaved in. There is the tragic love story of "Of Beren and Lúthien," which shows the themes of sacrifice and love, a ending that will leave anyone in tears. The book as a whole is a unique collection of stories that will deeply immerse readers and engage them with Tolkien's world.</p>
    <p>In addition to this, the themes of power, greed and corruption are explored, namely through the dark lord of the time, Melkor. His unchecked jealousy, ambition and lust for dominion corrupted his once great spirit and lead him to bring destruction and terror to early middle earth. The tale of Fëanor and the creation of the Silmarils epitomizes this struggle, as Fëanor's overwhelming pride and attachment to his creations lead to a series of tragic events, fueled by his desire for power and control. These themes serve as a cautionary tale, reminding readers of the dangers of succumbing to the allure of power.</p>
    
    <p><strong>Conclusion:</strong></p>
    <p>There has been a resurgence of interest in Tolkien's works and Middle Earth. Most of this can be credited to Amazon's show, The Lord of the Rings: The Rings of Power, season 2 which is airing later this month. This show has sparked renewed curiosity about the lore and history that underpin the show. The Silmarillion, with its detailed account of the creation of the Rings of Power and the early history of Middle-earth, is the perfect complement to the series, allowing you to learn the history and backdrop of Middle Earth.</p>
    <p>Moreover, the 50th anniversary of the book's posthumous publication is coming up in 2027, providing an excellent opportunity to revisit this classic and reflect on its significance. This anniversary gives us a chance to celebrate Tolkien's legacy and introduce a new generation of readers to his mythological masterpiece, one which will never fall.</p>
    <p>The Silmarillion is like the bible of Middle Earth. It starts from the beginning of time, and catches readers up to the present events of the Lord of the Rings. Upon reading it, you will leave with a deeper understanding, appreciation, and connection of Middle-Earth and the world of Tolkien.</p>
      `,
    },
    {
      title: "The Fellowship of the Ring",
      image: fellowship,
      description:
        "The journey begins: Follow Frodo Baggins and his companions as they set out from the Shire. Press Read More for my analysis of our heroes and villains. ",
      fullSummary: `
        <p>The Fellowship of the Ring starts in the Shire, the peaceful hometown of the hobbits. What initially stands out, and continues to do so throughout the entire series, is Tolkien's masterful world-building. With Middle Earth being completely different from our world, Tolkien didn't just set the stage with basic characters, tribes, and regions; he took it a step further: he created an entire elvish language present in parts of the book, and developed a rich history and backstory for every tribe, region, place, and aspect of Middle Earth.</p>
      
        <p>From the beginning, with the prologue about hobbits, readers get a sense of how much effort Tolkien put into creating a believable and immersive world. The history of Middle-earth feels ancient and real, making the story more impactful. For instance, the detail in Hobbit customs grounds the fantastical elements in something familiar and relatable, allowing us to connect with the various races as Tolkien introduces dwarves, elves, goblins, orcs, and other creatures encountered on the journey through Middle Earth.</p>
      
        <p>As we follow Frodo, we learn about the One Ring and its powerful temptation. One quote exemplifies this:</p>
      
        <blockquote>"The Ring was trying to get back to its master. It had slipped from Isildur's hand and betrayed him; then when a chance came it caught poor Déagol, and he was murdered; and after that Gollum, and it had devoured him."</blockquote>
      
        <p>This quote illustrates the controlling nature and temptation of the Ring, with it acting as a symbol of unsatiated desire. With little to no resistance to one's desires, it eroded and "devoured" Gollum, a theme that continues throughout the series. This is also evident in the Nazgûl.</p>
      
        <p>The Nazgûl epitomize the loss of self to desire. Their relentless pursuit of Frodo and the Ring highlights the overpowering nature of their temptation and their transformation into husks of their former selves. They are living embodiments of the perils of succumbing to temptation. This theme is especially potent when Frodo feels the Ring's pull and the Black Riders' creeping presence. His resistance, though fraught with struggle, contrasts sharply with the Nazgûl's complete surrender to it.</p>
      
        <p>Additionally, Boromir's struggle with the temptation of the Ring serves as a powerful reminder of the corrupting influence it wields, even over the noblest of hearts. His eventual fall and tragic death underscore the dangerous nature of unchecked ambition and desire, reinforcing the central theme of the Ring's insidious power. His willingness to hurt his friends to obtain the Ring exemplifies the dangers that obsession, greed for power, and corruption can have on anyone.</p>
      
        <p>This theme of corruption, coupled with the immersive world-building, sets the stage for the ongoing battle between good and evil that unfolds throughout the series.</p>
      `,
    },
    {
      title: "The Two Towers",
      image: twoTowers,
      description:
        "Trials and tribulations: The fellowship is broken, but hope endures. Witness the epic battles, unlikely alliances, and personal struggles that will shape the future of Middle-earth. Press Read More for my analysis.",
      fullSummary: `

  <p>The Two Towers is one of the more complex books of the trilogy. With the sudden introduction of new factions like Rohan, new characters, creatures like Ents, and more insight into the world of Middle Earth, it further shows the intricacies of the world that Tolkien made, and started building up to the climax.</p>

  <p>One of the central themes explored is rebirth and renewal, exemplified by Gandalf's resurrection. His return as Gandalf the White symbolizes a mythic rebirth, with increased power and determination to defeat Saruman and Sauron.</p>

  <blockquote>"I am white now.” "Indeed I am Saruman, one might almost say, Saruman as he should have been,” </blockquote>

  <p> I interpreted this transformation as him trying to show that he is more powerful now, and he is on the same level as Saruman regarding power. This event felt like a mythic rebirth. He comes back stronger, wiser, and more determined to defeat Saruman and Sauron and save Middle Earth. However, one point of confusion still exists for me: how did he get reborn? Middle Earth and its lore and complexities are so deep that it is sometimes hard to understand the higher powers that govern the world and how it works. This unknown is something that makes Lord of the Rings unique and special.</p>

  <p>The second aspect of the book that caught my attention was the bipolar personality of Gollum. Gollum's dual personality, torn between his original self, Sméagol, and the corrupted, power-hungry Gollum, illustrates the struggle between good and evil within a single being. We frequently see Gollum’s dialogue depicting a contrast between these two personalities, where he is either lusting for the precious or trying to help Frodo. What surprised me the most was the sympathy Frodo showed to Gollum despite Sam’s resistance. This sympathy stems from both of their interactions with the ring. Frodo sees Gollum as a reflection of himself, and what could happen if the ring keep’s corrupting him. Frodo tried to empathize with Gollum, a moving line saying </p>

  <blockquote>"You were not so very different from a Hobbit once, were you... Smeagol."</blockquote>

  <p> This line moved me: Frodo tried to relate with Gollum, and saw Gollum as one of his own despite the degraded shape and corruption the ring has done to him. This moment underscores the themes of mercy and redemption, highlighting Frodo’s hope that Gollum can still be saved. It also illustrates the psychological impact the Ring has on its bearers not named Sauron.</p>

  <p> The most exciting part was the battle between men and Uru khai. The defense of Helm's Deep stands out as a thrilling and pivotal moment. The bravery and determination of the Rohirrim, led by Aragorn and his companions against the overwhelming forces of Saruman's Uruk-hai, are awe-inspiring. This battle showcases the themes of courage, unity, and the fight against overwhelming odds. This shows the power of the fellowship and an important allyship that formed, which will likely be revisited and pivotal to the final battle in the last book.</p>


  <p>Revisiting "The Two Towers" has been a rewarding experience, revealing new layers and insights that I missed in my initial reading. The complexities and depth of Tolkien's world continue to amaze and captivate me but also confuse me at the same time.</p>


      `,
    },
    {
      title: "The Return of the King",
      image: returnKing,
      description:
        "The final stand: All paths converge in the ultimate battle for Middle-earth. Kingdoms rise and fall, heroes are forged in fire, and the fate of all free peoples hangs by a thread. The age of the Ring comes to its earth-shattering (literally) conclusion. Press Read more for this analysis.",
      fullSummary: `
      <p>In my rereading of Return of the King, I saw this book as the most intense one of the series. With this book being the climax of the journeys, having the battle of Gondor, and eventually the conclusion of the trilogy, I was very invested in it throughout reading, and came across multiple themes. 
      </p>
      <p>One key theme I examined in my first post was the burden and temptation of the ring. This came back to haunt Frodo in this book. The closer Frodo gets to Mount Doom, the tighter and the greater temptation that the ring exerts on him. Frodo’s journey illustrates the effects of power and corruption, both of which are symbolized by the ring. The line
      </p>
      <blockquote>"I am glad you are here with me. Here at the end of all things, Sam” (The Return of the King, Book VI, Chapter 3)”</blockquote>
      <p> is particularly moving because it underscores the deep bond between Frodo and Sam. Despite the overwhelming pressure and the temptation of the Ring, Frodo finds solace in friendship, which is a recurring theme throughout the series. Tolkien had a clear goal, to underscore the importance of your relationship and bonds, and not to put this over power.
      </p>
      <p>The final moments at Mount Doom were tension-building, suspenseful, and intense. Frodo failed in his mission. After resisting the power for so long, he succumbed, and similar to how Isildur did, he decided not to destroy the ring. Only after Gollum takes the ring, and stumbles, show a sort of divine intervention. This shows that no one can ever resist the ring. Even Hobbets, who Gandalf said were great ring bearers, were not immune to this, and Frodo couldn’t bring himself to destroy the ring. Only freak luck was able to complete and resolve the quest.
      </p>
      <p>The battle of Gondor was one of the peak and compelling moments in the story. These battle scenes at Gondor are rich with deeper themes. They showcase the struggle between light and darkness, morally and physically. Characters are pushed to their limits, revealing their true natures. Courage, sacrifice, leadership, and hope are recurring themes. Gandalf’s coolness under immense pressure, Theoden’s sacrifice, and Eowyn’s bravery all highlight different facets of heroism. With this book being written during and after the two World Wars, I can relate aspects of this to what happened in these wars. Jrr Tolkien may have written this to serve as a part of an allegory and relate to the sacrifices, journey, and heroism of the many soldiers that fought during both World Wars.
      </p>
      <p>Finally, the very end of the book, with Frodo leaving Middle Earth, shows a powerful theme of sacrifice. Frodo had to leave and could never live a normal life again. The ring corrupted him so much, that he couldn’t live normally anymore, and he suffered its immense torture, for the good of the people. The ending was very sad as our hero was gone, but it shows the selflessness of Frodo.
      </p>
      <p>In conclusion, "The Return of the King" is indeed the most intense and compelling installment of the trilogy. It brings the various threads of the story to a dramatic and satisfying climax while exploring profound themes such as the corrupting nature of power, the importance of friendship and loyalty, the reality of sacrifice, and the enduring struggle between good and evil. 
      </p>
      `,
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<any>(null);

  const openModal = (index: any) => {
    setSelectedBook(books[index]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <section className="mb-12">
      <h2 className="font-ringbearer text-4xl text-lotr-gold text-center mb-8">
        The Journey Unfolds
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-lotr-gold"></div>
        {books.map((book, index) => (
          <div
            key={index}
            className={`flex flex-col mb-16 ${
              index % 2 === 0 ? "items-start" : "items-end"
            }`}
          >
            <div
              className={`flex items-center w-full ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <div className="relative">
                  <div className="relative">
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={200}
                      height={300}
                      className="rounded-lg shadow-lg inline-block transition-transform duration-300 hover:scale-105"
                    />
                    <span className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1">
                      Credit: [Christopher Moisan and Johan Egerkrans]
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-8 h-8 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-lotr-gold border-4 border-parchment z-10"></div>
              <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                <h3 className="font-ringbearer text-2xl text-forest-green mb-2">
                  {book.title}
                </h3>
                <p className="font-roboto text-sm text-mirkwood mb-4">
                  {book.description}
                </p>
                <button
                  onClick={() => openModal(index)}
                  className="flex items-center font-roboto text-sm text-mirkwood hover:text-lotr-bronze transition-colors duration-300"
                >
                  Read More <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50">
          <div className="bg-gradient-to-b from-parchment to-lotr-bronze rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative">
            <div className="sticky top-0 bg-mirkwood p-4 border-b-2 border-lotr-gold">
              <h3 className="font-ringbearer text-3xl text-lotr-gold text-center">
                {selectedBook.title}
              </h3>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-lotr-gold hover:text-parchment transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-5rem)] modal-scrollbar">
              <div
                className="font-minion text-mirkwood prose prose-lg max-w-none modal-content"
                dangerouslySetInnerHTML={{ __html: selectedBook.fullSummary }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-lotr-bronze to-transparent pointer-events-none"></div>
          </div>
        </div>
      )}
    </section>
  );
};

const Title = () => {
  return (
    <section className="mb-12 text-center">
      <h1 className="font-ringbearer text-5xl text-lotr-gold drop-shadow-lg mb-4">
        The Journey Through Middle-earth
      </h1>
      <h2 className="font-ringbearer text-3xl text-mirkwood mb-8">
        Power, Corruption, and Greed in Tolkien's Middle-earth
      </h2>
      <div className="relative">
        <Image
          src={map}
          alt="Map of Middle-earth"
          width={800}
          height={600}
          className="rounded-lg shadow-lg mx-auto"
        />
        <span className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1">
          Credit: [Deviant Art/Caeora]
        </span>
      </div>
    </section>
  );
};

export default HomePage;
