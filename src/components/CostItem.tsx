import {
  faArrowTrendDown,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CostItemStyled } from "../style";

interface CostItemProps {
  time: string;
  price: number;
}

function CostItem({ time, price }: CostItemProps) {
  const isUp = price > 0;
  return (
    <CostItemStyled $percentColor={isUp ? "#DF7D46" : "#3C90EB"}>
      <div>{`${time} 전보다`}</div>
      <div>
        <span>{price.toFixed(2)}%</span>
        <FontAwesomeIcon
          icon={isUp ? faArrowTrendUp : faArrowTrendDown}
          color={isUp ? "#DF7D46" : "#3C90EB"}
        />
      </div>
    </CostItemStyled>
  );
}

export default CostItem;
