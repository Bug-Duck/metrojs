import { createLine, createSite, LineType, Metro } from "@metrojs/core"

const metro = Metro.create({
  container: document.querySelector('#app')!,
  width: 3200,
  height: 1800,
})

const line1 = createLine(LineType.Straight)
const line2 = createLine(LineType.Straight)
const line3 = createLine(LineType.Straight)
const line4 = createLine(LineType.Loop)
const line5 = createLine(LineType.Straight)

line1.setTheme('#f00')
line2.setTheme('#0f0')
line3.setTheme('#00f')
line4.setTheme('#f0f')
line5.setTheme('#ff8c00')

const siteA1 = createSite(100, 200)
const siteA2 = createSite(400, 200)
const siteA3 = createSite(700, 400)
const siteA4 = createSite(1000, 400)
const siteA5 = createSite(1300, 200)

const siteB1 = createSite(300, 100)
const siteB2 = createSite(600, 300)
const siteB3 = createSite(900, 500)
const siteB4 = createSite(1200, 300)
const siteB5 = createSite(1500, 100)

const siteC1 = createSite(500, 100)
const siteC2 = createSite(500, 300)
const siteC3 = createSite(500, 500)
const siteC4 = createSite(500, 700)
const siteC5 = createSite(500, 900)

const siteD1 = createSite(800, 200)
const siteD2 = createSite(1000, 200)
const siteD3 = createSite(1000, 400)
const siteD4 = createSite(800, 400)

const siteE1 = createSite(100, 100)
const siteE2 = createSite(400, 300)
const siteE3 = createSite(700, 500)
const siteE4 = createSite(1000, 700)
const siteE5 = createSite(1300, 900)

line1.to(siteA1).to(siteA2).to(siteA3).to(siteA4).to(siteA5)
line2.to(siteB1).to(siteB2).to(siteB3).to(siteB4).to(siteB5)
line3.to(siteC1).to(siteC2).to(siteC3).to(siteC4).to(siteC5)
line4.to(siteD1).to(siteD2).to(siteD3).to(siteD4).to(siteD1)
line5.to(siteE1).to(siteE2).to(siteE3).to(siteE4).to(siteE5)

metro.addLine(line1)
metro.addLine(line2)
metro.addLine(line3)
metro.addLine(line4)
metro.addLine(line5)
metro.render()
