import { useLingui } from "@lingui/react";
import Image from "next/image";
import React from "react";
import englishToInteral from "utils/data/englishToInternal.json";

interface GearImageProps {
  englishName: string;
  mini?: boolean;
}

const GearImage: React.FC<GearImageProps> = ({ englishName, mini }) => {
  const { i18n } = useLingui();
  const wh = mini ? 32 : 128;

  const key = englishName as keyof typeof englishToInteral;
  const gearInternal = englishToInteral[key];
  return (
    <Image
      src={`/images/gear/${gearInternal}.png`}
      alt={i18n._(englishName)}
      title={i18n._(englishName)}
      width={wh}
      height={wh}
    />
  );
};

export default GearImage;
