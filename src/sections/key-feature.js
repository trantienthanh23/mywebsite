/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import CoTuNhien from 'assets/key-feature/performance.svg';
import CoNhanTao from 'assets/key-feature/partnership.svg';
import Futsal from 'assets/key-feature/subscription.svg';
import Treem from 'assets/key-feature/support.svg';
import FeatureCard from 'components/feature-card';

const data = [
  {
    id: 1,
    imgSrc: CoTuNhien,
    altText: 'Fast Performance',
    title: 'Giày cỏ tự nhiên',
    text:
      'CAM KẾT SẢN PHẨM CHÍNH HÃNG 100%. ĐƯỢC BỒI HOÀN GẤP 10 LẦN NẾU KHÔNG PHẢI CHÍNH HÃNG.',
  },
  {
    id: 2,
    imgSrc: CoNhanTao,
    altText: 'Partnership deal',
    title: 'Giày cỏ nhân tạo',
    text:
      'CAM KẾT SẢN PHẨM CHÍNH HÃNG 100%. ĐƯỢC BỒI HOÀN GẤP 10 LẦN NẾU KHÔNG PHẢI CHÍNH HÃNG.',
  },
  {
    id: 3,
    imgSrc: Futsal,
    altText: 'Pro Subscription',
    title: 'Giày futsal',
    text:
      'CAM KẾT SẢN PHẨM CHÍNH HÃNG 100%. ĐƯỢC BỒI HOÀN GẤP 10 LẦN NẾU KHÔNG PHẢI CHÍNH HÃNG.',
  },
  {
    id: 4,
    imgSrc: Treem,
    altText: 'Customer Support',
    title: 'Giày trẻ em',
    text:
      'CAM KẾT SẢN PHẨM CHÍNH HÃNG 100%. ĐƯỢC BỒI HOÀN GẤP 10 LẦN NẾU KHÔNG PHẢI CHÍNH HÃNG.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{variant:'section.keyFeature'}} id="feature">
     <SectionHeader
     slogan="What is your style?"
     title="Many options for you"
     />
     <Grid sx={styles.grid}>
       {data.map((item)=>(
         <FeatureCardColumn
          key={item.id}
          src={item.imgSrc}
          alt={item.altText}
          title={item.title}
          text={item.text}
         />
       ))}
     </Grid>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
