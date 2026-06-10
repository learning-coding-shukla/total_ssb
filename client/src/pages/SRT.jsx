import { useState, useEffect } from "react";

const srtSituations = [
  "He sees a man drowning in a fast-flowing river. He...",
  "He is going for an important exam and his bike gets punctured on the way. He...",
  "While traveling by train at night, he notices a thief running away with a passenger's bag. He...",
  "His final year coding project gets corrupted just one day before the submission. He...",
  "During a group trek, his team captain gets severely injured and cannot walk. He...",
  "He finds a wallet containing a large sum of money and an ID card on the street. He...",
  "He is alone in the house and suddenly a fire breaks out in the kitchen. He...",
  "His friends are forcing him to drink alcohol at a college party. He...",
  "He is selected as the team leader, but his seniors refuse to follow his orders. He...",
  "While walking home late at night, he sees three men harassing a girl. He...",
  "He has an important job interview, but his train is delayed by four hours. He...",
  "His roommate is suffering from a high fever in the middle of the night. He...",
  "He realizes he has forgotten his admit card just outside the examination hall. He...",
  "During a sports match, the opposing team starts playing foul and getting aggressive. He...",
  "He is assigned a critical task, but half of his team members go on leave. He...",
  "He catches his best friend cheating during the final semester exams. He...",
  "A rumor is spreading in the college that is ruining his reputation. He...",
  "He is driving on a deserted road and sees a badly injured victim of a hit-and-run. He...",
  "He reaches the railway station and realizes his confirmed ticket is actually for the next day. He...",
  "While organizing a college fest, the main sponsor backs out at the last minute. He...",
  "He is given a task that he has absolutely no knowledge about. He...",
  "His parents want him to choose a career path he has no interest in. He...",
  "He is lost in a dense forest during a camping trip and his phone has no network. He...",
  "A fellow student constantly bullies his younger sibling. He...",
  "He accidentally breaks a valuable piece of equipment in the college laboratory. He...",
  "During a group discussion, two members start shouting and fighting. He...",
  "He needs to pay his college fee urgently, but his father's business has suffered a loss. He...",
  "He is returning from a late-night study session and sees a suspicious person outside his house. He...",
  "The software system he deployed crashes right before a major client presentation. He...",
  "He is asked to pay a bribe to get a legitimate government document processed quickly. He...",
  "While trekking, the weather suddenly turns extremely bad and a storm hits. He...",
  "His laptop is stolen right before a week of crucial online assignments. He...",
  "He discovers that the food served in the hostel mess is unhygienic and stale. He...",
  "He is unfairly blamed by his professor for a mistake he didn't commit. He...",
  "A junior is physically injured during a rough ragging session in the hostel. He...",
  "He is waiting for a bus when an old man faints right next to him. He...",
  "His team is losing badly in the final quarter of a major tournament. He...",
  "He realizes the taxi driver is taking him through a completely wrong and isolated route. He...",
  "He finds a serious security bug in his company's live application. He...",
  "He wants to join the armed forces, but his family is worried about the risks. He...",
  "While swimming, he gets severe cramps in his legs in deep water. He...",
  "He is organizing an event and a sudden power cut plunges the hall into darkness. He...",
  "He observes a stranger dropping a suspicious looking bag at a crowded railway station. He...",
  "His friend borrows money and refuses to return it when he desperately needs it. He...",
  "He is put in charge of a project where the team members have zero coordination. He...",
  "He makes a severe error in his code that deletes important user data. He...",
  "He has to cross a dense jungle on foot after his jeep breaks down. He...",
  "A prominent local politician threatens him for raising a civic issue. He...",
  "He is preparing for a competitive exam but falls severely ill a month before. He...",
  "He sees a mob protesting violently and blocking the main road he needs to cross. He...",
  "He finds out his close friend is spreading malicious lies about him behind his back. He...",
  "While returning home, he gets caught in a sudden, massive flood. He...",
  "He mistakenly boards the wrong train and realizes it after an hour. He...",
  "His juniors ask him to leak the question paper for the upcoming test. He...",
  "He is working on a tight deadline and his main computer crashes permanently. He...",
  "He notices an unauthorized person trying to enter a restricted military area. He...",
  "He is participating in a debate and suddenly forgets all his lines. He...",
  "His younger brother has fallen into bad company and is skipping school. He...",
  "He is asked by his boss to manipulate the data reports to show better results. He...",
  "He sees a snake in his sleeping bag during an outdoor camp. He...",
  "He loses all his luggage, including his wallet, while traveling in a new city. He...",
  "He is appointed captain, but the team's star player refuses to cooperate with him. He...",
  "He finds out someone is hacking into the college's secure server. He...",
  "He witnesses a serious road accident but the crowd is just taking videos. He...",
  "His parents are strongly opposing his decision to marry the person he loves. He...",
  "He is given a very short notice to prepare a highly technical presentation. He...",
  "He notices sparks coming from the main electrical panel in his hostel. He...",
  "He is falsely accused of stealing by his colleagues. He...",
  "He is physically exhausted but his team needs him to push for one more mile. He...",
  "He receives a distress call from a friend at 2 AM. He...",
  "He sees a child crying alone at a busy intersection. He...",
  "He has to make a crucial decision, but his team is equally divided on the options. He...",
  "He accidentally spills coffee on his manager's important documents. He...",
  "He observes a shopkeeper mixing adulterants into the daily groceries. He...",
  "He is walking in the dark and feels someone following him closely. He...",
  "He wants to start his own tech company, but lacks the initial funding. He...",
  "He is stranded on a highway with a flat tire and no spare. He...",
  "He finds a fellow student attempting self-harm due to exam stress. He...",
  "He realizes he has sent a highly confidential email to the wrong person. He...",
  "He is leading a squad and they run out of rations halfway through the mission. He...",
  "He sees two of his neighbors engaged in a violent physical fight. He...",
  "He gets a lucrative job offer from a company known for unethical practices. He...",
  "He is caught in an earthquake while on the top floor of a high-rise building. He...",
  "He discovers that his application for a crucial entrance exam was rejected due to a typo. He...",
  "He is in a theater when a sudden stampede occurs due to a false fire alarm. He...",
  "He is repeatedly ignored for a promotion despite being the most qualified. He...",
  "He finds out that a charity organization he works for is misusing the funds. He...",
  "He is driving and the brakes of his car suddenly fail on a slope. He...",
  "His strict professor catches him sleeping during an important lecture. He...",
  "He is asked to stand up against an injustice, but it might cost him his job. He...",
  "He sees a group of students vandalizing college property. He...",
  "He has to catch a flight in two hours but is stuck in a massive traffic jam. He...",
  "He notices that the drinking water supply in his area is highly contaminated. He...",
  "He is given responsibility for a task he strongly disagrees with morally. He...",
  "He finds a loaded gun abandoned in a public washroom. He...",
  "He is chosen to represent his state, but he fractures his hand a week prior. He...",
  "He discovers a hidden camera in the fitting room of a clothing store. He...",
  "He is asked a question in an interview to which he has absolutely no answer. He...",
  "He realizes the online platform he invested his savings in is a complete scam. He...",
  "He is managing a live server and a massive cyber-attack begins. He...",
  "He is on a boat that suddenly starts taking in water rapidly. He...",
  "He is told to fire a hardworking employee due to budget cuts. He...",
  "He notices a wild animal has wandered into a residential neighborhood. He...",
  "He is trying to study, but his neighbors are playing loud music late at night. He...",
  "He finds out his mentor is taking credit for his original research work. He...",
  "He misses the last bus to his village and it is starting to rain heavily. He...",
  "He sees someone trying to sneak a weapon past a security checkpoint. He...",
  "He is assigned a roommate who has completely incompatible living habits. He...",
  "He accidentally transfers a large sum of money to an unknown bank account. He...",
  "He is leading a rescue operation and has to choose who to save first. He...",
  "He observes a teacher treating a student unfairly based on their background. He...",
  "He finds an envelope with highly sensitive corporate secrets left on his desk. He...",
  "He is stuck in a stalled elevator with five panicked people. He...",
  "He realizes his passport is missing right before an international flight. He...",
  "He is criticized aggressively by his boss in front of the entire team. He...",
  "He discovers that the safety gear provided for a dangerous task is defective. He...",
  "He is walking past a house and hears a woman screaming for help. He...",
  "He has committed a serious mistake that nobody else knows about yet. He...",
  "He is running a race and the person right next to him collapses. He...",
  "He finds a flaw in the product design just hours before the market launch. He...",
  "He is tasked with convincing a hostile crowd to disperse peacefully. He...",
  "He sees a stray dog trapped in a deep, empty well. He...",
  "He realizes he has been given excess change by a struggling street vendor. He...",
  "He is the only witness to a crime committed by a powerful local figure. He...",
  "He notices an unattended cooking gas cylinder leaking rapidly in a tight space. He...",
  "He is leading a team through a forest and his compass breaks. He...",
  "He finds that the software library he relies on has been deprecated overnight. He...",
  "He is told his performance is severely lacking and he might be terminated. He...",
  "He encounters a heavy landslide blocking the only route back to civilization. He...",
  "He discovers a fake profile pretending to be him on a social media platform. He...",
  "He is asked to choose between an important family function and a major career opportunity. He...",
  "He sees a toddler wandering close to the edge of a high balcony. He...",
  "He realizes the bridge he is driving over is slowly starting to collapse. He...",
  "He is assigned to a rural area with zero basic amenities for a month. He...",
  "He catches an employee stealing data, but the employee begs for mercy citing family issues. He...",
  "He is trapped under debris after a building collapse. He...",
  "He discovers that his immediate senior is accepting kickbacks from vendors. He...",
  "He is hosting a live online event and his internet connection drops completely. He...",
  "He encounters a massive riot while trying to drop his sibling to school. He...",
  "He receives a wrong medical report indicating a severe illness. He...",
  "He is part of a covert operation and his cover is suddenly blown. He...",
  "He finds an injured eagle on his roof that cannot fly. He...",
  "He is forced to make a public speech on a controversial topic without preparation. He...",
  "He notices the emergency exits in a crowded mall are permanently locked. He...",
  "He has to defuse a tense argument between his two best friends. He...",
  "He realizes he has locked his keys inside his car with the engine running. He...",
  "He is trekking in high altitude and suddenly starts showing signs of severe hypoxia. He...",
];

function SRT() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800);

  useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev === 1) {
        nextSituation();
        return 30;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [currentIndex]);

  const nextSituation = () => {
    setCurrentIndex((prev) =>
  prev === srtSituations.length - 1 ? 0 : prev + 1
);
    setTimeLeft(30);
  };

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-5xl font-bold mb-8">SRT Practice</h1>

      <div className="bg-white p-8 rounded-xl shadow">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-red-600">{timeLeft}</h2>
        </div>

        <p className="text-2xl">{srtSituations[currentIndex]}</p>

        <textarea
          className="w-full border mt-6 p-4 rounded-lg"
          rows="6"
          placeholder="Write your response..."
        />

        <div className="text-center mt-6">
          <button
            onClick={nextSituation}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Next Situation
          </button>
        </div>
      </div>
    </div>
  );
}
export default SRT;
