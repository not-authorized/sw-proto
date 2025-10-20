import { MessageSquare, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Product } from "../../types/product";

interface ProjectProductCardProps {
  product: Product;
  onAddToOffer?: (product: Product) => void;
  onAddNote?: (product: Product) => void;
  onRemove?: (product: Product) => void;
}

/**
 * Product card variant for use within project workspace.
 * Features different hover actions: Add to Offer, Add Note, Remove from Project.
 */
export function ProjectProductCard({ 
  product, 
  onAddToOffer,
  onAddNote,
  onRemove 
}: ProjectProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleActionClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  return (
    <div
      className="group relative mb-4 break-inside-avoid"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
          <div className="absolute inset-0 bg-black/30 transition-opacity flex items-center justify-center">
            <div className="flex flex-col gap-2 px-4">
              {/* Add to Offer Button - Primary */}
              <button
                onClick={(e) => handleActionClick(e, () => onAddToOffer?.(product))}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                aria-label="Add to offer"
              >
                <Plus className="h-4 w-4" />
                Add to Offer
              </button>
              
              {/* Secondary Actions */}
              <div className="flex gap-2">
                <button
                  onClick={(e) => handleActionClick(e, () => onAddNote?.(product))}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  aria-label="Add note"
                >
                  <MessageSquare className="h-4 w-4" />
                  Note
                </button>
                
                <button
                  onClick={(e) => handleActionClick(e, () => onRemove?.(product))}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  aria-label="Remove from project"
                >
                  <Trash2 className="h-4 w-4" />
                  Remove
                </button>
              </div>
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
