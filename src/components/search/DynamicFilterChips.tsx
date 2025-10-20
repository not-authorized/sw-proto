import { X } from "lucide-react";
import { Badge } from "../ui/badge";
import { useState } from "react";

interface FilterChip {
  id: string;
  label: string;
  isActive: boolean;
}

interface DynamicFilterChipsProps {
  isVisible?: boolean;
}

/**
 * Dynamic filter chips that appear after a search is initiated.
 * Displays contextual filters based on search results.
 */
export function DynamicFilterChips({ isVisible = true }: DynamicFilterChipsProps) {
  const [filters, setFilters] = useState<FilterChip[]>([
    { id: "price", label: "+ Set Price Range", isActive: false },
    { id: "material", label: "+ Specify Material", isActive: false },
    { id: "brand", label: "Brand: Knoll", isActive: true },
  ]);

  const handleFilterToggle = (id: string) => {
    setFilters(filters.filter(f => f.id !== id));
  };

  if (!isVisible) return null;

  return (
    <div className="border-b border-border bg-background">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <Badge
              key={filter.id}
              variant={filter.isActive ? "default" : "outline"}
              className="cursor-pointer hover:bg-accent transition-colors"
              onClick={() => !filter.isActive && handleFilterToggle(filter.id)}
            >
              {filter.label}
              {filter.isActive && (
                <X
                  className="ml-1 h-3 w-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFilterToggle(filter.id);
                  }}
                />
              )}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
