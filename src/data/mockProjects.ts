import { Project } from "../types/project";

/**
 * Mock project data for prototyping
 */
export const mockProjects: Project[] = [
  {
    id: "1",
    name: "Hillside Residence",
    clientName: "Sarah & Michael Chen",
    lastUpdated: "2025-10-18",
    products: [
      { id: "1", title: "Eames Lounge Chair", brand: "Herman Miller", imageUrl: "https://images.unsplash.com/photo-1552146455-4b961f2ed173?w=400", imageHeight: 450 },
      { id: "2", title: "Barcelona Chair", brand: "Knoll", imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400", imageHeight: 300 },
      { id: "3", title: "Modern Sofa Collection", brand: "B&B Italia", imageUrl: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400", imageHeight: 350 },
      { id: "4", title: "Pendant Light Fixture", brand: "Flos", imageUrl: "https://images.unsplash.com/photo-1570422211361-803d3660004d?w=400", imageHeight: 500 },
      { id: "5", title: "Minimalist Dining Table", brand: "Design Within Reach", imageUrl: "https://images.unsplash.com/photo-1698770531036-c627d35188f2?w=400", imageHeight: 280 },
      { id: "6", title: "Contemporary Armchair", brand: "Vitra", imageUrl: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400", imageHeight: 420 },
    ],
  },
  {
    id: "2",
    name: "Downtown Loft Renovation",
    clientName: "Emma Rodriguez",
    lastUpdated: "2025-10-15",
    products: [
      { id: "7", title: "Modular Shelving System", brand: "USM", imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400", imageHeight: 380 },
      { id: "8", title: "Designer Floor Lamp", brand: "Artemide", imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400", imageHeight: 520 },
      { id: "9", title: "Scandinavian Side Table", brand: "Muuto", imageUrl: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=400", imageHeight: 310 },
      { id: "10", title: "Luxury Sectional Sofa", brand: "Minotti", imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", imageHeight: 340 },
    ],
  },
  {
    id: "3",
    name: "Coastal Beach House",
    clientName: "The Morrison Family",
    lastUpdated: "2025-10-12",
    products: [
      { id: "11", title: "Mid-Century Credenza", brand: "Knoll", imageUrl: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=400", imageHeight: 290 },
      { id: "12", title: "Wall Sconce Set", brand: "Louis Poulsen", imageUrl: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400", imageHeight: 400 },
      { id: "13", title: "Upholstered Bench", brand: "Cassina", imageUrl: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=400", imageHeight: 330 },
      { id: "14", title: "Glass Coffee Table", brand: "Kartell", imageUrl: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400", imageHeight: 360 },
      { id: "15", title: "Accent Chair", brand: "Fritz Hansen", imageUrl: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400", imageHeight: 470 },
    ],
  },
  {
    id: "4",
    name: "Modern Office Suite",
    clientName: "TechStart Inc.",
    lastUpdated: "2025-10-10",
    products: [
      { id: "18", title: "Ergonomic Office Chair", brand: "Herman Miller", imageUrl: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400", imageHeight: 410 },
      { id: "16", title: "Modern Console Table", brand: "West Elm", imageUrl: "https://images.unsplash.com/photo-1595428774638-6d0c9c8c2b7f?w=400", imageHeight: 320 },
      { id: "17", title: "Chandelier", brand: "Foscarini", imageUrl: "https://images.unsplash.com/photo-1585128792109-c8c1b3c2d0c6?w=400", imageHeight: 490 },
    ],
  },
];
