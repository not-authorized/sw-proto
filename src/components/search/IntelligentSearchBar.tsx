import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";

interface IntelligentSearchBarProps {
  onSearchChange?: (value: string) => void;
}

/**
 * The core intelligent search component.
 * Allows users to search by text description or image upload.
 */
export function IntelligentSearchBar({ onSearchChange }: IntelligentSearchBarProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange?.(value);
  };

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Describe a product or drop an image here..."
        value={searchValue}
        onChange={handleChange}
        className="w-full pl-10 bg-input-background border-border"
      />
    </div>
  );
}
