import { useState } from "react";
import { DynamicFilterChips } from "../components/search/DynamicFilterChips";
import { ProductGrid } from "../components/products/ProductGrid";
import { ProductDetailPanel } from "../components/products/ProductDetailPanel";
import { Product } from "../types/product";

/**
 * The main Explore screen - the heart of the discovery experience.
 * Default view when users log in, combining search filters and product browsing.
 * Manages the state for the product detail panel.
 */
export function ExploreScreen() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Dynamic Filter Chips - appears after search */}
      <DynamicFilterChips isVisible={true} />
      
      {/* Product Grid - masonry layout of products */}
      <ProductGrid onProductSelect={setSelectedProduct} />

      {/* Product Detail Panel - slides in from the right */}
      {selectedProduct && (
        <ProductDetailPanel 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
