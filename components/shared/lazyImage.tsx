import * as React from 'react';
import { Image } from '@chakra-ui/react';
import { Blurhash } from 'react-blurhash';
import ProgressiveImage from 'react-progressive-graceful-image';

type LazyImageProps = {
  blurHash: string;
  size?: string;
  width?: number;
  height?: number;
  layout?: string;
  rounded?: string;
};

const LazyImage = (props: LazyImageProps) => {
  const { blurHash, width, height, rounded } = props;
  const placeholder = '/assets/images/placeholder.png';

  return (
    <ProgressiveImage delay={500} src={''} placeholder={placeholder}>
      {(src: any, loading: any) => {
        return loading ? (
          <Blurhash
            hash={blurHash}
            width={width}
            height={height}
            punch={1}
            style={{ borderRadius: rounded ? '5px' : '' }}
          />
        ) : (
          <Image
            src={src}
            objectFit="cover"
            alt="cover image"
            width={width}
            height={height}
            rounded={rounded}
            fallbackSrc={placeholder}
          />
        );
      }}
    </ProgressiveImage>
  );
};

export default LazyImage;
