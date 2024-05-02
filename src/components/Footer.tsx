'use client';

import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="px-20 py-5 flex justify-between">
      <div className="left">
        &copy; 2024 | INVOICEMATE - All Rights reserved
      </div>
      <div className="right">
        Developed by{' '}
        <Link
          href={'https://www.jayraiweb.com'}
          className="hover:text-blue-400"
        >
          Jay Rai Web
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
