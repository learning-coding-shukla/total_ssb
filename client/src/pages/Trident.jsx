function Trident() {
  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-5xl font-bold text-center mb-8">
        Operation Trident
      </h1>

      <img
        src="/knowledge/trident.jpg"
        alt="Operation Trident"
        className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-xl shadow-lg mb-8"
      />

      <div className="bg-white p-6 rounded-xl shadow mb-8">

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p>
          Operation Trident was a daring naval attack conducted
          by the Indian Navy on the night of 4 December 1971
          against Karachi Harbour during the Indo-Pak War of 1971.
          Using missile boats, the Indian Navy inflicted heavy
          damage on Pakistani naval assets and fuel reserves,
          establishing naval superiority in the Arabian Sea.
        </p>

      </div>

      <div className="bg-green-50 p-6 rounded-xl shadow mb-8">

        <h2 className="text-3xl font-bold mb-4">
          Important Facts
        </h2>

        <p>
          Operation Trident was India's first combat use of
          anti-ship missiles. The attack sank Pakistani vessels,
          destroyed fuel storage tanks at Karachi and significantly
          weakened Pakistan's naval capability. The success of the
          operation is commemorated every year as Indian Navy Day
          on 4 December.
        </p>

      </div>

      <div className="bg-white p-6 rounded-xl shadow mb-8">

        <h2 className="text-3xl font-bold mb-4">
          Key Highlights
        </h2>

        <ul className="list-disc pl-6 space-y-2">

          <li>Conducted on 4 December 1971</li>

          <li>Target: Karachi Harbour</li>

          <li>Executed by Indian Navy missile boats</li>

          <li>Destroyed Pakistani fuel installations</li>

          <li>Major Indian Naval Victory</li>

        </ul>

      </div>

      <div className="bg-blue-50 p-6 rounded-xl shadow mb-8">

        <h2 className="text-3xl font-bold mb-4">
          Learn More
        </h2>

        <a
          href="https://en.wikipedia.org/wiki/Operation_Trident_(1971)"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Read Full Wikipedia Article
        </a>

      </div>

      <div className="bg-orange-50 p-6 rounded-xl shadow">

        <h2 className="text-3xl font-bold mb-4">
          SSB Interview Questions
        </h2>

        <ul className="list-disc pl-6 space-y-2">

          <li>What was Operation Trident?</li>

          <li>Why is 4 December celebrated as Navy Day?</li>

          <li>Which city was targeted?</li>

          <li>What was the significance of Karachi Harbour?</li>

          <li>How did Operation Trident help India in 1971?</li>

        </ul>

      </div>

    </div>
  );
}

export default Trident;