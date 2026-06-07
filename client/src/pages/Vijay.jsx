function Vijay() {
  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-5xl font-bold text-center mb-8">
        Operation Vijay
      </h1>

      <img
        src="/knowledge/vijay.jpg"
        alt="Operation Vijay"
        className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-xl shadow-lg mb-8"
      />

      <div className="bg-white p-6 rounded-xl shadow mb-8">

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p>
          Operation Vijay was launched by the Indian Armed Forces
          in May 1999 to evict Pakistani intruders from Indian
          territory in the Kargil sector of Jammu & Kashmir.
          Through coordinated Army and Air Force operations,
          India successfully regained control of all major
          positions occupied by the enemy.
        </p>

      </div>

      <div className="bg-green-50 p-6 rounded-xl shadow mb-8">

        <h2 className="text-3xl font-bold mb-4">
          Important Facts
        </h2>

        <p>
          Operation Vijay showcased the bravery, determination
          and professionalism of the Indian Armed Forces. Indian
          troops fought at extreme altitudes above 16,000 feet.
          The operation resulted in the recapture of strategic
          peaks including Tiger Hill and Tololing, restoring the
          sanctity of the Line of Control.
        </p>

      </div>

      <div className="bg-white p-6 rounded-xl shadow mb-8">

        <h2 className="text-3xl font-bold mb-4">
          Key Highlights
        </h2>

        <ul className="list-disc pl-6 space-y-2">

          <li>Launched in May 1999</li>

          <li>Part of the Kargil Conflict</li>

          <li>Tiger Hill Recaptured</li>

          <li>Tololing Recaptured</li>

          <li>Indian Victory Declared on 26 July 1999</li>

          <li>Supported by Operation Safed Sagar (IAF)</li>

        </ul>

      </div>

      <div className="bg-red-50 p-6 rounded-xl shadow mb-8">

        <h2 className="text-3xl font-bold mb-4">
          Heroes of Operation Vijay
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <a
            href="https://en.wikipedia.org/wiki/Vikram_Batra"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white p-4 rounded-lg text-center"
          >
            Captain Vikram Batra PVC
          </a>

          <a
            href="https://en.wikipedia.org/wiki/Manoj_Kumar_Pandey"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white p-4 rounded-lg text-center"
          >
            Captain Manoj Kumar Pandey PVC
          </a>

          <a
            href="https://en.wikipedia.org/wiki/Yogendra_Singh_Yadav"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white p-4 rounded-lg text-center"
          >
            Grenadier Yogendra Singh Yadav PVC
          </a>

          <a
            href="https://en.wikipedia.org/wiki/Sanjay_Kumar_(soldier)"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white p-4 rounded-lg text-center"
          >
            Rifleman Sanjay Kumar PVC
          </a>

        </div>

      </div>

      <div className="bg-blue-50 p-6 rounded-xl shadow mb-8">

        <h2 className="text-3xl font-bold mb-4">
          Learn More
        </h2>

        <a
          href="https://en.wikipedia.org/wiki/Operation_Vijay_(1999)"
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

          <li>What was Operation Vijay?</li>

          <li>Why was Tiger Hill important?</li>

          <li>Who was Captain Vikram Batra?</li>

          <li>What was Operation Safed Sagar?</li>

          <li>When is Kargil Vijay Diwas celebrated?</li>

          <li>Why was the Kargil War fought?</li>

        </ul>

      </div>

    </div>
  );
}

export default Vijay;