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
            Embark on an epic journey through the ages of Middle-earth. Write
            some more to introduce the theme, mention about tolkien, the great
            war, etc
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

const Books = () => {
  const books = [
    {
      title: "The Silmarillion",
      image: silmarillion,
      description:
        "The dawn of creation: Explore the mythical beginnings of Middle-earth, from the Music of the Ainur to the First Age of the Elves. Witness the shaping of the world and the origins of the greatest conflicts that would echo through the ages.",
      fullSummary:
        "... [Your full 2+ pages of content for The Silmarillion] ...",
    },
    {
      title: "The Fellowship of the Ring",
      image: fellowship,
      description:
        "The journey begins: Follow Frodo Baggins and his companions as they set out from the Shire, facing ancient evils and forging unbreakable bonds. The fate of Middle-earth hangs in the balance as the shadow of Mordor looms.",
      fullSummary:
        "... [Your full 2+ pages of content for The Fellowship of the Ring] ...",
    },
    {
      title: "The Two Towers",
      image: twoTowers,
      description:
        "Trials and tribulations: The fellowship is broken, but hope endures. Witness the epic battles, unlikely alliances, and personal struggles that will shape the future of Middle-earth. The war for the One Ring enters its darkest hour.",
      fullSummary: "... [Your full 2+ pages of content for The Two Towers] ...",
    },
    {
      title: "The Return of the King",
      image: returnKing,
      description:
        "The final stand: All paths converge in the ultimate battle for Middle-earth. Kingdoms rise and fall, heroes are forged in fire, and the fate of all free peoples hangs by a thread. The age of the Ring comes to its earth-shattering conclusion.",
      fullSummary:
        "... [Your full 2+ pages of content for The Return of the King] ...",
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
                <Image
                  src={book.image}
                  alt={book.title}
                  width={200}
                  height={300}
                  className="rounded-lg shadow-lg inline-block transition-transform duration-300 hover:scale-105"
                />
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-[#f2e6d9] rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-[#f2e6d9] p-4 border-b border-lotr-bronze">
              <h3 className="font-ringbearer text-3xl text-lotr-gold">
                {selectedBook.title}
              </h3>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-mirkwood hover:text-lotr-bronze"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <p className="font-roboto text-mirkwood whitespace-pre-line">
                {selectedBook.fullSummary}
              </p>
            </div>
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
        The Duality of Power, Corruption, and Greed in Tolkien's Middle-earth
      </h2>
      <Image
        src={map}
        alt="Map of Middle-earth"
        width={800}
        height={600}
        className="rounded-lg shadow-lg mx-auto"
      />
    </section>
  );
};

export default HomePage;
