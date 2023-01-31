import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Likes from '../likes.vue'

describe('Vue wc-likes', () => {
  it('render :value prop correct', () => {
    const wrapper = mount(Likes, { props: { value: 1020 } })
    expect(wrapper.text()).toContain('1020');
  })
})
