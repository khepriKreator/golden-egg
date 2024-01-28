import styles from './styles.module.css';
import {Text} from "../../03_shared/atoms/Text";

export const About = () => {
    return (
        <div className={styles.about} id={'about'}>
            <div className={styles.text}>
                <div className={styles.title}>
                    <Text bold={true} size={'xl'} color={'black'} font={'kurale'} uppercase={true}>
                        о ресторане
                    </Text>
                    <svg width={60} height={6}>
                        <use href={'src/assets/sprite-svg/sprite-icons.svg#border'}/>
                    </svg>
                </div>
                <div className={styles.description}>
                    <Text bold={true} size={'m'} color={'black'} font={'default'} uppercase={false}>
                        Волшебная атмосфера, безукоризненное обслуживание,
                        изысканный интерьер и, самое главное, богатейший выбор
                        вкуснейших блюд отменного качества – именно эти
                        характеристики привлекают гостей в наш ресторан
                    </Text>
                    <Text bold={false} size={'s'} color={'black'} font={'default'} uppercase={false}>
                        Официанты этого заведения знают все тонкости приготовления блюд, они подскажут гостям наиболее подходящие для них яства. Тут хорошо знают постоянных клиентов, умело угождая их вкусам.
                    </Text>
                    <Text bold={false} size={'s'} color={'black'} font={'default'} uppercase={false}>
                        Идеально дополняет ресторан уютная кофейня, находящаяся на первом этаже. Чашечка изумительного кофе и сладости от местного кондитера зарядят вас бодростью и позитивной энергией.
                    </Text>
                </div>
            </div>
            <img
                srcSet={'src/assets/images/about_2x.png 2x, src/assets/images/about.png'}
                src={'src/assets/images/about.png'}
            />
        </div>
    );
};