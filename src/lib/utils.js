import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const findSectionData = (sectionID, pageData) => {
  const sectionData = pageData?.sections?.find(
    (section) => section?._id === sectionID
  );
  return sectionData;
};
export const findSubSectionData = (subSectionID, sectionData) => {
  const subSectionData = sectionData?.subsections?.find(
    (sub) => sub?._id === subSectionID
  );
  return subSectionData;
};
