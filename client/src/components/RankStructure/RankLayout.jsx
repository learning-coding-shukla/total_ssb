import { useMemo, useState } from "react";

import RankHero from "./RankHero";
import RankNavigation from "./RankNavigation";
import RankSearch from "./RankSearch";
import RankGrid from "./RankGrid";
import RankTimeline from "./RankTimeline";
import PromotionTimeline from "./PromotionTimeline";
import AppointmentTable from "./AppointmentTable";
import RankComparison from "./RankComparison";
import RankFacts from "./RankFacts";
import RankFAQ from "./RankFAQ";
import RankQuiz from "./RankQuiz";
import RankDetailsModal from "./RankDeatilsModal";

import rankQuiz from "../../data/rankQuiz";

const RankLayout = ({ data, comparison }) => {
  const [selectedRank, setSelectedRank] = useState(null);
  const [search, setSearch] = useState("");

  // ==========================
  // MERGE ALL RANKS
  // ==========================

  const allRanks = useMemo(() => {
    return (
      data.ranks || [
        ...(data.commissioned || []),
        ...(data.jco || []),
        ...(data.other || []),
      ]
    );
  }, [data]);

  // ==========================
  // SEARCH
  // ==========================

  const filteredRanks = useMemo(() => {
    if (!search.trim()) return allRanks;

    const q = search.toLowerCase();

    return allRanks.filter((rank) => {
      return (
        (rank.rank || "").toLowerCase().includes(q) ||
        (rank.abbreviation || "").toLowerCase().includes(q) ||
        (rank.command || "").toLowerCase().includes(q) ||
        (rank.description || "").toLowerCase().includes(q) ||
        (rank.responsibility || "").toLowerCase().includes(q) ||
        (rank.promotion || "").toLowerCase().includes(q) ||
        Object.values(rank.equivalent || {})
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    });
  }, [search, allRanks]);

  // ==========================
  // QUIZ
  // ==========================

  const quizQuestions = rankQuiz[data.quizType] || [];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* ==========================================
                    HERO
      ========================================== */}

      <RankHero
        title={`${data.service} Rank Structure`}
        subtitle={`Complete rank hierarchy, insignia, appointments, promotions, equivalent ranks and quiz of the ${data.service}.`}
        heroImage={data.heroImage}
        service={data.service}
        officers={data.commissioned.length}
        jco={data.jco.length}
        other={data.other.length}
        total={allRanks.length}
        theme={data.theme}
      />

      {/* ==========================================
                 QUICK NAVIGATION
      ========================================== */}

      <div className="sticky top-20 z-40">
        <RankNavigation
          theme={data.theme}
          officers={data.commissioned.length}
          jco={data.jco.length}
          other={data.other.length}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* ==========================================
                    SEARCH
        ========================================== */}

        <RankSearch
          value={search}
          onChange={setSearch}
          totalRanks={allRanks.length}
          filteredRanks={filteredRanks.length}
          theme={data.theme}
        />
        {/* ==========================================
                  SEARCH RESULTS
        ========================================== */}

        {search.trim() ? (
          filteredRanks.length > 0 ? (
            <RankGrid
              title="Search Results"
              ranks={filteredRanks}
              theme={data.theme}
              onView={setSelectedRank}
            />
          ) : (
            <section className="py-24 text-center">
              <h2 className="text-3xl font-bold text-white">No Rank Found</h2>

              <p className="mt-4 text-slate-400">
                Try searching with another rank name, abbreviation or
                appointment.
              </p>
            </section>
          )
        ) : (
          <>
            {/* ==========================================
                        RANK SECTIONS
            ========================================== */}

            {data.sections.map((section) => (
              <RankGrid
                key={section.title}
                title={section.title}
                ranks={section.data}
                theme={data.theme}
                onView={setSelectedRank}
              />
            ))}

            {/* ==========================================
                    PROMOTION TIMELINE
            ========================================== */}

            <section id="timeline" className="scroll-mt-28">
              <RankTimeline
                ranks={data.commissioned}
                theme={data.theme}
                onView={setSelectedRank}
              />
            </section>

            {/* ==========================================
                    CAREER PROGRESSION
            ========================================== */}

            <PromotionTimeline ranks={data.commissioned} theme={data.theme} />

            {/* ==========================================
                    APPOINTMENTS
            ========================================== */}

            <section id="appointments" className="scroll-mt-28">
              <AppointmentTable ranks={data.commissioned} theme={data.theme} />
            </section>

            {/* ==========================================
                    COMPLETE RANK CHART
            ========================================== */}

            {data.chartImage && (
              <section className="my-24">
                <div className="text-center">
                  <h2 className="text-5xl font-bold">
                    Complete Rank Structure
                  </h2>

                  <p className="mt-4 text-slate-400">
                    Official hierarchy of all
                    {` ${data.service} `}
                    ranks and insignia.
                  </p>
                </div>

                <div
                  className="
                    mt-10
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-700
                    shadow-2xl
                  "
                >
                  <img
                    src={data.chartImage}
                    alt={`${data.service} Rank Chart`}
                    className="
                      w-full
                      object-cover
                    "
                  />
                </div>
              </section>
            )}

            {/* ==========================================
                    EQUIVALENT RANKS
            ========================================== */}

            <section id="comparison" className="scroll-mt-28">
              <RankComparison data={comparison} theme={data.theme} />
            </section>

            {/* ==========================================
                    DID YOU KNOW
            ========================================== */}

            <section id="facts" className="scroll-mt-28">
              <RankFacts facts={data.facts} theme={data.theme} />
            </section>
            {/* ==========================================
                    FREQUENTLY ASKED QUESTIONS
            ========================================== */}

            <section id="faq" className="scroll-mt-28">
              <RankFAQ faqs={data.faq} theme={data.theme} />
            </section>

            {/* ==========================================
                    RANK QUIZ
            ========================================== */}

            <section id="quiz" className="scroll-mt-28">
              <RankQuiz questions={quizQuestions} theme={data.theme} />
            </section>
          </>
        )}
      </div>

      {/* ==========================================
              RANK DETAILS MODAL
      ========================================== */}

      <RankDetailsModal
        rank={selectedRank}
        theme={data.theme}
        onClose={() => setSelectedRank(null)}
      />
    </main>
  );
};

export default RankLayout;
