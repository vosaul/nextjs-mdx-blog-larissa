'use client'
import React from "react";
import ModalImage from '@/components/modal-image'
import Masonry from 'react-masonry-css'
import portfolio from '@/_data/portfolio.json'

export const PictureGrid = () => {
  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    600: 1
  };
  
  return (
    <div className="container">
      <div className="picturesGridHeading">
        <h2>{portfolio.title}</h2>
        <p>{portfolio.descr}</p>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid flex w-auto gap-6 "
        columnClassName="my-masonry-grid_column">
        {portfolio.items.map(
          (item:{title:string, descr:string, src:string}, index:number) => {
            return (
              <div className="picturesItem border border-solid  mb-6" key={'picture'+index}>
                <ModalImage 
                  modImage={item.src}
                  modImageAlt={item.title}
                  modImageWidth={900}
                  modImageHeight={900}
                />
                <div className="p-5 bg-slate-100 dark:bg-slate-900">
                  <h3 className="m-0 p-0">{item.title}</h3>
                  <p className="mt-0 p-0">{item.descr}</p>
                </div>
              </div>
            )
          }
        )}
      </Masonry>
    </div>
  )
}
