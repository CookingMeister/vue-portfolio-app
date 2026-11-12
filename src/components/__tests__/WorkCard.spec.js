import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WorkCard from '../WorkCard.vue'

const base = {
  title: 'Example Project',
  description: 'A description of the project.',
  tags: ['C', 'Parsing']
}

describe('WorkCard', () => {
  it('renders title, description and tags without needing hover', () => {
    const wrapper = mount(WorkCard, { props: base })

    expect(wrapper.text()).toContain('Example Project')
    expect(wrapper.text()).toContain('A description of the project.')
    expect(wrapper.text()).toContain('Parsing')
  })

  it('marks link-less projects as closed source', () => {
    const wrapper = mount(WorkCard, { props: { ...base, links: [] } })

    expect(wrapper.findAll('a')).toHaveLength(0)
    expect(wrapper.text()).toContain('Closed source')
  })

  it('labels upcoming samples without claiming they are closed source or released', () => {
    const wrapper = mount(WorkCard, {
      props: { ...base, sourcePlanned: true, status: 'In development' }
    })

    expect(wrapper.find('.work-card__status').text()).toBe('In development')
    expect(wrapper.text()).toContain('Sample source planned')
    expect(wrapper.text()).not.toContain('Closed source')
    expect(wrapper.findAll('a')).toHaveLength(0)
  })

  it('renders demo and source links that open safely', () => {
    const wrapper = mount(WorkCard, {
      props: {
        ...base,
        links: [
          { type: 'demo', url: 'https://example.com/' },
          { type: 'github', url: 'https://github.com/example/repo' }
        ]
      }
    })

    const anchors = wrapper.findAll('a')
    expect(anchors).toHaveLength(2)

    for (const anchor of anchors) {
      expect(anchor.attributes('target')).toBe('_blank')
      expect(anchor.attributes('rel')).toContain('noopener')
    }

    expect(wrapper.text()).toContain('Live demo')
    expect(wrapper.text()).toContain('Source')
    expect(wrapper.text()).not.toContain('Closed source')
  })

  it('labels a production site "Live site", not "Live demo"', () => {
    const wrapper = mount(WorkCard, {
      props: { ...base, links: [{ type: 'site', url: 'https://example.com/' }] }
    })

    expect(wrapper.text()).toContain('Live site')
    expect(wrapper.text()).not.toContain('Live demo')
  })

  it('prefers the label a link carries over the default for its type', () => {
    const wrapper = mount(WorkCard, {
      props: {
        ...base,
        links: [{ type: 'site', label: 'example.com', url: 'https://example.com/' }]
      }
    })

    expect(wrapper.text()).toContain('example.com')
    expect(wrapper.text()).not.toContain('Live site')
  })

  it('reserves the padlock for closed-source work, not missing screenshots', () => {
    const linked = mount(WorkCard, {
      props: { ...base, links: [{ type: 'github', url: 'https://github.com/x/y' }] }
    })
    expect(linked.text()).not.toContain('Closed source')
    expect(linked.findAll('svg')).toHaveLength(2) // banner glyph + the source link icon

    const closed = mount(WorkCard, { props: { ...base, links: [] } })
    expect(closed.text()).toContain('Closed source')
  })

  it('falls back to a placeholder when a project has no image', () => {
    const withImage = mount(WorkCard, { props: { ...base, image: '/img/x.png', alt: 'X' } })
    expect(withImage.find('img').attributes('src')).toBe('/img/x.png')
    expect(withImage.find('img').attributes('alt')).toBe('X')

    const withoutImage = mount(WorkCard, { props: base })
    expect(withoutImage.find('img').exists()).toBe(false)
  })
})
