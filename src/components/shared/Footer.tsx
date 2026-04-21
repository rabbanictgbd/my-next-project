import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray'>
      <div className=''>
        <p className="text-sm">
          © {new Date().getFullYear()} My App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
