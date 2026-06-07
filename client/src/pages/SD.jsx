function SD() {
  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-10">
        Self Description
      </h1>

      <textarea
        className="w-full border p-4 mb-6"
        rows="5"
        placeholder="What do your parents think about you?"
      />

      <textarea
        className="w-full border p-4 mb-6"
        rows="5"
        placeholder="What do your teachers think about you?"
      />

      <textarea
        className="w-full border p-4 mb-6"
        rows="5"
        placeholder="What do your friends think about you?"
      />

      <textarea
        className="w-full border p-4 mb-6"
        rows="5"
        placeholder="What do you think about yourself?"
      />

      <textarea
        className="w-full border p-4"
        rows="5"
        placeholder="What are your future goals?"
      />

    </div>
  );
}

export default SD;