import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '../FooterComponent.vue'
import { site, socialLinks } from '@/data/site.js'

describe('Footer', () => {
  it('renders current year', () => {
    const wrapper = mount(Footer)
    expect(wrapper.text()).toContain(new Date().getFullYear().toString())
  })

  it('contains social media links', () => {
    const wrapper = mount(Footer)
    expect(
      wrapper.find('a[href="https://github.com/CookingMeister?tab=repositories"]').exists()
    ).toBe(true)
    expect(wrapper.find('a[href="https://www.linkedin.com/in/shawn-meister/"]').exists()).toBe(true)
  })

  it('signs the page with the name, without repeating the domain or full location', () => {
    // The domain is already in the address bar and on the About page, and the
    // location is spelled out there too. The status bar carries only a short
    // path-style tag for the place.
    const wrapper = mount(Footer)

    expect(wrapper.text()).toContain(site.name)
    expect(wrapper.text()).not.toContain(site.domain)
    expect(wrapper.text()).not.toContain(site.location)
  })

  it('links to the source of the site', () => {
    const wrapper = mount(Footer)
    expect(wrapper.find(`a[href="${site.repo}"]`).text()).toContain('Source')
  })

  it('opens every external link safely', () => {
    const wrapper = mount(Footer)
    const anchors = wrapper.findAll('a')

    // The social profiles, plus the link to this site's source.
    expect(anchors).toHaveLength(socialLinks.length + 1)
    for (const anchor of anchors) {
      expect(anchor.attributes('target')).toBe('_blank')
      expect(anchor.attributes('rel')).toContain('noopener')
    }
  })
})
