const getRandomImageUrl = () => {
  const images = [
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
  const max = images.length - 1
  const index = getRandomInt(min, max)
  return images[index]
}

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

module.exports = getRandomImageUrl
