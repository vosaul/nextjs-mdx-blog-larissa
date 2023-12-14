import { promises as fs } from 'fs';
import Image from 'next/image'

export const VideoGrid = async () => {
  const file = await fs.readFile(process.cwd() + '/src/_data/video.json', 'utf8');
  const videos = JSON.parse(file);

  return (
    <div className="container">
      <div className="videosGridHeading">
        <h1>{videos.title}</h1>
        <p>{videos.descr}</p>
      </div>
      <div className="videosGridItems">
        {videos.items.map(
          (item:{screenShot:string, videoUrl:string}, index:number) => {
            return (
              <div className="videosItem" key={'video'+index}>
                <Image src={item.screenShot} alt={'video'} width={900} height={600}/>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
