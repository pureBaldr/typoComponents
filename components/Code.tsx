import { ReactNode } from "react";
import {
  bgMix,
  mixClass,
  paddingxMix,
  paddingyMix,
  textColorMix,
  textSizeMix,
} from "@dadmor/pure-baldr-core";
import { DimentionsType, ColorType, TextSizeType } from "@dadmor/pure-baldr-core";

type Props = {
  className?: string;
  border?: boolean;
  size?: TextSizeType;
  spacing?: DimentionsType;
  color?: ColorType;
  bg?: ColorType;
  children: ReactNode;
};
export const Code: React.FC<Props> = ({
  className = "",
  border = false,
  children,
  size = null,
  color = "success",
  bg = null,
  spacing = "md",
}) => {
  return (
    <pre
      className={mixClass({
        "bg-green-50": !bg,
        border: border,
        "font-mono rounded": true,
        ...textSizeMix(size),
        ...textColorMix(color),
        ...bgMix(bg),
        ...paddingyMix(spacing),
        ...paddingxMix(spacing),
        [className]: true,
      })}
    >
      {children}
    </pre>
  );
};
