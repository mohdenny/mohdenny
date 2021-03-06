import Image from 'next/image'

const Thumb = ({ data }) => {
    return (
        <>
            {
                data.media_type == 'image' ?
                    <Image src={data.hdurl} className='rounded-xl' layout="fill" objectFit="cover" />
                :
                <iframe
                    title="space-video"
                    src={data.url}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="h-full w-full rounded-t-xl"
                />
            }
        </>
    )
}

export default Thumb