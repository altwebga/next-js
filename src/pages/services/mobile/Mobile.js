import mobileAnnotationLarge from 'assets/mobile-img/mobile-annotation-large.png';
import mobileAnnotationPlaceholder from 'assets/mobile-img/mobile-annotation-placeholder.png';
import mobileAnnotation from 'assets/mobile-img/mobile-annotation.png';
import mobileBackgroundBarLarge from 'assets/mobile-img/mobile-background-bar-large.png';
import mobileBackgroundBarPlaceholder from 'assets/mobile-img/mobile-background-bar-placeholder.jpg';
import mobileBackgroundBar from 'assets/mobile-img/mobile-background-bar.png';
import mobileBackgroundLarge from 'assets/mobile-img/mobile-background-large.jpg';
import mobileBackgroundPlaceholder from 'assets/mobile-img/mobile-background-placeholder.jpg';
import mobileBackground from 'assets/mobile-img/mobile-background.jpg';
import mobileSidebarAnnotationsLarge from 'assets/mobile-img/mobile-sidebar-annotations-large.png';
import mobileSidebarAnnotationsPlaceholder from 'assets/mobile-img/mobile-sidebar-annotations-placeholder.png';
import mobileSidebarAnnotations from 'assets/mobile-img/mobile-sidebar-annotations.png';
import mobileSidebarLayersLarge from 'assets/mobile-img/mobile-sidebar-layers-large.png';
import mobileSidebarLayersPlaceholder from 'assets/mobile-img/mobile-sidebar-layers-placeholder.png';
import mobileSidebarLayers from 'assets/mobile-img/mobile-sidebar-layers.png';
import mobileSlidesLarge from 'assets/mobile-img/mobile-slides-large.jpg';
import mobileSlidesPlaceholder from 'assets/mobile-img/mobile-slides-placeholder.jpg';
import mobileSlides from 'assets/mobile-img/mobile-slides.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { Link } from 'components/Link';
import {
  ServicesBackground,
  ServicesContainer,
  ServicesHeader,
  ServicesSection,
  ServicesSectionColumns,
  ServicesSectionContent,
  ServicesSectionHeading,
  ServicesSectionText,
  ServicesTextRow,
} from 'layouts/Services';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Mobile.module.css';

const title = 'Разработка мобильных приложений';
const description =
  'Делаю мобильные приложение с пожизненной гарантией в 2 раза быстрее. За счет использования современных кросс-платформенных решений React Native';
const roles = ['React Native', 'Expo', 'Figma'];

export const serviceMobile = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Services" description={description} />
      <ServicesContainer className={styles.mobile}>
        <ServicesBackground
          src={mobileBackground}
          srcSet={`${mobileBackground.src} 1280w, ${mobileBackgroundLarge.src} 2560w`}
          placeholder={mobileBackgroundPlaceholder}
          opacity={0.8}
        />
        <ServicesHeader
          title={title}
          description={description}
          url="/contact"
          roles={roles}
        />
        <ServicesSection>
          <ServicesSectionContent>
            <ServicesTextRow>
              <ServicesSectionHeading>Что такое React Native?</ServicesSectionHeading>
              <ServicesSectionText>
                React Native – кроссплатформенный фреймворк на основе JavaScript, который
                позволяет создавать приложения для iOS и Android. Главная особенность
                библиотеки React Native в том, что UI и бизнес-логика для приложения
                реализовываются один раз с использованием одного и того же кода. При этом
                они работают как полностью нативные, учитывая особенности операционных
                систем. Благодаря React Native без потери качества сокращается время,
                необходимое для разработки. В состав платформы входят инструменты: React
                (включая Hooks), Redux, React Router, Webpack и Babel.
              </ServicesSectionText>
              <ServicesSectionText>
                На платформе React Native разработаны такие популярные кроссплатформенные
                мобильные приложения, как Facebook, Instagram, Bloomberg, Artsy, Coinbase
                Pro, Airbnb, Tesla, SoundCloud, Pulse, UberEATS, Shopify и многие другие.
              </ServicesSectionText>
            </ServicesTextRow>
          </ServicesSectionContent>
        </ServicesSection>
        <ServicesSection>
          <ServicesSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ServicesSectionHeading>Преимущества React Native</ServicesSectionHeading>
              <ServicesSectionText>
                Быстрое время разработки: Благодаря мультиплатформенности React Native,
                разработчики могут использовать одну и ту же базу кода для создания
                приложений на различных платформах. Это сокращает время и ресурсы на
                разработку, что в конечном итоге ведет к быстрому выводу продукта на
                рынок.
              </ServicesSectionText>
              <ServicesSectionText>
                Экономия бюджета: Так как разработка приложения ведется одновременно для
                нескольких платформ, не требуется нанимать отдельные команды для каждой
                платформы. Это сокращает затраты на разработку и поддержку приложения.
              </ServicesSectionText>
              <ServicesSectionText>
                Обновления на лету: React Native позволяет разработчикам внедрять
                обновления без необходимости прохождения сложного процесса утверждения в
                магазинах приложений. Это означает, что исправление ошибок или добавление
                новых функций может быть выполнено быстрее, что улучшает пользовательский
                опыт.
              </ServicesSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[mobileSidebarLayers, mobileSidebarLayersLarge]}
                placeholder={mobileSidebarLayersPlaceholder}
                alt="Что такое React Native?"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[mobileSidebarAnnotations, mobileSidebarAnnotationsLarge]}
                placeholder={mobileSidebarAnnotationsPlaceholder}
                alt="Что такое React Native?"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ServicesSectionColumns>
        </ServicesSection>
        <ServicesSection light>
          <ServicesSectionContent>
            <ServicesTextRow>
              <ServicesSectionHeading>
                Зачем нужно мобильное приложение?
              </ServicesSectionHeading>
              <ServicesSectionText>
                Прямая коммуникация с клиентами. Приложения позволяют предоставлять
                уведомления, специальные предложения и акции напрямую пользователям.
              </ServicesSectionText>
              <ServicesSectionText>
                Улучшенный клиентский сервис. Приложения могут обеспечить круглосуточную
                поддержку, что упрощает процесс обслуживания клиентов.
              </ServicesSectionText>
              <ServicesSectionText>
                Повышение продаж. Мобильные приложения могут облегчить покупку товаров или
                услуг, что в свою очередь может способствовать увеличению продаж.
              </ServicesSectionText>
              <ServicesSectionText>
                Лояльность клиентов. Используя мобильное приложение, бизнес может
                создавать программы лояльности, обеспечивая клиентам награды за повторные
                покупки.
              </ServicesSectionText>
              <ServicesSectionText>
                Брендинг и видимость. Приложение является отличной платформой для
                демонстрации бренда и увеличения его узнаваемости.
              </ServicesSectionText>
              <ServicesSectionText>
                Анализ данных. Приложения позволяют собирать ценные данные о поведении
                пользователей, что может помочь в принятии бизнес-решений.
              </ServicesSectionText>
              <ServicesSectionText>
                Можно много писать о достоинствах мобильного приложения, но лучше всего об
                этом могут рассказать исследования и цифры.{' '}
                <Link href="https://yandex.ru/company/researches/2022/ecomdash#popularity">
                  Развитие онлайн-торговли в России. 2022
                </Link>
              </ServicesSectionText>
            </ServicesTextRow>
            <Image
              srcSet={[mobileSlides, mobileSlidesLarge]}
              placeholder={mobileSlidesPlaceholder}
              alt="Развитие онлайн-торговли в России. 2022"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ServicesSectionContent>
        </ServicesSection>
        <ServicesSection padding="top">
          <ServicesSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[mobileBackgroundBar, mobileBackgroundBarLarge]}
                  placeholder={mobileBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[mobileAnnotation, mobileAnnotationLarge]}
                  placeholder={mobileAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ServicesSectionHeading>Варианты сотрудничества.</ServicesSectionHeading>
              <ServicesSectionText>
                Разработка мобильных приложений очень непростая задача, именно поэтому
                цены на разработку у адекватных разработчиков стартуют от 500k, со сроками
                3-4 месяца.
              </ServicesSectionText>
              <ServicesSectionText>
                Моих знаний и опыта достаточно для полного цикла разработки небольшого
                приложения с публикацией в google play и appstore. Для более крупных
                проектов могу собрать команду из 2 разработчиков и дизайнера. Так же буду
                рад поработать в вашей команде если таковая имеется.
              </ServicesSectionText>
              <ServicesSectionText>
                Давайте вместе создадим потрясающее мобильное приложение!
              </ServicesSectionText>
              <ServicesSectionText>
                <Link href="/contact">Начать сотрудничество</Link>
              </ServicesSectionText>
            </div>
          </ServicesSectionContent>
        </ServicesSection>
      </ServicesContainer>
      <Footer />
    </Fragment>
  );
};