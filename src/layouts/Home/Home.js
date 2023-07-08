import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ServicesSummary } from 'layouts/Home/ServicesSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['дизайн', 'SEO', 'продвижение', 'реклама'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const servicesOne = useRef();
  const servicesTwo = useRef();
  const servicesThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, servicesOne, servicesTwo, servicesThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Дизан + Разработка"
        description="Портфолио Frontend-разработчика Кузнецова Константина - разработка web и мобильных приложений под ключ."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ServicesSummary
        id="services-1"
        sectionRef={servicesOne}
        visible={visibleSections.includes(servicesOne.current)}
        index={1}
        title="Разработка сайтов"
        description="Делаю сайты любой сложности, соответствующие вашим уникальным потребностям и целям, от простых визиток до сложных корпоративных сайтов и интернет-магазинов с интеграцией всех необходимых вам систем и сервисов."
        buttonText="Подробнее"
        buttonLink="/services/site"
        model={{
          type: 'laptop',
          alt: 'Разработка сайтов',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ServicesSummary
        id="services-2"
        alternate
        sectionRef={servicesTwo}
        visible={visibleSections.includes(servicesTwo.current)}
        index={2}
        title="Разработка мобильных приложений"
        description="Разработка мобильных приложений под iOS и Android на React Native."
        buttonText="Подробнее"
        buttonLink="/services/mobile"
        model={{
          type: 'phone',
          alt: 'Разработка мобильных приложений',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ServicesSummary
        id="services-3"
        sectionRef={servicesThree}
        visible={visibleSections.includes(servicesThree.current)}
        index={3}
        title="Реклама & Аналитика"
        description="В любой непонятной ситуации — анализируй. Эфективная трата рекламного бюджена и развитие проекта в интернете невозможно без опоры на данные"
        buttonText="Подробнее"
        buttonLink="/services/analytics"
        model={{
          type: 'laptop',
          alt: 'Аналитика',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
