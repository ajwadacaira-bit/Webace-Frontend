"use client";

export default function VideoHero() {
  return (
    <section className="bg-black text-white py-36 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Transform Raw Footage Into Powerful, Story Driven Videos That
          Captivate, Engage and Convert
        </h1>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-gray-700 mx-auto my-10"></div>

        {/* Paragraphs */}
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">

          <p>
            Video is the strongest form of communication in the digital world today.
            It captures attention faster than text, delivers emotion better than images
            and builds trust more effectively than any other medium.
          </p>

          <p>
            But raw footage alone cannot achieve this. It requires thoughtful editing,
            storytelling, polishing and structuring for it to create impact.
          </p>

          <p>
            This is where professional video editing becomes essential.
          </p>

          <p>
            At WebAce, our Video Editing service is designed to turn your
            unprocessed footage into compelling, premium quality videos that
            reflect your brand identity and elevate your communication.
            Every frame, every cut, every transition and every sound element
            is crafted with intention.
          </p>

          <p>
            We edit videos that are not just visually appealing but strategically
            aligned with your business goals.
          </p>

          <p>
            Whether you need social media content, product showcases,
            corporate communication or educational videos, we bring clarity,
            creativity and structure to every project.
          </p>

        </div>

        {/* CTA */}
        <div className="mt-14">
          <button className="bg-white text-black px-10 py-4 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
            Get Your Video Editing Strategy →
          </button>
        </div>

      </div>
    </section>
  );
}