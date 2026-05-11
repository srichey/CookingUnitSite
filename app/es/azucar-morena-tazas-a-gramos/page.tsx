import {
  IngredientLandingPage,
  buildIngredientLandingMetadata,
} from "@/components/ingredient-landing/IngredientLandingPage";
import { INGREDIENT_LANDINGS } from "@/content/ingredient-landing";

const LANDING = INGREDIENT_LANDINGS.find((l) => l.ingredientId === "sugar-brown")!;

export const metadata = buildIngredientLandingMetadata(LANDING, "es");

export default function Page() {
  return <IngredientLandingPage landing={LANDING} locale="es" />;
}
