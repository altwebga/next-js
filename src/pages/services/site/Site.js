import siteAnnotationLarge from 'assets/site-img/site-annotation-large.png';
import siteAnnotationPlaceholder from 'assets/site-img/site-annotation-placeholder.png';
import siteAnnotation from 'assets/site-img/site-annotation.png';
import siteBackgroundBarLarge from 'assets/site-img/site-background-bar-large.png';
import siteBackgroundBarPlaceholder from 'assets/site-img/site-background-bar-placeholder.png';
import siteBackgroundBar from 'assets/site-img/site-background-bar.png';
import siteBackgroundLarge from 'assets/site-img/site-background-large.png';
import siteBackgroundPlaceholder from 'assets/site-img/site-background-placeholder.png';
import siteBackground from 'assets/site-img/site-background.png';
import siteSidebarAnnotationsLarge from 'assets/site-img/site-sidebar-annotations-large.png';
import siteSidebarAnnotationsPlaceholder from 'assets/site-img/site-sidebar-annotations-placeholder.png';
import siteSidebarAnnotations from 'assets/site-img/site-sidebar-annotations.png';
import siteSidebarLayersLarge from 'assets/site-img/site-sidebar-layers-large.png';
import siteSidebarLayersPlaceholder from 'assets/site-img/site-sidebar-layers-placeholder.png';
import siteSidebarLayers from 'assets/site-img/site-sidebar-layers.png';
import siteSlidesLarge from 'assets/site-img/site-slides-large.png';
import siteSlidesPlaceholder from 'assets/site-img/site-slides-placeholder.png';
import siteSlides from 'assets/site-img/site-slides.png';
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
import { media } from 'utils/style';
import styles from './Site.module.css';
import { Button } from 'components/Button';

const title = 'Разработка сайтов';
const description =
  'Сделаю современный сайт с высокой конверсией под ключ для вашего бизнеса. Возможно как готовое решение стилизованное под Вас, так и идивидуальная разработка с нуля.';
const roles = ['SPA', 'MPA', 'Landing Page', 'E-Commerce'];

export const ServiceSite = () => {
  return (
    <>
      <Meta title={title} prefix="Услуги" description={description} />
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
              <ServicesSectionHeading>
                Планирование и проектирование
              </ServicesSectionHeading>
              <ServicesSectionText>
                На этом этапе мы обсудим все ваши требования и ожидания от сайта, его
                структуру, функционал, целевую аудиторию и ключевые бизнес-цели. Исходя из
                этих данных, я разработаю подробный план и создам первоначальный дизайн
                сайта.
              </ServicesSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[siteSidebarLayers, siteSidebarLayersLarge]}
                placeholder={siteSidebarLayersPlaceholder}
                alt="Планирование и проектирование"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[siteSidebarAnnotations, siteSidebarAnnotationsLarge]}
                placeholder={siteSidebarAnnotationsPlaceholder}
                alt="Планирование и проектирование"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ServicesSectionColumns>
        </ServicesSection>
        <ServicesSection light>
          <ServicesSectionContent>
            <ServicesTextRow>
              <ServicesSectionHeading>Разработка</ServicesSectionHeading>
              <ServicesSectionText>
                На этом этапе осуществляется программная реализация сайта. Я начинаю
                преобразовывать концепцию и дизайн сайта в полностью функциональный
                продукт, при этом постоянно общаясь с вами, чтобы убедиться, что все
                соответствует вашим ожиданиям.
              </ServicesSectionText>
            </ServicesTextRow>
            <Image
              srcSet={[siteSlides, siteSlidesLarge]}
              placeholder={siteSlidesPlaceholder}
              alt="Разработка сайтов в Горно-Алтайске"
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
                  alt="Ракета, запуск сайта"
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[siteAnnotation, siteAnnotationLarge]}
                  placeholder={siteAnnotationPlaceholder}
                  alt="Облако без фона"
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ServicesSectionHeading>Тестирование и Запуск</ServicesSectionHeading>
              <ServicesSectionText>
                После завершения разработки, я проведу комплексное тестирование сайта,
                чтобы убедиться в его безупречной работе на всех платформах и устройствах.
                Когда все тесты будут успешно пройдены, я запущу ваш сайт, чтобы он начал
                работу и привлекал к вам новых клиентов.
              </ServicesSectionText>
            </div>
          </ServicesSectionContent>
        </ServicesSection>
        <ServicesSection light>
          <ServicesSectionContent>
            <ServicesTextRow>
              <ServicesSectionText>
                Со мной вам не придется беспокоиться о технических аспектах проекта. Я
                предлагаю полный комплекс услуг, начиная от планирования и разработки,
                заканчивая поддержкой после запуска. Свяжитесь со мной, чтобы обсудить
                ваши потребности и начать создание вашего нового сайта сегодня!
              </ServicesSectionText>
              <Button secondary className={styles.button} href="/contact" icon="send">
                Напишите мне
              </Button>
            </ServicesTextRow>
          </ServicesSectionContent>
        </ServicesSection>
      </ServicesContainer>
      <Footer />
    </>
  );
};
