import { Providers } from '@/redux/provider'
import './globals.css'
import type { Metadata } from 'next'
import AuthWrapper from '@/components/AuthWrapper';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Game Porte',
  description: 'Welcome to the gamers hub',
}

export default function RootLayout(props: {
  children: React.ReactNode;
}) {
  return (
     <html lang="en">
      <body >
        
        <Providers>
            <AuthWrapper>
            <div className="bg-bg-blue relative z-10">
              
           {/* <img src='assets/bg-image.png' className="w-screen h-full absolute inset-0 z-0 opacity-[.2]" alt='background overlay' /> */}
          {/* <Navbar /> */}
    
            {props.children}
         
               </div>
            <Footer />
               </AuthWrapper>
        </Providers>
    
      </body>
    </html>
  )
}
