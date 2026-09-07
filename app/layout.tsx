import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OrderLink | إدارة الطلبات ببساطة',
  description: 'نظّم الطلبات والعملاء والتوصيل من تطبيق واحد بسيط مع OrderLink.',
  openGraph: {
    title: 'OrderLink | اربط طلباتك. حرّك أعمالك.',
    description: 'نظّم الطلبات والعملاء والتوصيل من تطبيق واحد بسيط مع OrderLink.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'OrderLink' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OrderLink | اربط طلباتك. حرّك أعمالك.',
    description: 'نظّم الطلبات والعملاء والتوصيل من تطبيق واحد بسيط مع OrderLink.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
