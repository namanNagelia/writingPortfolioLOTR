import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const DarkLordManuscript = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="mb-12 bg-mirkwood text-parchment p-6 rounded-lg shadow-lg">
      <h2 className="font-ringbearer text-3xl text-lotr-gold mb-4">
        The Dark Lord's Tale
      </h2>

      <div className="bg-lotr-bronze text-mirkwood mb-6 p-6 rounded-lg">
        <h3 className="font-ringbearer text-2xl mb-4">Analysis</h3>
        <div className="font-roboto">
          <p>
            This unique manuscript offers a fascinating glimpse into the mind of
            Sauron, the primary antagonist of The Lord of the Rings. By
            presenting events from his perspective, we gain insight into his
            motivations, fears, and the rationale behind his actions.
          </p>
          <p className="mt-4">
            Throughout the stories, Sauron makes very few appearances. We know
            little about him apart from his desire for power and control. This
            manuscript provides a more nuanced portrayal, revealing a character
            who sees himself as a force for order and progress in a chaotic
            world, as well as his lust and desire for the One Ring.
          </p>
        </div>
      </div>

      <div className="bg-parchment text-mirkwood p-6 rounded-lg shadow-inner">
        <h3 className="font-ringbearer text-2xl mb-4">The Manuscript</h3>
        <div
          className={`font-minion text-lg overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[1000px]" : "max-h-64"
          }`}
        >
          <p>
            As I gaze upon this realm of Middle Earth, from the shadows of this
            tower, I see this realm that defies my dominion, age after age. That
            very defiance is amusing. For I am Sauron, the Dark Shadow that will
            never fade, the eye that will never close, and the master of my
            destiny, and that of this realm. I have searched for thousands of
            years for my one beloved, my precious, and my greatest creation, my
            One Ring. My power. Their downfall. The key for me to regain myself,
            and control of Middle Earth. These mortals seek to destroy it, do
            they not see the futility in such efforts?
          </p>
          <p className="mt-4">
            I will remember my time as Mairon, the mightiest of the Maia and
            servant of Aule. In such a young world, I wanted order and
            perfection. But how Naive was I? Morgoth showed me my true
            intentions, a path of power, domination, and unyielding will, one to
            quench all my desires. I learned to harness the deepest fears of
            others, bring them to my whim, and use them for my uprising. At the
            defeat of Morgoth, I took his mantle, fulfilling my vision, a world
            bound by the survival of the fittest, the strong survive, the weak
            will die.
          </p>
          <p className="mt-4">
            I created the tool that would help me with domination, my One Ring,
            my perfect golden circle, adorned with the forbidden Black Speech. I
            imbued this with my power and my spirit, forever changing my and
            Middle Earth. This ring isn't a tool, it is a means to an end. It is
            my heart, my soul my everything. We are two halves to the whole.
            Together, we are what will control Middle Earth. And without it, I
            am nothing.
          </p>
          <p className="mt-4">
            The Free Peoples of Middle-earth believe me to be a monster, a Dark
            Lord consumed by ambition and a lust for power. But they do not
            understand. They do not see the beauty and perfection I have
            created. The Ring is not a curse, but a blessing. It is the key to
            order, stability, to and harmony in my vision of Middle Earth.
          </p>
          <p className="mt-4">
            The Fellowship thinks they can thwart my plans, but they are mere
            pawns in a game they cannot begin to understand. Aragorn, the
            “ranger”, clings to the remnants of Isildur’s faded glory. Frodo,
            the fragile Ring-bearer, stumbles forward, burdened by a task that
            is beyond his mortal comprehension. And Gandalf underestimates the
            depth of my influence, the inevitability of my return to power. They
            are but fleeting obstacles, soon to be crushed beneath my heel. They
            do not comprehend my devotion, the all-consuming passion that drives
            me. I will stop at nothing to reclaim my treasure, to reunite with
            my missing half. No one will be spared at my conquest.
          </p>
          <p className="mt-4">
            Middle-earth's free peoples cling to their hope, but hope is a
            fragile thing. They do not realize that my defeat will bring as much
            chaos as my rule. Without my guiding hand, the lands will fall into
            disarray, plunged into the very darkness they seek to escape. I am
            the balance between light and shadow, the order amidst the chaos. I
            am the one who maintains the delicate balance of power, who keeps
            the forces of darkness at bay.
          </p>
          <p className="mt-4">
            I watch, I wait, I plan. The Fellowship thinks to defeat my will,
            but they are all just mere pawns in a game. I will reclaim my
            beloved, my previous, and when I do, all of Middle-earth will
            tremble before our reunited might. For I am Sauron, the one who will
            never be defeated.{" "}
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center w-full mt-4 font-roboto text-sm text-mirkwood hover:text-lotr-gold transition-colors duration-300"
        >
          {isExpanded ? (
            <>
              Collapse <ChevronUp size={16} className="ml-1" />
            </>
          ) : (
            <>
              Read More <ChevronDown size={16} className="ml-1" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default DarkLordManuscript;
