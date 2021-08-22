import React from 'react'

const BcPlayer = () => {
    const albumData = [
        {
          'name': 'Primordium of Sinister Butchery', 
          'machine_name': 'daybreaks-advent', 
          'id': '4220900892',
          'tracks': [
            '1236276314', 
            '616080703'
          ]
        }
    ]

    type Album = {
      name: string,
      machine_name: string,
      id: string,
      tracks: string[]
    }

    function getRandomInt(max : number) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    const getRandomTrack = (albumData: Album) => {
        let albumId: string = albumData.id;
        let tracks: string[] = albumData['tracks'];
        let randomInt: number = getRandomInt(tracks.length);
        let trackSrc: string = `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=small/bgcol=000000/linkcol=0f91ff/track=${tracks[randomInt]}/transparent=true/`
        return trackSrc;
    }

    const albumMachineName = `https://paraphilia.bandcamp.com/album/${albumData[0].machine_name}`

    return ( 
        <div className="bc--player">
            <iframe title="Maestus Bandcamp Player" style={{border: '0', width: '100%', height: '42px'}} src={getRandomTrack(albumData[0])} seamless><a href={albumMachineName}>{albumData[0].name} by Maestus</a></iframe>
        </div>
    )
}

export default BcPlayer;