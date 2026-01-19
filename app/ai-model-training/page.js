'use client';

import AiModelLanding from '../components/aiModelTraining/aiModelLanding';
import OurAiModelProcess from '../components/aiModelTraining/ourAiModelProcess';
import GetStarted from '../components/aiModelTraining/getStarted';

export default function Page() {
  return (
    <div>
      <AiModelLanding />
      <OurAiModelProcess />
      <GetStarted />
    </div>
  );
}
