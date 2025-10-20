import { Heart, Plus } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
}

/**
 * Individual product card component.
 * Displays product image with title and brand.
 * Shows hover actions for liking and adding to project.
 * Clicking the card opens the product detail panel.
 */
export function ProductCard({ product, onSelect }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleCardClick = () => {
    onSelect?.(product);
  };

  const handleActionClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation(); // Prevent triggering the card click
    action();
  };

  return (
    <div
      className="group relative mb-4 break-inside-avoid cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg bg-muted">
        <ImageWithFallback
          src={product.imageUrl}
          alt={product.title}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ height: `${product.imageHeight}px` }}
        />
        
        {/* Hover Overlay with Actions */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 transition-opacity">
            <div className="absolute top-3 right-3 flex gap-2">
              {/* Like/Save Button */}
              <button
                onClick={(e) => handleActionClick(e, () => setIsLiked(!isLiked))}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                aria-label="Save to favorites"
              >
                <Heart
                  className={`h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-700"}`}
                />
              </button>
              
              {/* Add to Project Button */}
              <button
                onClick={(e) => handleActionClick(e, () => console.log("Add to project:", product.id))}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                aria-label="Add to project"
              >
                <Plus className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-3 px-1">
        <h3 className="line-clamp-2">{product.title}</h3>
        <p className="text-muted-foreground">{product.brand}</p>
      </div>
    </div>
  );
}
