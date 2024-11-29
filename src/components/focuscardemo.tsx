import { FocusCards } from "./focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Rick and Morty",
      src: "/Rickandmorty.png",
      href: "https://www.github.com/rickandmorty", // Add href property to each card
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "https://www.valleyoflife.com", // Add href property to each card
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "https://www.salahbehtahijayega.com", // Add href property to each card
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "https://www.campingisforpros.com", // Add href property to each card
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "https://www.theroadnottaken.com", // Add href property to each card
    },
    {
      title: "The First Rule",
      src: "/Generadordeimagenes.png",
      href: "https://www.thefirstrule.com", // Add href property to each card
    },
  ];

  return <FocusCards cards={cards} />;
}