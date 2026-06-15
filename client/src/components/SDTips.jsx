const tips = [
  "Be honest.",
  "Mention both strengths and weaknesses.",
  "Avoid copying sample responses.",
  "Stay consistent with your TAT, WAT and SRT.",
  "Write naturally and positively."
];

export default function SDTips() {
  return (
    <div className="bg-slate-900 rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        💡 Tips for Self Description Test
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-lg p-4"
          >
            ✅ {tip}
          </div>
        ))}

      </div>

    </div>
  );
}