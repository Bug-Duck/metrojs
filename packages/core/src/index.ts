import { createLine, Line } from "./line"
import { createRenderer } from "./renderer"
import { Site } from "./site"

export interface MetroOptions {
  container: HTMLElement
  width: number
  height: number
}

export class Metro {
  private container: HTMLElement | null = null
  lines: ReturnType<typeof createLine>[] = []
  element: SVGElement | null = null
  width: number | null = null
  height: number | null = null

  private _create(options: MetroOptions) {
    this.container = options.container
    this.width = options.width
    this.height = options.height
    this.element = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    this.element.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`)
    this.element.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    this.element.setAttribute('width', this.width.toString())
    this.element.setAttribute('height', this.height.toString())
    this.container.appendChild(this.element)
  }

  static create(options: MetroOptions) {
    const metro = new Metro()
    metro._create(options)
    return metro
  }

  addLine(line: Line) {
    this.lines.push(line)
    return this
  }

  render() {
    createRenderer(this).render()
  }
}

export * from './line'
export * from './renderer'
export * from './site'
