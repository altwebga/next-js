import siteAnnotationLarge from 'assets/site-img/site-annotation-large.webp';
import siteAnnotationPlaceholder from 'assets/site-img/site-annotation-placeholder.webp';
import siteAnnotation from 'assets/site-img/site-annotation.webp';
import siteBackgroundBarLarge from 'assets/site-img/site-background-bar-large.webp';
import siteBackgroundBarPlaceholder from 'assets/site-img/site-background-bar-placeholder.webp';
import siteBackgroundBar from 'assets/site-img/site-background-bar.webp';
import siteBackgroundLarge from 'assets/site-img/site-background-large.webp';
import siteBackgroundPlaceholder from 'assets/site-img/site-background-placeholder.webp';
import siteBackground from 'assets/site-img/site-background.webp';
import siteSidebarAnnotationsLarge from 'assets/site-img/site-sidebar-annotations-large.webp';
import siteSidebarAnnotationsPlaceholder from 'assets/site-img/site-sidebar-annotations-placeholder.webp';
import siteSidebarAnnotations from 'assets/site-img/site-sidebar-annotations.webp';
import siteSidebarLayersLarge from 'assets/site-img/site-sidebar-layers-large.webp';
import siteSidebarLayersPlaceholder from 'assets/site-img/site-sidebar-layers-placeholder.webp';
import siteSidebarLayers from 'assets/site-img/site-sidebar-layers.webp';
import siteSlidesLarge from 'assets/site-img/site-slides-large.webp';
import siteSlidesPlaceholder from 'assets/site-img/site-slides-placeholder.webp';
import siteSlides from 'assets/site-img/site-slides.webp';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
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
import styles from './Site.module.css';

const title = 'Разработка сайтов';
const description =
  'Четкий и отлаженный процесс разработки от прототипа до готового сайта с заказами.';
const roles = ['SPA', 'MPA', 'Landing Page', 'E-Commerce'];

export const ServiceSite = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Services" description={description} />
      <ServicesContainer className={styles.site}>
        <ServicesBackground
          src={siteBackground}
          srcSet={`${siteBackground.src} 1280w, ${siteBackgroundLarge.src} 2560w`}
          placeholder={siteBackgroundPlaceholder}
          opacity={0.8}
        />
        <ServicesHeader
          title={title}
          description={description}
          url="/contact"
          roles={roles}
        />
        <ServicesSection>
          <ServicesSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ServicesSectionHeading>1. Разработка дизайна</ServicesSectionHeading>
              <ServicesSectionText>
                Разработка айдентики, прототипирование и разработка дизайн‑макета сайта
                (UI/UX) Разработка дизайна сайта осуществляется по техзаданию, упрощенному
                брифу или по примерам действующих сайтов. Описывается структура, внешний
                вид и задачи, которые должен решать сайт. т.д.
              </ServicesSectionText>
              <ServicesSectionText>
                Результатом являются графические макеты страниц будущего сайта: главной,
                внутренней, мобильных версий и
              </ServicesSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[siteSidebarLayers, siteSidebarLayersLarge]}
                placeholder={siteSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[siteSidebarAnnotations, siteSidebarAnnotationsLarge]}
                placeholder={siteSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ServicesSectionColumns>
        </ServicesSection>
        <ServicesSection light>
          <ServicesSectionContent>
            <ServicesTextRow>
              <ServicesSectionHeading>
                2. Разработка фронтенда и бэкенда
              </ServicesSectionHeading>
              <ServicesSectionText>
                HTML‑вёрстка, разработка функционала, запуск и тестирование сайта Сложный
                процесс, превращающий картинку в живой интерфейс с набором необходимых
                функций и системой управления. Чтобы сайтом было удобно пользоваться на
                любых устройствах, применяется кроссбраузерная адаптивная вёрстка.
                Разработка бэкенда осуществляется согласно документации выбранной CMS или
                пишется с нуля.
              </ServicesSectionText>
            </ServicesTextRow>
            <Image
              srcSet={[siteSlides, siteSlidesLarge]}
              placeholder={siteSlidesPlaceholder}
              alt="The new My Slides tab in site, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ServicesSectionContent>
        </ServicesSection>
        <ServicesSection padding="top">
          <ServicesSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[siteBackgroundBar, siteBackgroundBarLarge]}
                  placeholder={siteBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[siteAnnotation, siteAnnotationLarge]}
                  placeholder={siteAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ServicesSectionHeading>3. Наполнение и оптимизация</ServicesSectionHeading>
              <ServicesSectionText>
                Копирайтинг, наполнение, вёрстка контента, поисковая оптимизация Кроме
                стандартной вёрстки контента, каждый новый сайт должен пройти стартовую
                поисковую оптимизацию (SEO), чтобы он был лучше виден поисковыми системами
                и был более релевантен запросам пользователей.
              </ServicesSectionText>
            </div>
          </ServicesSectionContent>
        </ServicesSection>
      </ServicesContainer>
      <Footer />
    </Fragment>
  );
};
