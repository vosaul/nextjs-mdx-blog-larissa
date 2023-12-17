import { promises as fs } from 'fs';
import ModalVideo from './modal-video';
export const VideoGrid = async () => {
  const file = await fs.readFile(process.cwd() + '/src/_data/video.json', 'utf8');
  const videos = JSON.parse(file);

  return (
    <div className="c">
      <div className="videosGridHeading">
        <h1>{videos.title}</h1>
        <p>{videos.descr}</p>
      </div>
      <div className="videosGridItems grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {videos.items.map(
          (item: { screenShot: string, videoUrl: string }, index: number) => {
            let videoId: string = item.videoUrl
            return (
              <div className="videosItem" key={'video' + index}>
                <ModalVideo
                  thumb={item.screenShot}
                  thumbWidth={300}
                  thumbHeight={200}
                  thumbAlt='video'
                  video={videoId}
                  videoWidth={900}
                  videoHeight={600}
                />
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
