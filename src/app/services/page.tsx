import { redirect } from 'next/navigation';
import { services } from '@/data/services';

export default function ServicesPage() {
  if (services.length > 0) {
    redirect(`/services/${services[0].slug}`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl">No services available.</h1>
    </div>
  );
}
