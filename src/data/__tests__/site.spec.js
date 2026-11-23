import { describe, it, expect } from 'vitest'
import {
  about,
  projects,
  socialLinks,
  skillCategories,
  resumeFile,
  websiteServices
} from '../site.js'

const allLinks = [
  websiteServices.url,
  ...socialLinks.map((link) => link.url),
  ...projects.flatMap((project) => project.links.map((link) => link.url))
]

// Client sites that are live on http only. Remove a host once it serves https.
const PENDING_HTTPS = ['polymathic.com', 'parsons.ca', 'parsons.on.ca']

describe('site data', () => {
  it('has no links to retired Heroku free dynos', () => {
    expect(allLinks.filter((url) => url.includes('herokuapp.com'))).toEqual([])
  })

  it('serves every outbound link over https, except hosts still waiting on a certificate', () => {
    for (const url of allLinks) {
      if (PENDING_HTTPS.includes(new URL(url).hostname)) continue
      expect(url, url).toMatch(/^https:\/\//)
    }
  })

  it('gives every project a unique id', () => {
    const ids = projects.map((project) => project.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('declares source availability for every project', () => {
    for (const project of projects) {
      const hasSource = project.links.some((link) => link.type === 'github')
      expect(hasSource || project.closedSource || project.sourcePlanned, project.title).toBeTruthy()
    }
  })

  it('keeps the SQLite IDE help bot separate from the upcoming ChromaDB sample', () => {
    const ide = projects.find((project) => project.id === 'plb-chat-ide')
    const sample = projects.find((project) => project.id === 'plb-chromadb-sample')

    expect(ide.title).toBe('PL/B IDE Help Bot')
    expect(sample.title).toBe('PL/B ChromaDB Sample')
    expect(sample.description).toContain('HTML help files')
    expect(sample.tags).toEqual(expect.arrayContaining(['Ollama', 'Gemma 4', 'embedding-gemma-2']))
    expect(ide.tags).toContain('SQLite')
    expect(ide.tags).not.toContain('ChromaDB')
    expect(ide.closedSource).toBe(true)
    expect(sample.tags).toContain('ChromaDB')
    expect(sample.sourcePlanned).toBe(true)
    expect(sample.closedSource).not.toBe(true)
    expect(sample.links).toEqual([])
    expect(ide.status).toBe('In development')
    expect(sample.status).toBe('In development')
  })

  it('only uses link types the card knows how to render', () => {
    for (const project of projects) {
      for (const link of project.links) {
        expect(['github', 'demo', 'site'], `${project.title}: ${link.type}`).toContain(link.type)
      }
    }
  })

  it('keeps the resume path free of a version or date', () => {
    expect(resumeFile).not.toMatch(/\d/)
  })

  // AboutSection.vue types the tagline out with `steps(63)` and `width: 63ch`. A CSP
  // that blocks inline styles means the length cannot be passed in from here, so if
  // the tagline changes, update both numbers in that component's CSS and this one.
  it('keeps the tagline at the length its typing animation is tuned for', () => {
    expect([...about.subheading]).toHaveLength(63)
  })

  it('has no duplicate skills within a category', () => {
    for (const category of skillCategories) {
      expect(new Set(category.skills).size, category.title).toBe(category.skills.length)
    }
  })
})
