import {
  IngredientLandingPage,
  buildIngredientLandingMetadata,
} from "@/components/ingredient-landing/IngredientLandingPage";
import { INGREDIENT_LANDINGS } from "@/content/ingredient-landing";

const LANDING = INGREDIENT_LANDINGS.find((l) => l.ingredientId === "oats-rolled")!;

export const metadata = buildIngredientLandingMetadata(LANDING, "en");

export default function Page() {
  return <IngredientLandingPage landing={LANDING} locale="en" />;
}
