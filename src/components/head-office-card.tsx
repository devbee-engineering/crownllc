
import { MapPin, MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';

export function HeadOfficeCard() {
  return (
    <div className="bg-brand text-white p-8 rounded-2xl h-full flex flex-col">
      <h3 className="font-display text-3xl mb-6">Head Office</h3>
      <div className="space-y-6 text-white/90 flex-grow">
        <div className="flex items-start gap-4">
          <MapPin className="h-5 w-5 mt-1 shrink-0" aria-hidden="true" />
          <p>EMCO International, Suite No. 801, 8th Floor, One Deira Building, Deira Enrichment Project, Dubai, UAE.</p>
        </div>
         <div className="flex items-start gap-4">
          <MessageCircle className="h-5 w-5 mt-1 shrink-0" aria-hidden="true" />
          <a href="https://wa.me/971554588850" target="_blank" rel="noopener noreferrer" className="hover:underline">+971 554588850</a>
        </div>
        <div className="flex items-start gap-4">
          <Mail className="h-5 w-5 mt-1 shrink-0" aria-hidden="true" />
          <a href="mailto:trade@emco.ae" className="hover:underline">trade@emco.ae</a>
        </div>
        <div className="flex items-start gap-4">
          <Phone className="h-5 w-5 mt-1 shrink-0" aria-hidden="true" />
          <a href="tel:+97145281999" className="hover:underline">+971 4 5281999</a>
        </div>
      </div>
       <Button asChild variant="outline" className="mt-8 bg-transparent border-white text-white hover:bg-white hover:text-brand w-full">
         <a href="#">Location Map</a>
      </Button>
    </div>
  );
}
