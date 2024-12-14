import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Qualia Carpet Addition',
    Svg: require('@site/static/img/qca.svg').default,
    description: (
      <>
        <Translate
         id="homepage.feature.qca.desc"
         description="The desc of feature qca."
         values={{
          carpetLink: (
            <Link to='https://github.com/gnembon/fabric-carpet'>
              <Translate
               id="homepage.feature.qca.desc.carpetLink"
               description="The link title of carpet mod."
              >
              Carpet Mod
              </Translate>
            </Link>
          )
         }}
        >
          {'An addition for {carpetLink}. Added some rules that can make Minecraft lazier.'}
        </Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
