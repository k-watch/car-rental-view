import { NextSeo } from 'next-seo';

interface MeatTagProps {
  title: string;
  description: string;
  imgSrc: string;
  url: string;
}

const MetaTag = (props: MeatTagProps) => {
  return (
    <NextSeo
      title={props.title}
      description={props.description}
      canonical={props.url}
      openGraph={{
        type: 'website',
        url: props.url,
        title: props.title,
        description: props.description,
        images: [
          {
            url: props.imgSrc,
            width: 1200,
            height: 630,
          },
        ],
      }}
    />
  );
};

export default MetaTag;
