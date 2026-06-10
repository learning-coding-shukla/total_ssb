function WATResult() {
  const { setId } = useParams();

  const progress = JSON.parse(
    localStorage.getItem(`wat_set_${setId}`) || "{}"
  );

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full text-center">

        <h1 className="text-5xl font-bold mb-6 text-green-600">
          WAT Completed
        </h1>

        <h2 className="text-3xl font-semibold mb-6">
          Set {setId}
        </h2>

        <div className="space-y-4 text-lg">

          <p>
            <strong>Words Displayed:</strong> 60
          </p>

          <p>
            <strong>Time Per Word:</strong> 15 Seconds
          </p>

          <p>
            <strong>Total Duration:</strong> 15 Minutes
          </p>

          {progress.completedAt && (
            <p>
              <strong>Completed On:</strong>{" "}
              {new Date(
                progress.completedAt
              ).toLocaleString()}
            </p>
          )}

        </div>

        <p className="text-green-600 font-semibold text-xl mt-8 mb-8">
          Practice Completed Successfully ✓
        </p>

        <div className="flex justify-center gap-4">

          <Link
            to="/wat"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Practice Another Set
          </Link>

          <Link
            to="/dashboard"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
          >
            View Dashboard
          </Link>

        </div>

      </div>
    </div>
  );
}

export default WATResult;