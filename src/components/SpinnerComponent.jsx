import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const SpinnerComponent = ({
  initialLoading = true,
  initialColor = "#ffffff",
  size = 150,
}) => {
  const [loading, setLoading] = useState(initialLoading);
  const [color, setColor] = useState(initialColor);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <BeatLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default SpinnerComponent;
