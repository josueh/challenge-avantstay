import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { QueryStringContextProvider } from '~/contexts'
import { MockedProvider as ApolloMockedProvider } from '@apollo/client/testing'
import { graphqlMocks } from '~/graphql/index-mocks'
import '@testing-library/jest-dom'
import 'jest-styled-components'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryStringContextProvider initialSearchUrl="">
      <ApolloMockedProvider mocks={graphqlMocks}>{children}</ApolloMockedProvider>
    </QueryStringContextProvider>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
