import { describe, it, expect } from 'vitest'

import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const user = userEvent.setup();

    render(HelloWorld, { props: { msg: 'Hello Vitest' } })

    expect(screen.getByText('Hello Vitest')).toBeTruthy();
    user.click(screen.getByText('Hello Vitest'));
  })
})
