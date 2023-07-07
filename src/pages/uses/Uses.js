import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ServicesBackground,
  ServicesContainer,
  ServicesHeader,
  ServicesSection,
  ServicesSectionContent,
  ServicesSectionHeading,
  ServicesSectionText,
  ServicesTextRow,
} from 'layouts/Services';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Окружение"
        description="Список оборудования и программного обеспечения, которое я использую для своей работы"
      />
      <ServicesContainer className={styles.uses}>
        <ServicesBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ServicesHeader
          title="Окружение"
          description="Основной список инструментов, приложений, оборудования и прочего, что я ежедневно использую для дизайна и разработки."
        />
        <ServicesSection padding="none" className={styles.section}>
          <ServicesSectionContent>
            <ServicesTextRow width="m">
              <ServicesSectionHeading>Дизайн</ServicesSectionHeading>
              <ServicesSectionText as="div">
                <List>
                  <ListItem>
                    Практически для всего UI-дизайна я использую{' '}
                    <Link href="https://www.figma.com">Figma</Link> на сегодняшний день
                    это мой любимый инструмент.
                  </ListItem>
                  <ListItem>
                    Для работы с изображениями использую Adobe Photoshop, пока ничего
                    лучше не нашел, если у вас есть идеи чем заменить{' '}
                    <Link href="/contact">сообщите мне</Link>.
                  </ListItem>
                </List>
              </ServicesSectionText>
            </ServicesTextRow>
          </ServicesSectionContent>
        </ServicesSection>
        <ServicesSection padding="none" className={styles.section}>
          <ServicesSectionContent>
            <ServicesTextRow width="m">
              <ServicesSectionHeading>Разработка</ServicesSectionHeading>
              <ServicesSectionText as="div">
                <List>
                  <ListItem>
                    Для разработки Я использую{' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>{' '}
                    отличный редактор кода от Microsoft.
                  </ListItem>
                  <ListItem>
                    Microsoft Edge - мой основной браузер как для разработки, так и для
                    общего использования.
                  </ListItem>
                  <ListItem>
                    Основная библиотека для фронтенд-разработки на JavaScript - это{' '}
                    <Link href="https://reactjs.org/">React</Link>.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactnative.dev/">React Native</Link> - для
                    разработки мобильных приложений.
                  </ListItem>
                  <ListItem>
                    <Link href="https://expo.dev/">Expo</Link> для быстрой разработки и
                    тестирования приложений React Native.
                  </ListItem>
                  <ListItem>
                    Для стилизации использую{' '}
                    <Link href="https://tailwindcss.com/">Tailwind CSS</Link> - фреймворк
                    CSS с открытым исходным кодом или чистый css3.
                  </ListItem>
                  <ListItem>
                    Для доступа к технологиям использую два сервера VPN{' '}
                    <Link href="https://getoutline.org/">Outline</Link> в Казахстане и
                    Гемании.
                  </ListItem>
                </List>
              </ServicesSectionText>
            </ServicesTextRow>
          </ServicesSectionContent>
        </ServicesSection>
        <ServicesSection padding="none" className={styles.section}>
          <ServicesSectionContent>
            <ServicesTextRow stretch width="m">
              <ServicesSectionHeading>Железо</ServicesSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Процессор</TableHeadCell>
                    <TableCell>Intel i5-13400F</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Системная плата</TableHeadCell>
                    <TableCell>Gigabyte B760 Gaming X AX</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Оперативная память</TableHeadCell>
                    <TableCell>32602 МБ DDR5 SDRAM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Видеокарта</TableHeadCell>
                    <TableCell>NVIDIA GeForce GTX 1050 Ti</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Монитор</TableHeadCell>
                    <TableCell>Asus VG279</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Ноутбук</TableHeadCell>
                    <TableCell>Acer Aspire 5 a515</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ServicesTextRow>
          </ServicesSectionContent>
        </ServicesSection>
      </ServicesContainer>
      <Footer />
    </Fragment>
  );
};
