import { promises as fs } from 'fs';
import Image from 'next/image';
import Link from 'next/link';

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
            let videoId:string = item.videoUrl
            return (
              <div className="videosItem" key={'video'+index}>
                <p>ID={videoId}</p>
                <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+videoId+"?si=dxQ9qm49hz8ejqtv"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
