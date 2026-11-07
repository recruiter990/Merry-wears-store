export function unsplash(photoId: string, width = 1600) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}

/** Licensed Unsplash photography used for editorial atmosphere, not as Amazon product shots. */
export const photos = {
  treeLit: unsplash("photo-1512389142860-9c449e58a543"),
  treeWhite: unsplash("photo-1543589077-47d81606c1bf"),
  ornaments: unsplash("photo-1513885535751-8b9238bd345a"),
  livingChristmas: unsplash("photo-1513519245088-0e12902e35a6"),
  cozyInterior: unsplash("photo-1616046229478-9901c5536a45"),
  sofa: unsplash("photo-1555041469-a586c61ea9bc"),
  gifts: unsplash("photo-1549465220-1a8b9238bd48"),
  wrappedGifts: unsplash("photo-1512909006721-3d6018887383"),
  knit: unsplash("photo-1434389677669-e08b4cac3105"),
  beigeKnit: unsplash("photo-1620799140408-edc6dcb6d633"),
  couple: unsplash("photo-1520854221256-17451cc331bf"),
  familyTable: unsplash("photo-1607344645866-009c320b63e0"),
  bedroom: unsplash("photo-1505691938895-1758d7a833ca"),
  kitchen: unsplash("photo-1556912173-46c336c7fd55"),
  tableSetting: unsplash("photo-1414235077428-338989a2e8c0"),
  brunch: unsplash("photo-1478144592103-25e218a04891"),
  lights: unsplash("photo-1513151233558-d860c5398176"),
  snow: unsplash("photo-1457269449834-928af64c684d"),
  fashion: unsplash("photo-1483985988355-763728e1935b"),
  wardrobe: unsplash("photo-1544441893-675973e31985"),
  homeExterior: unsplash("photo-1600585154340-be6161a56a0c"),
  modernHome: unsplash("photo-1618220179428-22790b461013"),
  livingNeutral: unsplash("photo-1560185007-c5ea6f5ba4c4"),
  portrait: unsplash("photo-1529626455594-4ff0802cfb7e"),
} as const;
