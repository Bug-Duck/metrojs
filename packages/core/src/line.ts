import { Site } from "./site"

export enum LineType {
  Loop = 'loop',
  Straight = 'straight',
}
export class Line {
  private startX: number = 0
  private startY: number = 0
  private endX: number = 0
  private endY: number = 0
  private theme: string = '#000'
  public sites: Site[] = []
  
  constructor(private type: LineType) {}

  startAt(x: number, y: number): Line {
    this.startX = x
    this.startY = y
    return this
  }

  lastAt(x: number, y: number): Line {
    if (this.type === LineType.Loop) {
      throw new Error('Loop line does not have end point')
    }
    this.endX = x
    this.endY = y
    return this
  }

  endLoop(): Line {
    if (this.type !== LineType.Loop) {
      throw new Error('Line is not a loop')
    }
    this.endX = this.startX
    this.endY = this.startY
    return this
  }

  setTheme(newTheme: string): Line {
    this.theme = newTheme
    return this
  }

  getTheme(): string {
    return this.theme
  }

  to(site: Site): Line {
    this.endX = site.x
    this.endY = site.y
    this.sites.push(site)
    return this
  }
}

export function createLine(type: LineType): Line {
  return new Line(type)
}
