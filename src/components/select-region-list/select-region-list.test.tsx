import { render, screen } from '~/lib/test-utils'
import { SelectRegionList } from './select-region-list'

describe(SelectRegionList, () => {
  it('renders `Loading` message', () => {
    render(<SelectRegionList />)
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('renders `Any region` as the initial value', () => {
    render(<SelectRegionList />)
    expect(screen.getByText(/any region/i)).toBeInTheDocument()
  })
})
