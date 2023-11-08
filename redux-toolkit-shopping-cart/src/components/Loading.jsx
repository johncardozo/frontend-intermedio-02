import { dotWave } from "ldrs";

dotWave.register();

const Loading = () => {
  return (
    <div className="loading">
      <l-dot-wave size="80" speed="1" color="#16489d"></l-dot-wave>
      <h2>Loading shopping cart...</h2>
    </div>
  );
};

export default Loading;
