import KnowledgeTemplate from "../components/KnowledgeTemplate";

function NDA() {
  return (
    <KnowledgeTemplate
      title="National Defence Academy"
      image="/knowledge/nda.jpg"
      intro="National Defence Academy is the world's first tri-service academy where Army, Navy and Air Force cadets train together."

      facts={[
        "Location: Khadakwasla, Pune",
        "Established: 1954",
        "Motto: Seva Paramo Dharma",
        "Tri-Service Academy",
      ]}

      highlights={[
        "Joint military training",
        "Leadership development",
        "Physical training",
        "Academic education",
        "Foundation for future officers",
      ]}

      interviewQuestions={[
        "Where is NDA located?",
        "What is the NDA motto?",
        "Why is NDA unique in the world?",
        "What happens after NDA training?",
      ]}
    />
  );
}

export default NDA;