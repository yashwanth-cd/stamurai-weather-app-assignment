import { useNavigate } from "react-router-dom";

export default function useRedirect() {
  const navigate = useNavigate();
  return navigate;
}
