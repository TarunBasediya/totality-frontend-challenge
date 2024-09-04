// src/app/layout.js
import './globals.css';
import { BookingProvider } from './context/BookingContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BookingProvider>
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}
