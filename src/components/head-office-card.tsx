
import { PinIcon, PhoneIcon, MailIcon } from '@/components/icons/contact-icons';
import { Button } from './ui/button';

// A simple WhatsApp icon component
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.451-4.437-9.885-9.888-9.885-5.452 0-9.888 4.434-9.888 9.885 0 2.201.835 4.385 2.438 6.082l-1.635 5.952 6.045-1.582z"/>
    </svg>
);


export function HeadOfficeCard() {
    return (
        <div className="bg-[#5C0A17] text-white p-8 rounded-2xl shadow-lg h-full flex flex-col justify-between">
            <div>
                <h3 className="text-3xl font-semibold mb-6">Head Office</h3>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <PinIcon className="size-6 mt-1 shrink-0 text-white/80" aria-hidden="true" />
                        <div>
                            <p>Office no 302, Makateb Building, Maktoum road, Deira - Dubai, UAE</p>
                        </div>
                    </div>
                    <div className="pl-10">
                         <Button variant="outline" className="bg-transparent border-white/50 text-white hover:bg-white/10 hover:text-white">
                            Location Map
                        </Button>
                    </div>

                    <div className="flex items-start gap-4">
                        <WhatsAppIcon className="size-6 mt-1 shrink-0 text-white/80" />
                        <div>
                            <p className="font-semibold text-sm text-white/80">Whatsapp</p>
                            <a href="https://wa.me/9711234567" target="_blank" rel="noopener noreferrer" className="hover:underline">+971-123-4567</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <MailIcon className="size-5 mt-1 shrink-0 text-white/80" aria-hidden="true" />
                        <div>
                            <p className="font-semibold text-sm text-white/80">Email</p>
                            <a href="mailto:info@crownpillars.com" className="hover:underline">info@crownpillars.com</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <PhoneIcon className="size-5 mt-1 shrink-0 text-white/80" aria-hidden="true" />
                        <div>
                             <p className="font-semibold text-sm text-white/80">Call</p>
                            <a href="tel:+9711234567" className="hover:underline">+971-123-4567</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
