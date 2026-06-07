import { Link } from "react-router-dom";
import armyImg from "../assets/army-logo.png";
import navyImg from "../assets/navy-logo.png";
import airforceImg from "../assets/airforce-logo.png";

function Forces() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-5xl font-bold text-center mb-12">
        Indian Armed Forces
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link
          to="/army"
          className="
bg-white
rounded-2xl
shadow-lg
p-8
hover:scale-105
hover:shadow-2xl
transition-all
duration-300
border-t-4
border-green-600
"
        >
          <div className="flex flex-col items-center mb-6">
            <img
              src={armyImg}
              alt="Indian Army"
              className="h-24 w-24 object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
            />

            <h3 className="text-3xl font-bold">Indian Army</h3>
            <p className="text-green-700 font-semibold mt-2">
              Service Before Self
            </p>
          </div>

          <p>Commands, Regiments, Operations, History and Equipment.</p>
        </Link>

        <Link
          to="/navy"
          className="
bg-white
rounded-2xl
shadow-lg
p-8
hover:scale-105
hover:shadow-2xl
transition-all
duration-300
border-blue-600"
        >
          <div className="flex flex-col items-center mb-6">
            <img
              src={navyImg}
              alt="Indian Navy"
              className="h-24 w-24 object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
            />

            <h3 className="text-3xl font-bold">Indian Navy</h3>
            <p className="text-blue-700 font-semibold mt-2">Shanno Varunah</p>
          </div>

          <p>Fleets, MARCOS, Ships, Naval Aviation and Operations.</p>
        </Link>

        <Link
          to="/airforce"
          className="
bg-white
rounded-2xl
shadow-lg
p-8
hover:scale-105
hover:shadow-2xl
transition-all
duration-300
border-red-600"
        >
          <div className="flex flex-col items-center mb-6">
            <img
              src={airforceImg}
              alt="Indian Air Force"
              className="h-24 w-24 object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
            />

            <h3 className="text-3xl font-bold">Indian Air Force</h3>
            <p className="text-red-700 font-semibold mt-2">
              Touch The Sky With Glory
            </p>
          </div>

          <p>Aircraft, Commands, Air Operations and Air Defence.</p>
        </Link>
      </div>
    </div>
  );
}

export default Forces;
