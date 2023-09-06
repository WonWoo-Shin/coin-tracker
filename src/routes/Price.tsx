import { useParams } from "react-router-dom";

function Price() {
  const { coinId } = useParams<{ coinId: string }>();
  return <h1>Price</h1>;
}

export default Price;
