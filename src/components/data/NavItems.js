// FONTAWESOME ICONS
import { faBandcamp, faSpotify, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCompactDisc } from '@fortawesome/free-solid-svg-icons'

const navItems = [
    {
        name: `'Primordium...' EP (🇺🇸 )`,
        link: 'https://paraphilia.bandcamp.com/',
        icon: faBandcamp,
        active: true,
        desktop: true,
        mobile: true,
        key: 9
    },
    {
        name: `'Primordium...' EP (🇪🇺 )`,
        link: 'https://brutalcaveproductions.bandcamp.com/album/primordium-of-sinister-butchery',
        icon: faBandcamp,
        active: true,
        desktop: false,
        mobile: true,
        key: 1
    },
    {
        name: 'Spotify',
        link: 'https://open.spotify.com/album/237yH9ZnTKGt4f3P1pVNP2',
        icon: faSpotify,
        active: true,
        desktop: true,
        mobile: true,
        key: 5
    },
    {
        name: 'EPK',
        link: 'https://www.sonicbids.com/band/paraphilia/',
        icon: faCompactDisc,
        active: true,
        desktop: false,
        mobile: true,
        key: 6
    },
    {
        name: 'Instagram',
        link: 'https://instagram.com/paraphilia.band',
        icon: faInstagram,
        active: true,
        desktop: true,
        mobile: true,
        key: 2
    },
    {
        name: 'Facebook',
        link: 'https://facebook.com/paraphilia.band',
        icon: faFacebook,
        active: true,
        desktop: false,
        mobile: true,
        key: 8
    },
    {
        name: 'Contact',
        link: 'mailto:paraphilia.pnw@gmail.com',
        icon: faEnvelope,
        active: true,
        mobile: true,
        desktop: true,
        key: 4
    },
]

export default navItems;