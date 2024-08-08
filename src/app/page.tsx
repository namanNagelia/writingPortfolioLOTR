import React from "react";
import Image from "next/image";
import oneRing from "@/../public/oneRing.png";
import map from "@/../public/mddleEarthMap.jpg";
import silmarillion from "@/../public/books/silmarillion.jpg";
import fellowship from "@/../public/books/fellowship.jpg";
import twoTowers from "@/../public/books/twoTower.jpg";
import returnKing from "@/../public/books/rotk.jpg";

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
        <section className="mb-12 text-center">
          <h1 className="font-ringbearer text-5xl text-lotr-gold drop-shadow-lg mb-4">
            The Journey Through Middle-earth
          </h1>
          <h2 className="font-ringbearer text-3xl text-mirkwood mb-8">
            The Duality of Power, Corruption, and Greed in Tolkien's
            Middle-earth
          </h2>
          <Image
            src={map}
            alt="Map of Middle-earth"
            width={800}
            height={600}
            className="rounded-lg shadow-lg mx-auto"
          />
        </section>

        {/* Introduction */}
        <section className="mb-12 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
          <h2 className="font-ringbearer text-3xl text-lotr-gold mb-4">
            Welcome, Fellow Traveler
          </h2>
          <p className="font-roboto text-lg">
            Embark on an epic journey through the ages of Middle-earth. Write
            some more to introduce the theme, mention abot tolkien, the great
            war, etc
          </p>
        </section>

        {/* Books Section as Bookshelf */}
        <section className="mb-12">
          <div className="bg-[url('/images/wooden-shelf.jpg')] bg-cover p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-4 gap-4">
              {[
                {
                  title: "The Silmarillion",
                  image: silmarillion,
                  description: "The dawn of creation",
                },
                {
                  title: "The Fellowship of the Ring",
                  image: fellowship,
                  description: "The journey begins",
                },
                {
                  title: "The Two Towers",
                  image: twoTowers,
                  description: "Trials and tribulations",
                },
                {
                  title: "The Return of the King",
                  image: returnKing,
                  description: "The final stand",
                },
              ].map((book, index) => (
                <div
                  key={index}
                  className="bg-lotr-bronze rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:z-10"
                >
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-ringbearer text-lg text-parchment mb-2">
                      {book.title}
                    </h3>
                    <p className="font-roboto text-sm text-parchment">
                      {book.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sauron's Perspective Teaser */}
        <section className="mb-12 bg-mirkwood text-parchment p-6 rounded-lg shadow-lg">
          <h2 className="font-ringbearer text-3xl text-lotr-gold mb-4">
            The Dark Lord's Tale
          </h2>
          <p className="font-roboto text-lg">
            Dare to see the story through the eyes of Sauron himself. Explore an
            alternative perspective that challenges everything you thought you
            knew about the history of Middle-earth.
          </p>
        </section>
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

export default HomePage;
