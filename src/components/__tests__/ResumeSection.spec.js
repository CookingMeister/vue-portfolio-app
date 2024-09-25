import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ResumeSection from '../ResumeSection.vue'
import DownloadLink from '../DownloadLink.vue'

describe('ResumeSection', () => {
  it('renders the Resume section with DownloadLink component', () => {
    const wrapper = mount(ResumeSection)
    
    // Check if the section title is rendered
    expect(wrapper.text()).toContain('Resume')
    
    // Check if the DownloadLink component is present
    expect(wrapper.findComponent(DownloadLink).exists()).toBe(true)
  })

  it('displays skill categories', () => {
    const wrapper = mount(ResumeSection)
    
    const skillCategories = [
      'Libraries & Frameworks',
      'Tools & Platforms',
      'Languages',
      'Databases'
    ]

    skillCategories.forEach(category => {
      expect(wrapper.text()).toContain(category)
    })
  })
})
