import { ReactNode } from 'react';
import '../../main.css';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    // TODO: add common layout for auth pages
    <>
      <main>{children}</main>
    </>
  );
}
