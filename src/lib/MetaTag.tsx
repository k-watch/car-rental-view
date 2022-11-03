import { Helmet } from 'react-helmet-async';
import { CarInterface } from 'types/api';
import { SEGMENT } from 'types/enum';
import { getAmountPattern } from './common';

const MetaTag = (props: CarInterface) => {
  const { attribute, amount } = props;
  return (
    <Helmet>
      <title>{`${attribute.brand} ${attribute.name}`}</title>

      <meta name="description" content={`${getAmountPattern(amount)} 원`} />

      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={`${attribute.brand} ${attribute.name}`}
      />
      <meta property="og:site_name" content="차량대여 서비스" />
      <meta property="og:description" content={SEGMENT[attribute.segment]} />
      <meta property="og:image" content={attribute.imageUrl} />
    </Helmet>
  );
};

export default MetaTag;
