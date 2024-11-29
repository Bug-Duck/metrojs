export function createSite(x: number, y: number, name?: string) {
  let _name: string | undefined = name

  function setName(name: string) {
    _name = name
  }

  return {
    setName,
    x,
    y,
  }
}

export type Site = ReturnType<typeof createSite>
