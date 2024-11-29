import { Metro, Site } from "./index"

export function createRenderer(metro: Metro) {
  const element = metro.element
  const svgLines: SVGGElement[] = []

  function render() {
    for (const line of metro.lines) {
      const sites: Site[] = []
      for (const site of line.sites) {
        if (!sites.includes(site)) {
          sites.push(site)
        }
      }
      const svgLine = document.createElementNS('http://www.w3.org/2000/svg', 'g')
      svgLine.setAttribute('fill', line.getTheme())
      const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline')
      polyline.setAttribute('stroke', line.getTheme())
      polyline.setAttribute('stroke-width', '15')
      polyline.setAttribute('fill', 'none')
      polyline.setAttribute('stroke-linecap', 'round')
      polyline.setAttribute('stroke-linejoin', 'round')
      let index = 0
      let points = ''
      for (const site of line.sites) {
        points += `${site.x},${site.y} `
        index++
      }
      polyline.setAttribute('points', points)
      svgLine.appendChild(polyline)
      svgLines.push(svgLine)
    }
    svgLines.forEach(svgLine => {
      element!.appendChild(svgLine)
    })
    const sites: Site[] = []
    for (const line of metro.lines) {
      for (const site of line.sites) {
        if (!sites.includes(site)) {
          sites.push(site)
        }
      }
    }
    for (const site of sites) {
      const svgSite = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      svgSite.setAttribute('cx', site.x.toString())
      svgSite.setAttribute('cy', site.y.toString())
      svgSite.setAttribute('r', '10')
      svgSite.setAttribute('stroke', '#000')
      svgSite.setAttribute('stroke-width', '2')
      svgSite.setAttribute('fill', 'white')
      element!.appendChild(svgSite)
    }
  }

  return {
    render,
  }
}

