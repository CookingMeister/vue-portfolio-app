import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ResumeSection from '../ResumeSection.vue'
import DownloadLink from '../DownloadLink.vue'
import { career, skillCategories, resumeFile, whoami } from '@/data/site.js'

describe('ResumeSection', () => {
  it('renders the Resume section with DownloadLink component', () => {
    const wrapper = mount(ResumeSection)

    expect(wrapper.text()).toContain('Resume')
    expect(wrapper.findComponent(DownloadLink).exists()).toBe(true)
  })

  it('prints every whoami fact in the terminal card', () => {
    const wrapper = mount(ResumeSection)
    const terminal = wrapper.find('.terminal')

    expect(terminal.findAll('dt')).toHaveLength(whoami.length)
    for (const fact of whoami) {
      expect(terminal.text()).toContain(fact.value)
    }
  })

  it('lists every career entry, with the years before software marked', () => {
    const wrapper = mount(ResumeSection)
    const entries = wrapper.findAll('.career__entry')

    expect(entries).toHaveLength(career.length)
    for (const entry of career) {
      expect(wrapper.text()).toContain(entry.title)
    }
    expect(wrapper.findAll('.career__entry--before')).toHaveLength(
      career.filter((entry) => entry.kind !== 'software').length
    )
  })

  it('announces plain headings, not the decorative shell prompts', () => {
    const wrapper = mount(ResumeSection)
    const headings = wrapper.findAll('h2').map((h2) => h2.find('.visually-hidden').text())

    expect(headings).toEqual(['Experience and education', 'Skills'])
  })

  it('renders every skill category from site data', () => {
    const wrapper = mount(ResumeSection)

    for (const category of skillCategories) {
      expect(wrapper.text()).toContain(category.title)
    }
  })

  it('lists the current toolset, including recent work', () => {
    const wrapper = mount(ResumeSection)
    const text = wrapper.text()

    for (const skill of [
      'C',
      'PL/B + Visual PL/B',
      'Azure',
      'IIS 10',
      'OPNsense firewall & routing'
    ]) {
      expect(text).toContain(skill)
    }
  })

  it('points the resume download at a version-neutral path', () => {
    const wrapper = mount(ResumeSection)
    const link = wrapper.find(`a[href="${resumeFile}"]`)

    expect(link.exists()).toBe(true)
    expect(resumeFile).not.toMatch(/\d{4}/)
  })
})
