
import Image from 'next/image';
import type { Location } from '@/data/locations';
import { PinIcon, BoxIcon, PhoneIcon, MailIcon } from '@/components/icons/contact-icons';

type LocationCardProps = {
  location: Location;
};

export function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div className="relative aspect-[4/5] w-full rounded-md shadow-md overflow-hidden">
        <Image
          src={location.image}
          alt={`View of ${location.title}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-light mb-8">{location.title}</h3>
        
        <div className="space-y-6 text-gray-700">
          <div className="flex items-start gap-4">
            <PinIcon className="size-5 mt-1 shrink-0 text-gray-400" aria-hidden="true" />
            <div>
              <p className="font-semibold text-sm text-gray-800">Address</p>
              {location.addressLines.map((line, i) => <p key={i}>{line}</p>)}
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <BoxIcon className="size-5 mt-1 shrink-0 text-gray-400" aria-hidden="true" />
            <div>
              <p className="font-semibold text-sm text-gray-800">PO Box</p>
              <p>{location.pobox}</p>
              <p>{location.country}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <PhoneIcon className="size-5 mt-1 shrink-0 text-gray-400" aria-hidden="true" />
            <div>
              <p className="font-semibold text-sm text-gray-800">Phone Number</p>
              <p>{location.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MailIcon className="size-5 mt-1 shrink-0 text-gray-400" aria-hidden="true" />
            <div>
              <p className="font-semibold text-sm text-gray-800">Email Address</p>
              <p>{location.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
