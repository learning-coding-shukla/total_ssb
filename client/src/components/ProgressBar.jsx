function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full bg-gray-300 rounded-full h-4">
      <div
        className="bg-green-500 h-4 rounded-full"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}

export default ProgressBar;