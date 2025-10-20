import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { OfferItem } from "../../types/project";

interface OfferSummaryProps {
  offerItems: OfferItem[];
  onPrepareOffer?: () => void;
}

/**
 * Offer Summary panel showing selected products and total cost.
 * Sticky sidebar component for the project detail screen.
 */
export function OfferSummary({ offerItems, onPrepareOffer }: OfferSummaryProps) {
  const totalCost = offerItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Card className="sticky top-20 h-fit">
      <CardHeader>
        <CardTitle>Offer Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {offerItems.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            No items added to offer yet
          </p>
        ) : (
          <>
            <div className="space-y-3">
              {offerItems.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="line-clamp-1 flex-1">{item.product.title}</span>
                    <span className="ml-2 shrink-0">
                      ${item.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{item.product.brand}</p>
                  {item.quantity > 1 && (
                    <p className="text-muted-foreground">Qty: {item.quantity}</p>
                  )}
                </div>
              ))}
            </div>
            
            <Separator />
            
            <div className="flex justify-between">
              <span>Total Estimated Cost</span>
              <span className="font-medium">
                ${totalCost.toLocaleString()}
              </span>
            </div>
          </>
        )}
      </CardContent>
      {offerItems.length > 0 && (
        <CardFooter>
          <Button 
            className="w-full"
            onClick={onPrepareOffer}
          >
            Prepare Offer
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
