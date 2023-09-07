import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { StyledComponentsRegistry } from '~/lib/styled-components-registry'
import { ApolloProvider } from '~/lib/apollo-provider'
import { AppHeader } from '~/components/app-header/app-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Challenge AvantStay',
  description: 'by Josué Machado',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ApolloProvider>
            <AppHeader />
            {children}
          </ApolloProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
