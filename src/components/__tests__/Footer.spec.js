import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '../FooterComponent.vue'

describe('Footer', () => {
  it('renders current year', () => {
    const wrapper = mount(Footer)
    const currentYear = new Date().getFullYear().toString()
    expect(wrapper.text()).toContain(currentYear)
  })

  it('contains social media links', () => {
    const wrapper = mount(Footer)
    expect(wrapper.find('a[href="https://github.com/CookingMeister?tab=repositories"]').exists()).toBe(true)
    expect(wrapper.find('a[href="https://www.linkedin.com/in/shawn-meister/"]').exists()).toBe(true)
  })
})
