import Masonry from "react-masonry-css";
import { ProductCard } from "./ProductCard";
import { Product } from "../../types/product";

interface ProductGridProps {
  onProductSelect?: (product: Product) => void;
}

/**
 * Masonry-style grid displaying product cards.
 * Supports infinite scrolling and responsive columns.
 */
export function ProductGrid({ onProductSelect }: ProductGridProps) {
  // Mock product data for prototype
  const mockProducts: Product[] = [
    { id: "1", title: "Eames Lounge Chair", brand: "Herman Miller", imageUrl: "https://images.unsplash.com/photo-1552146455-4b961f2ed173?w=400", imageHeight: 450 },
    { id: "2", title: "Barcelona Chair", brand: "Knoll", imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400", imageHeight: 300 },
    { id: "3", title: "Modern Sofa Collection", brand: "B&B Italia", imageUrl: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400", imageHeight: 350 },
    { id: "4", title: "Pendant Light Fixture", brand: "Flos", imageUrl: "https://images.unsplash.com/photo-1570422211361-803d3660004d?w=400", imageHeight: 500 },
    { id: "5", title: "Minimalist Dining Table", brand: "Design Within Reach", imageUrl: "https://images.unsplash.com/photo-1698770531036-c627d35188f2?w=400", imageHeight: 280 },
    { id: "6", title: "Contemporary Armchair", brand: "Vitra", imageUrl: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400", imageHeight: 420 },
    { id: "7", title: "Modular Shelving System", brand: "USM", imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400", imageHeight: 380 },
    { id: "8", title: "Designer Floor Lamp", brand: "Artemide", imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400", imageHeight: 520 },
    { id: "9", title: "Scandinavian Side Table", brand: "Muuto", imageUrl: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=400", imageHeight: 310 },
    { id: "10", title: "Luxury Sectional Sofa", brand: "Minotti", imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", imageHeight: 340 },
    { id: "11", title: "Mid-Century Credenza", brand: "Knoll", imageUrl: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=400", imageHeight: 290 },
    { id: "12", title: "Wall Sconce Set", brand: "Louis Poulsen", imageUrl: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400", imageHeight: 400 },
    { id: "13", title: "Upholstered Bench", brand: "Cassina", imageUrl: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=400", imageHeight: 330 },
    { id: "14", title: "Glass Coffee Table", brand: "Kartell", imageUrl: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400", imageHeight: 360 },
    { id: "15", title: "Accent Chair", brand: "Fritz Hansen", imageUrl: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400", imageHeight: 470 },
    { id: "16", title: "Modern Console Table", brand: "West Elm", imageUrl: "https://images.unsplash.com/photo-1595428774638-6d0c9c8c2b7f?w=400", imageHeight: 320 },
    { id: "17", title: "Chandelier", brand: "Foscarini", imageUrl: "https://images.unsplash.com/photo-1585128792109-c8c1b3c2d0c6?w=400", imageHeight: 490 },
    { id: "18", title: "Ergonomic Office Chair", brand: "Herman Miller", imageUrl: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400", imageHeight: 410 },
    { id: "19", title: "Outdoor Lounge Set", brand: "Dedon", imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400", imageHeight: 350 },
    { id: "20", title: "Modern Bookshelf", brand: "Hay", imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400", imageHeight: 440 },
  ];

  // Breakpoints for responsive columns
  const breakpointColumns = {
    default: 4,
    1536: 4,
    1280: 3,
    1024: 3,
    768: 2,
    640: 1,
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {mockProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            onSelect={onProductSelect}
          />
        ))}
      </Masonry>
    </div>
  );
}
