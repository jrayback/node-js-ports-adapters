import Money from 'js-money'

export const getRandomImageUrl = (): string => {
  const images: string[] = [
    'https://imgs.search.brave.com/6Vz0ELfQ0J7UI5KusjTF64ZWnWCtOQa3v1qewANrTBU/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5DbEVYdjZV/SFBBaE9aLTROZGlh/dXBnSGFIYSZwaWQ9/QXBp',
    'https://imgs.search.brave.com/rnRugC9P_04qJOpxV5cIH_Ao1KGsS1YFZ3L288yc3Cs/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5DOHdQdWNt/YVZrWktvWTIwQVpR/TUJ3SGFKNCZwaWQ9/QXBp',
    'https://imgs.search.brave.com/aq2i4G2vFDno2NE7QquxJo3cq8gZQ_HREYdnScDshKc/rs:fit:715:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/VWF4aHBvbWptYXVn/dHFvS2J4THNRSGFF/NiZwaWQ9QXBp',
    'https://imgs.search.brave.com/h99Ba1wE3YJu486m3dmPVIW9QVdWDYnxf6PX4xNb3Mw/rs:fit:909:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/LWhDQmcwWGZGWXRm/SC1zRVNNOWFnSGFE/MyZwaWQ9QXBp',
    'https://imgs.search.brave.com/MGkdiGgq9H-D6_NGDjqFTVSJzACEiayRSU8r_7sxY5M/rs:fit:605:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/aGRZcDh4eHpwVlpD/WW02NHJfa3lRSGFG/eiZwaWQ9QXBp',
    'https://imgs.search.brave.com/9a1sUManZjBbxwnG9zt5N5c4dukLT3PJV9qwUtHyIJA/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/bnFOUzFqeGNGMEhw/SUVKTW5CaWhRSGFM/RyZwaWQ9QXBp',
    'https://imgs.search.brave.com/Tu4Ujeb7P5JaUX71WwHO7pA3pMthOxaoAl3VqLawBAc/rs:fit:940:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/WDAtOHcyOUFuVGNn/ZWVtUUhyeTFnSGFE/diZwaWQ9QXBp',
    'https://imgs.search.brave.com/x3Y-sbjuXrMndtP4VLftNV-_BRo3-bTBPSB_PCQcl24/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/WWZ5YzYzUzBqSHR1/Rzg1ZzlPV193SGFI/YSZwaWQ9QXBp',
    'https://imgs.search.brave.com/7Ciu9TTc0eCUQudi_ZJ-_M1KSS5afgJesB14nWk8aeQ/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/NHpCdUpBSFVBRW1r/VVd6MEFsQmxRSGFI/YSZwaWQ9QXBp',
    'https://imgs.search.brave.com/BWixYg4c519x2JWARHiDwqKB2p6MKX0H-QquWwmbuGU/rs:fit:504:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC44/enZWQlF2blVBejdS/Y3RqaFRjVUhBSGFH/OSZwaWQ9QXBp'
  ]
  const min = 0
  const max = images.length
  const index = getRandomInteger(min, max)
  return images[index]
}

export const getRandomPrice = (): Money => {
  const min = 1.13
  const max = 99.99
  const seed = getRandomNumber(min, max)
  return Money.fromDecimal(seed, Money.USD, Math.ceil)
}

export const getRandomDescription = (): string => {
  const loremIpsum: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Vitae turpis massa sed elementum tempus egestas sed.',
    'Pretium nibh ipsum consequat nisl vel.',
    'Ultricies integer quis auctor elit sed vulputate mi.',
    'Eget velit aliquet sagittis id.',
    'Maecenas sed enim ut sem viverra.',
    'Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.',
    'Arcu dictum varius duis at consectetur lorem donec massa sapien.',
    'Lacinia at quis risus sed vulputate odio ut enim blandit.',
    'Nunc sed id semper risus in hendrerit gravida.',
    'Pretium fusce id velit ut.',
    'Placerat orci nulla pellentesque dignissim enim sit.',
    'Scelerisque varius morbi enim nunc.',
    'Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu.',
    'Diam phasellus vestibulum lorem sed risus ultricies tristique nulla.',
    'Ultricies lacus sed turpis tincidunt id aliquet risus feugiat.',
    'Blandit massa enim nec dui nunc mattis enim ut.',
    'Congue eu consequat ac felis donec et odio pellentesque diam.',
    'Nulla facilisi nullam vehicula ipsum a arcu cursus.',
    'Ultrices tincidunt arcu non sodales neque sodales ut etiam.'
  ]
  const min = 0
  const max = loremIpsum.length - 5
  const start = getRandomInteger(min, max)
  const description = `${loremIpsum[start]} ${loremIpsum[start + 1]} ${loremIpsum[start + 2]} ${loremIpsum[start + 3]} ${loremIpsum[start + 4]}`
  return description
}

function getRandomInteger (min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function getRandomNumber (min: number, max: number): number {
  return (Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}
