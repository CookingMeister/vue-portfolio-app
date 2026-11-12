import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import AboutSection from '../AboutSection.vue'
import { about, site } from '@/data/site.js'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: { template: '<div />' } },
    { path: '/portfolio', component: { template: '<div />' } },
    { path: '/contact', component: { template: '<div />' } }
  ]
})

const mountAbout = () => mount(AboutSection, { global: { plugins: [router] } })

describe('AboutSection', () => {
  it('renders the heading, every bio paragraph, and the portrait', () => {
    const wrapper = mountAbout()

    expect(wrapper.find('h1').text()).toBe(about.heading)
    expect(wrapper.findAll('.about__copy p')).toHaveLength(about.paragraphs.length)

    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe(about.portrait.src)
    expect(img.attributes('alt')).toBe(about.portrait.alt)
  })

  it('keeps intro, portrait, copy, and highlights in reading order', () => {
    // Grid areas, not reordering: source order stays the reading and tab order.
    const wrapper = mountAbout()
    const order = wrapper
      .findAll('.about__intro, .about__portrait, .about__copy, .about__highlights')
      .map((el) => el.classes().find((c) => c.startsWith('about__')))

    expect(order).toEqual(['about__intro', 'about__portrait', 'about__copy', 'about__highlights'])
  })

  it('does not lazy-load the portrait, which is above the fold', () => {
    // `loading="lazy"` on an LCP image delays the largest paint.
    const img = mountAbout().find('img')

    expect(img.attributes('loading')).toBeUndefined()
    expect(img.attributes('fetchpriority')).toBe('high')
  })

  it('shows the path, tagline, location, and career highlights', () => {
    const wrapper = mountAbout()

    expect(wrapper.text()).toContain('~/about')
    expect(wrapper.text()).toContain(about.subheading)
    expect(wrapper.text()).toContain(site.location)
    expect(wrapper.find('.about__meta').text()).toBe(site.location)
    expect(wrapper.findAll('.about__highlight-list li')).toHaveLength(about.highlights.length)
  })

  it('uses the shared block cursor beside the full tagline', () => {
    const wrapper = mountAbout()
    const tagline = wrapper.find('.about__tagline')

    expect(tagline.find('.about__tagline-text').text()).toBe(about.subheading)
    expect(tagline.find('.cursor-block').attributes('aria-hidden')).toBe('true')
  })

  it('links onward to work and contact', () => {
    const wrapper = mountAbout()

    expect(wrapper.find('a[href="/portfolio"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(true)
  })
})
