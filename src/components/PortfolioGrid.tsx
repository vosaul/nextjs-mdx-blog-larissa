import { promises as fs } from 'fs';
import Image from 'next/image'

export const PictureGrid = async () => {
  const file = await fs.readFile(process.cwd() + '/src/_data/portfolio.json', 'utf8');
  const portfolio = JSON.parse(file);

  return (
    <div className="container">
      <div className="picturesGridHeading">
        <h2>{portfolio.title}</h2>
        <p>{portfolio.descr}</p>
      </div>
      <div className="picturesGridItems">
        {portfolio.items.map(
          (item:{title:string, descr:string, src:string}, index:number) => {
            return (
              <div className="picturesItem" key={'picture'+index}>
                <h3>{item.title}</h3>
                <p>{item.descr}</p>
                <Image src={item.src} alt={item.title} width={900} height={600}/>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
