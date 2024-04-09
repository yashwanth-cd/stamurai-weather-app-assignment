import { useNavigate } from "react-router-dom";

export default function WeatherPage() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
