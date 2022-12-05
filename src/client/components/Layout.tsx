import { ReactNode } from 'react';
import '../main.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* TODO: navbar, auth, etc */}
      <main>{children}</main>
      {/* TODO: footer */}
    </>
  );
}
