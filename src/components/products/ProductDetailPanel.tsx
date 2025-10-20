import { Heart, Plus } from "lucide-react";
import { Product } from "../../types/product";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ScrollArea } from "../ui/scroll-area";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ProductCard } from "./ProductCard";

interface ProductDetailPanelProps {
  product: Product | null;
  onClose: () => void;
}

/**
 * Slide-in panel displaying detailed product information.
 * Opens from the right side without navigating away from the Explore screen.
 */
export function ProductDetailPanel({ product, onClose }: ProductDetailPanelProps) {
  // Mock related products for "Goes Well With" and "Similar Alternatives"
  const relatedProducts: Product[] = [
    { id: "r1", title: "Modern Side Table", brand: "Knoll", imageUrl: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=300", imageHeight: 280 },
    { id: "r2", title: "Floor Lamp", brand: "Flos", imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300", imageHeight: 320 },
    { id: "r3", title: "Area Rug", brand: "Design Within Reach", imageUrl: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=300", imageHeight: 300 },
    { id: "r4", title: "Decorative Vase", brand: "Kartell", imageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=300", imageHeight: 290 },
    { id: "r5", title: "Throw Pillows", brand: "West Elm", imageUrl: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=300", imageHeight: 285 },
    { id: "r6", title: "Coffee Table Books", brand: "Assouline", imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300", imageHeight: 295 },
  ];

  const similarProducts: Product[] = [
    { id: "s1", title: "Alternative Chair Design", brand: "Vitra", imageUrl: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300", imageHeight: 290 },
    { id: "s2", title: "Similar Lounge Chair", brand: "Fritz Hansen", imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300", imageHeight: 310 },
    { id: "s3", title: "Comparable Seating", brand: "Cassina", imageUrl: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300", imageHeight: 295 },
    { id: "s4", title: "Designer Armchair", brand: "B&B Italia", imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300", imageHeight: 305 },
    { id: "s5", title: "Contemporary Chair", brand: "Hay", imageUrl: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=300", imageHeight: 288 },
    { id: "s6", title: "Modern Accent Chair", brand: "Muuto", imageUrl: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=300", imageHeight: 298 },
  ];

  // Mock specification data
  const specifications = [
    { label: "Dimensions", value: "32\" W × 33\" D × 33\" H" },
    { label: "Material", value: "Premium Leather, Molded Plywood" },
    { label: "Finish", value: "Walnut Veneer" },
    { label: "Weight Capacity", value: "300 lbs" },
    { label: "Assembly", value: "Minor Assembly Required" },
    { label: "Warranty", value: "5 Year Manufacturer Warranty" },
  ];

  // Mock finish options
  const finishOptions = [
    { name: "Walnut", color: "#5D4E37" },
    { name: "Oak", color: "#C2B280" },
    { name: "Ebony", color: "#2B2B2B" },
    { name: "Cherry", color: "#8B4513" },
  ];

  return (
    <Drawer open={!!product} onOpenChange={(open) => !open && onClose()} direction="right">
      <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[90%] rounded-none fixed">
        <ScrollArea className="h-full">
          <div className="mx-auto w-full max-w-5xl">
            {/* Header */}
            <DrawerHeader className="border-b">
              <DrawerTitle>{product?.title}</DrawerTitle>
              <DrawerDescription>{product?.brand}</DrawerDescription>
            </DrawerHeader>

            {/* Main Content */}
            <div className="p-6 space-y-6">
              {/* Image Gallery */}
              <div className="w-full aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={product?.imageUrl || ""}
                  alt={product?.title || "Product"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Primary Actions */}
              <div className="flex gap-3">
                <Button className="flex-1 gap-2">
                  <Plus className="h-4 w-4" />
                  Add to Offer
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                  <Heart className="h-4 w-4" />
                  Save to Favorites
                </Button>
              </div>

              {/* Information Tabs */}
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="options">Options & Finishes</TabsTrigger>
                </TabsList>

                {/* Description Tab */}
                <TabsContent value="description" className="space-y-4 mt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    This iconic piece combines timeless design with exceptional comfort and craftsmanship. 
                    Featuring premium materials and meticulous attention to detail, it represents the 
                    pinnacle of modern furniture design. The ergonomic form provides superior support 
                    while maintaining an elegant aesthetic that complements any interior space.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Each piece is carefully constructed using traditional techniques merged with 
                    contemporary manufacturing processes. The result is a durable, beautiful piece 
                    of furniture that will enhance your space for years to come. Ideal for both 
                    residential and commercial applications.
                  </p>
                </TabsContent>

                {/* Specifications Tab */}
                <TabsContent value="specifications" className="mt-6">
                  <div className="space-y-3">
                    {specifications.map((spec, index) => (
                      <div 
                        key={index}
                        className="flex justify-between py-3 border-b last:border-b-0"
                      >
                        <span className="font-medium">{spec.label}</span>
                        <span className="text-muted-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Options & Finishes Tab */}
                <TabsContent value="options" className="mt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-3">Available Finishes</h4>
                      <div className="grid grid-cols-4 gap-4">
                        {finishOptions.map((finish, index) => (
                          <div 
                            key={index}
                            className="flex flex-col items-center gap-2 p-3 border rounded-lg hover:border-primary cursor-pointer transition-colors"
                          >
                            <div 
                              className="w-16 h-16 rounded-full border-2 border-border"
                              style={{ backgroundColor: finish.color }}
                            />
                            <span>{finish.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Footer with AI-Powered Carousels */}
            <DrawerFooter className="border-t bg-muted/30 px-6 py-8">
              <div className="space-y-8">
                {/* Goes Well With Section */}
                <div>
                  <h3 className="mb-4">Goes Well With</h3>
                  <div className="w-full overflow-x-auto">
                    <div className="flex gap-4 pb-4">
                      {relatedProducts.map((relatedProduct) => (
                        <div key={relatedProduct.id} className="flex-shrink-0 w-64">
                          <ProductCard product={relatedProduct} onSelect={() => {}} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Similar Alternatives Section */}
                <div>
                  <h3 className="mb-4">Similar Alternatives</h3>
                  <div className="w-full overflow-x-auto">
                    <div className="flex gap-4 pb-4">
                      {similarProducts.map((similarProduct) => (
                        <div key={similarProduct.id} className="flex-shrink-0 w-64">
                          <ProductCard product={similarProduct} onSelect={() => {}} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </DrawerFooter>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
