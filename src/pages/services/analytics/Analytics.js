import analyticsAppLarge from 'assets/analytics-img/analytics-app-large.jpg';
import analyticsAppPlaceholder from 'assets/analytics-img/analytics-app-placeholder.jpg';
import analyticsApp from 'assets/analytics-img/analytics-app.jpg';
import analyticsBackgroundLarge from 'assets/analytics-img/analytics-background-large.jpg';
import analyticsBackgroundPlaceholder from 'assets/analytics-img/analytics-background-placeholder.jpg';
import analyticsBackground from 'assets/analytics-img/analytics-background.jpg';
import analyticsIrlPlaceholder from 'assets/analytics-img/analytics-irl-placeholder.jpg';
import analyticsIrl from 'assets/analytics-img/analytics-irl.png';
import analyticsSlidesLarge from 'assets/analytics-img/analytics-slides-large.png';
import analyticsSlidesPlaceholder from 'assets/analytics-img/analytics-slides-placeholder.jpg';
import analyticsSlides from 'assets/analytics-img/analytics-slides.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { Button } from 'components/Button';
import { List, ListItem } from 'components/List';
import {
  ServicesBackground,
  ServicesContainer,
  ServicesHeader,
  ServicesImage,
  ServicesSection,
  ServicesSectionContent,
  ServicesSectionHeading,
  ServicesSectionText,
  ServicesTextRow,
} from 'layouts/Services';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Analytics.module.css';

const title = 'WEB-аналитика и контекстная реклама';
const description =
  'Вы можете продвигать ваш бизнес самыми разыми способами, но оценить и увеличить эффективность продвижения могут только специалисты, постоянно работающие с данными и анализирующие их.';
const roles = ['Я.Метрика', 'Я.Директ', 'Roistat'];

export const serviceAnalytics = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Услуги" description={description} />
      <ServicesContainer className={styles.analytics}>
        <ServicesBackground
          src={analyticsBackground}
          srcSet={`${analyticsBackground.src} 1280w, ${analyticsBackgroundLarge.src} 2560w`}
          placeholder={analyticsBackgroundPlaceholder}
          opacity={0.8}
        />
        <ServicesHeader
          title={title}
          description={description}
          url="/contact"
          roles={roles}
        />
        <ServicesSection padding="top">
          <ServicesSectionContent>
            <ServicesImage
              srcSet={[analyticsApp, analyticsAppLarge]}
              placeholder={analyticsAppPlaceholder}
              alt="Яндекс метрика. Услуги настройки и аналитики."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ServicesSectionContent>
        </ServicesSection>
        <ServicesSection light>
          <ServicesSectionContent>
            <ServicesTextRow>
              <ServicesSectionHeading>Что такое веб-аналитика?</ServicesSectionHeading>
              <ServicesSectionText>
                Веб-аналитика — это система сбора, анализа, оценки и визуализации данных о
                действиях Пользователей на сайте или в приложении. Она позволяет понять,
                как пользователи взаимодействуют с вашим продуктом: откуда приходят, каким
                страницам или предложениям уделяют внимание, на каком этапе теряют интерес
                — и так далее.
              </ServicesSectionText>
            </ServicesTextRow>
            <Image
              srcSet={[analyticsSlides, analyticsSlidesLarge]}
              placeholder={analyticsSlidesPlaceholder}
              alt="веб-аналитика"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ServicesSectionContent>
        </ServicesSection>
        <ServicesSection>
          <ServicesSectionContent>
            <ServicesTextRow>
              <ServicesSectionHeading>Реклама + Аналитика</ServicesSectionHeading>
              <ServicesSectionText>
                Не понимаю почему многие агентства предлагают эти услуги отдельно.
                Контекстная реклама – это мощный инструмент привлечения клиентов, который
                может принести высокий доход. Но без качественной аналитики он может
                оказаться неэффективным и даже вредным. Вот некоторые причины, почему это
                так:
              </ServicesSectionText>
              <ServicesSectionText as="div">
                <List>
                  <ListItem>
                    Определение целевой аудитории: аналитика помогает понять, кто является
                    вашей целевой аудиторией, что они ищут и на какие запросы реагируют.
                    Без этого знания ваши объявления могут быть направлены не на тех
                    людей, что приведет к увеличению бюджета на рекламу, но не к
                    увеличению продаж.
                  </ListItem>
                  <ListItem>
                    Измерение эффективности: только с помощью аналитики можно точно
                    определить, какие рекламные кампании работают, а какие нет. Если вы не
                    знаете, какие объявления приносят доход, а какие – нет, вы рискуете
                    тратить деньги впустую.
                  </ListItem>
                  <ListItem>
                    Оптимизация бюджета: аналитика позволяет отслеживать, какие ключевые
                    слова и фразы приносят больше всего кликов и конверсий. Это позволяет
                    вам перераспределить бюджет в пользу наиболее эффективных запросов и
                    увеличить доходность от рекламы.
                  </ListItem>
                  <ListItem>
                    Управление ставками и позициями: качественная аналитика помогает
                    управлять ставками и позициями ваших объявлений для достижения
                    наилучших результатов. Без аналитики вы можете недооценивать или
                    переоценивать стоимость клика, что приведет к излишним расходам.
                  </ListItem>
                  <ListItem>
                    Предсказание трендов: аналитические инструменты могут помочь
                    предсказать будущие тенденции и изменения в поведении потребителей.
                    Это позволяет вам быть готовыми к этим изменениям и принимать решения
                    о рекламе на основе прогнозируемых данных, а не только на основе
                    прошлых результатов.
                  </ListItem>
                </List>
                <ServicesSectionText>
                  Таким образом, качественная аналитика является ключевым фактором успеха
                  контекстной рекламы. Без нее вы не сможете эффективно управлять своими
                  рекламными кампаниями и достигать поставленных целей.
                </ServicesSectionText>
              </ServicesSectionText>
            </ServicesTextRow>

            <Image
              src={analyticsIrl}
              placeholder={analyticsIrlPlaceholder}
              alt="Контекстная реклама"
            />
          </ServicesSectionContent>
        </ServicesSection>
        <ServicesSection>
          <ServicesTextRow>
            <ServicesSectionHeading>Контекстная реклама</ServicesSectionHeading>
            <ServicesSectionText>
              Ваша реклама, ваша собственность. В отличие от подавляющего большинства
              агентств я не использую партнерские аккаунты. Настраиваю и оформляем
              рекламную компанию на Вас, т.е. вы получаете полный доступ в настройки РК и
              можете зайти в любой момент и проверить качество проделанной работы. Тем
              самым Я не заинтересован быстрее слить бюджет и получить партнерское
              вознаграждение. Если вас не устроит качество, вы можете передать Вашу
              рекламную компанию другому специалисту.
            </ServicesSectionText>
            <Button secondary className={styles.button} href="/contact" icon="send">
              Напишите мне
            </Button>
          </ServicesTextRow>
        </ServicesSection>
      </ServicesContainer>
      <Footer />
    </Fragment>
  );
};
