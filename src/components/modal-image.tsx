'use client'

import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

interface ModalImageProps {
  modImage: string
  modImageWidth: number
  modImageHeight: number
  modImageAlt: string
}

export default function ModalImage({
  modImage,
  modImageWidth,
  modImageHeight,
  modImageAlt,
}: ModalImageProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <div className='w-full'>

      {/* Image */}
      <button
        className="relative flex justify-center items-center focus:outline-none focus-visible:ring  w-full focus-visible:ring-indigo-300 rounded-3xl group"
        onClick={() => { setModalOpen(true) }}
        aria-label="Watch the video"
      >
        <Image className="w-full h-auto block shadow-lg transition-shadow duration-300 ease-in-out" src={modImage} width={modImageWidth} height={modImageHeight} priority alt={modImageAlt} />
      </button>
      {/* End: Video modImagenail */}

      <Transition show={modalOpen} as={Fragment}>
        <Dialog onClose={() => setModalOpen(false)}>

          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-10 flex p-6"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <div className="max-w-5xl mx-auto h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
              <Image className="w-full h-auto block shadow-lg transition-shadow duration-300 ease-in-out" src={modImage} width={modImageWidth} height={modImageHeight} priority alt={modImageAlt} />

              </Dialog.Panel>
            </div>
          </Transition.Child>
          {/* End: Modal dialog */}

        </Dialog>
      </Transition>

    </div>
  )
}