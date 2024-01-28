import styles from './styles.module.css';
import {TabItem} from "./components";
import {Text} from "../../03_shared/atoms/Text";
import {Button} from "../../03_shared/atoms/Button";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.nav}>
                <div className={styles.tabsList}>
                <TabItem onClick={() => document.getElementById('about')?.scrollIntoView({behavior: "smooth"})}>
                    о ресторане
                </TabItem>
                <TabItem onClick={() => console.log('click')}>
                    команда
                </TabItem>
                <TabItem onClick={() => console.log('click')}>
                    заказать
                </TabItem>
            </div>
                <img src={'src/assets/images/logo.png'} className={styles.logo} height={100}/>
                <div className={styles.tabsList}>
                <TabItem onClick={() => console.log('click')}>
                    меню
                </TabItem>
                <TabItem onClick={() => console.log('click')}>
                    мероприятия
                </TabItem>
                <TabItem onClick={() => console.log('click')}>
                    контакты
                </TabItem>
            </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.schedule}>
                    <Text
                        bold={true}
                        size={'xs'}
                        color={'white'}
                        font={'default'}
                        uppercase={false}
                    >
                        Пн - Пт: 8 - 22, Сб - Вс: 9 - 24
                    </Text>
                </div>
                <div className={styles.title}>
                    <Text
                        bold={true}
                        size={'m'}
                        color={'white'}
                        font={'default'}
                        uppercase={true}
                    >
                        ресторан
                    </Text>
                    <Text
                        bold={true}
                        size={'xxl'}
                        color={'yellow'}
                        font={'kurale'}
                        uppercase={true}
                    >
                        golden egg
                    </Text>
                    <svg width={60} height={6}>
                        <use href={'src/assets/sprite-svg/sprite-icons.svg#border'}/>
                    </svg>
                    <div className={styles.buttons}>
                        <Button variant={'colored'}>
                            заказать столик
                        </Button>
                        <Button variant={'outline'}>
                            о ресторане
                        </Button>
                    </div>
                </div>
                <div className={styles.socials}>
                    <Button variant={null}>
                        <svg width={60} height={60}>
                            <use href={'src/assets/sprite-svg/sprite-icons.svg#facebook'}/>
                        </svg>
                    </Button>
                    <Button variant={null}>
                        <svg width={60} height={60}>
                            <use href={'src/assets/sprite-svg/sprite-icons.svg#twitter'}/>
                        </svg>
                    </Button>
                    <Button variant={null}>
                        <svg width={60} height={60}>
                            <use href={'src/assets/sprite-svg/sprite-icons.svg#instagram'}/>
                        </svg>
                    </Button>
                </div>
            </div>
            <Button variant={null}>
                <svg width={60} height={60} style={{paddingBottom: '20px'}}>
                    <use href={'src/assets/sprite-svg/sprite-icons.svg#downButton'}/>
                </svg>
            </Button>
        </div>
    );
};