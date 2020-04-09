import { Section } from './section'

export class MainContent {
  static createContent() {
    const content = document.createElement('div')
    content.classList.add('main-content')
    content.appendChild(Section.createSection())
    return content
  }
}