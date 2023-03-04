import { ReactNode } from "react";
import { mixClass, paddingbMix, textColorMix, textSizeMix, textWeightMix } from "@dadmor/pure-baldr-core";
import { DimentionsType, ColorType, TextSizeType, TextWeightType } from "@dadmor/pure-baldr-core";
type Props = {
  size?: TextSizeType;
  color?: ColorType;
  weight?: TextWeightType;
  paddingB?: DimentionsType;
  className?: string;
  children: ReactNode;
}
export const Text: React.FC<Props> = ({
  className = "",
  size = null,
  color = null,
  weight = null,
  children,
  paddingB = null
}) => {
  return (
    <p
      className={mixClass({
        [className]: true,
        ...textColorMix(color),
        ...textSizeMix(size),
        ...textWeightMix(weight),
        ...paddingbMix(paddingB)
      })}
    >
      {children}
    </p>
  );
};
export default Text;