import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Masonry from "react-masonry-css";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProjectProductCard } from "../components/products/ProjectProductCard";
import { OfferSummary } from "../components/projects/OfferSummary";
import { mockProjects } from "../data/mockProjects";
import { Product } from "../types/product";
import { OfferItem } from "../types/project";

/**
 * Project detail screen - dedicated workspace for a single client project.
 * Features a two-column layout with project board and offer summary.
 */
export function ProjectDetailScreen() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  // Find the project from mock data
  const project = mockProjects.find((p) => p.id === projectId);
  
  // State for offer items
  const [offerItems, setOfferItems] = useState<OfferItem[]>([]);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-8">
        <p>Project not found</p>
      </div>
    );
  }

  const handleAddToOffer = (product: Product) => {
    // Check if product is already in offer
    const existingItem = offerItems.find((item) => item.product.id === product.id);
    
    if (existingItem) {
      // Increment quantity
      setOfferItems(
        offerItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new item with mock price
      const mockPrice = Math.floor(Math.random() * 3000) + 500;
      setOfferItems([...offerItems, { product, price: mockPrice, quantity: 1 }]);
    }
  };

  const handleAddNote = (product: Product) => {
    console.log("Add note for:", product.title);
    // In a real app, this would open a note dialog
  };

  const handleRemove = (product: Product) => {
    console.log("Remove product:", product.title);
    // In a real app, this would remove the product from the project
  };

  const handlePrepareOffer = () => {
    console.log("Prepare offer with items:", offerItems);
    // In a real app, this would navigate to an offer preparation screen
  };

  // Breakpoints for responsive columns
  const breakpointColumns = {
    default: 3,
    1280: 2,
    1024: 2,
    768: 1,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background sticky top-16 z-10">
        <div className="container mx-auto px-6 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/projects")}
            className="mb-4 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
          <div>
            <h1>{project.name}</h1>
            <p className="text-muted-foreground">{project.clientName}</p>
          </div>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          {/* Left Column - Project Board */}
          <div>
            <h2 className="mb-6">Project Board</h2>
            <Masonry
              breakpointCols={breakpointColumns}
              className="flex -ml-4 w-auto"
              columnClassName="pl-4 bg-clip-padding"
            >
              {project.products.map((product) => (
                <ProjectProductCard
                  key={product.id}
                  product={product}
                  onAddToOffer={handleAddToOffer}
                  onAddNote={handleAddNote}
                  onRemove={handleRemove}
                />
              ))}
            </Masonry>
          </div>

          {/* Right Column - Offer Summary */}
          <div>
            <OfferSummary 
              offerItems={offerItems}
              onPrepareOffer={handlePrepareOffer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
