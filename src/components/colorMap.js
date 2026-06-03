const colorMap = {
  tosca: {
    bg: 'bg-tosca',
    bg10: 'bg-tosca-10',
    bg20: 'bg-tosca-20',
    text: 'text-tosca',
    border: 'border-tosca',
    border20: 'border-tosca-20',
    dot: 'bg-tosca',
    tagline: 'text-tosca-60',
    bar: 'bg-tosca',
  },
  blue: {
    bg: 'bg-blue',
    bg10: 'bg-blue-10',
    bg20: 'bg-blue-20',
    text: 'text-blue',
    border: 'border-blue',
    border20: 'border-blue-20',
    dot: 'bg-blue',
    tagline: 'text-blue-60',
    bar: 'bg-blue',
  },
  purple: {
    bg: 'bg-purple',
    bg10: 'bg-purple-10',
    bg20: 'bg-purple-20',
    text: 'text-purple',
    border: 'border-purple',
    border20: 'border-purple-20',
    dot: 'bg-purple',
    tagline: 'text-purple-60',
    bar: 'bg-purple',
  },
  pink: {
    bg: 'bg-pink',
    bg10: 'bg-pink-10',
    bg20: 'bg-pink-20',
    text: 'text-pink',
    border: 'border-pink',
    border20: 'border-pink-20',
    dot: 'bg-pink',
    tagline: 'text-pink-60',
    bar: 'bg-pink',
  },
  orange: {
    bg: 'bg-orange',
    bg10: 'bg-orange-10',
    bg20: 'bg-orange-20',
    text: 'text-orange',
    border: 'border-orange',
    border20: 'border-orange-20',
    dot: 'bg-orange',
    tagline: 'text-orange-60',
    bar: 'bg-orange',
  },
  yellow: {
    bg: 'bg-yellow',
    bg10: 'bg-yellow-10',
    bg20: 'bg-yellow-20',
    text: 'text-yellow',
    border: 'border-yellow',
    border20: 'border-yellow-20',
    dot: 'bg-yellow',
    tagline: 'text-yellow-60',
    bar: 'bg-yellow',
  },
}

export function getColorClasses(color) {
  return colorMap[color] || colorMap.tosca
}

export default colorMap
