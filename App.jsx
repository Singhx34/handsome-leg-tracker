import React, { useState } from "react";
import LegStatusToggle from "./components/LegStatusToggle";
import MomReactionCard from "./components/MomReactionCard";
import StatusSummary from "./components/StatusSummary";
import Header from "./components/Header";

const App = () => {
  const [handsomeLegChopped, setHandsomeLegChopped] = useState(false);
  const [momThinksLegNotChopped, setMomThinksLegNotChopped] = useState(true);

  const getMomReaction = () => {
    if (handsomeLegChopped && !momThinksLegNotChopped) {
      return {
        status: "mad",
        explanation: "Mom is mad because she knows the leg is chopped!",
        bgColor: "bg-red-100",
        emoji: "😠",
      };
    } else if (!handsomeLegChopped && momThinksLegNotChopped) {
      return {
        status: "Mad",
        explanation: "Mom is mad because she believes the leg is fine.",
        bgColor: "bg-orange-100",
        emoji: "😤",
      };
    } else {
      return {
        status: "Confused",
        explanation: "Mom is in a mixed state of emotions about the leg situation.",
        bgColor: "bg-yellow-100",
        emoji: "😕",
      };
    }
  };

  const momReaction = getMomReaction();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
        <Header title="Handsome's Leg Status" emoji={momReaction.emoji} />
        <div className="space-y-6">
          <LegStatusToggle
            label="Is the leg actually chopped?"
            status={handsomeLegChopped}
            onToggle={() => setHandsomeLegChopped(!handsomeLegChopped)}
          />
          <LegStatusToggle
            label="Does Mom think it's fine?"
            status={momThinksLegNotChopped}
            onToggle={() => setMomThinksLegNotChopped(!momThinksLegNotChopped)}
          />
        </div>
        <MomReactionCard
          status={momReaction.status}
          explanation={momReaction.explanation}
          bgColor={momReaction.bgColor}
        />
        <StatusSummary
          handsomeLegChopped={handsomeLegChopped}
          momThinksLegNotChopped={momThinksLegNotChopped}
        />
      </div>
    </div>
  );
};

export default App;