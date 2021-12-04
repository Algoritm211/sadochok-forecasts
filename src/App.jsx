import React, {useState} from 'react';
import {Layout, Drawer, Button, Avatar, Tag, Divider, Menu, Row, Col} from 'antd';
import './css/blastercss.css';
import './index.css';
import fakeAvatar from './images/temp-avatar.jpg';
import forecastShare from './images/forecastshare.png';

const {Header, Footer, Sider, Content} = Layout;

const mainMenu = [
    {
        key: 'home',
        title: 'Главная',
        styles: "fas fa-home"
    },
    {
        key: 'cabinet',
        title: 'Мой кабинет',
        styles: "fas fa-user-alt"
    },
    {
        key: 'settings',
        title: 'Мои настройки',
        styles: "fas fa-cog"
    },
    {
        key: 'quit',
        title: 'Выйти',
        styles: "fas fa-sign-out-alt"
    }
]

const categories = [
    {
        key: 'hot',
        title: 'Горячее',
    },
    {
        key: 'soccer',
        title: 'Футбол',
    },
    {
        key: 'tennis',
        title: 'Теннис',
    },
    {
        key: 'cybersport',
        title: 'Киберспорт',
    }
]

const kappers = [
    {
        name: "Alexey Horbunov",
        rate: '5.0'
    },
    {
        name: "Edward Kbashyn",
        rate: '5.0'
    },
    {
        name: "Timofey Fedorchuk",
        rate: '5.0'
    }
]

const cards = [
    {
        title: 'Барселона - Реал Мадрид',
        linkedMatch: 'Barcelona(1.64) - Real Madrid(1.34)',
        authorName: "Alexey Horbunov",
        likes: '13',
        description: 'Occaecati hic sequi tempore est omnis sit est minima. Rem vel sit explicabo quae quod repudiandae inventore animi… Asperiores doloribus repudiandae architecto adipisci ipsum architecto odio'
    },
    {
        title: 'Шахтер - Динамо',
        linkedMatch: 'Shacktar(1.8) - Dynamo(1.44)',
        authorName: "Edward Kvashyn",
        likes: '63',
        description: 'Asperiores doloribus\n' +
            '                                            repudiandae\n' +
            '                                            architecto adipisci ipsum architecto odio. Doloremque minima tenetur\n' +
            '                                            aspernatur\n' +
            '                                            ab quia architecto. Occaecati hic sequi tempore est omnis sit est\n' +
            '                                            minima. Rem\n' +
            '                                            vel sit explicabo quae quod repudiandae inventore animi…'
    },
    {
        title: 'Челси - Манчестер Юнайтед',
        linkedMatch: 'Chelsea(1.91) - Manchester United(3.34)',
        authorName: "Timofey Fedorchuk",
        likes: '39',
        description: 'Occaecati hic sequi tempore est omnis sit est minima. Rem vel sit explicabo quae quod repudiandae inventore animi… Asperiores doloribus repudiandae architecto adipisci ipsum architecto odio'
    },
    {
        title: 'Зоря - Карпаты',
        linkedMatch: 'Zorya(2.64) - Karpati(4.82)',
        authorName: "Edward Kvashyn",
        likes: '23',
        description: 'Asperiores doloribus\n' +
            '                                            repudiandae\n' +
            '                                            architecto adipisci ipsum architecto odio. Doloremque minima tenetur\n' +
            '                                            aspernatur\n' +
            '                                            ab quia architecto. Occaecati hic sequi tempore est omnis sit est\n' +
            '                                            minima. Rem\n' +
            '                                            vel sit explicabo quae quod repudiandae inventore animi…'
    }
]

// GetAllMatches('soccer').then((data) => console.log(data));

const App = () => {
    const [visible, setVisible] = useState(false);
    const [menuCurrent, setCurrent] = useState('hot');

    const handleClick = e => {
        console.log('click ', e.key);
        setCurrent(e.key);
    };

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const menuItem = categories.map((item) => {
        return (
            <Menu.Item key={item.key}>
                {item.title}
            </Menu.Item>
        )
    })

    const mainMenuItem = mainMenu.map((item) => {
        return (
            <Menu.Item key={item.key} icon={<i className={item.styles}/>}>
                {item.title}
            </Menu.Item>
        )
    })

    const hotNews = cards.slice(0, 3).map((item) => {
        return (
            <div className="sider-hot-news">
                <div className="d-flex align-items-center">
                    <h3 className="sider-hot-news-title m-0">{item.title}</h3>
                    <i className="fab fa-hotjar ml-auto" style={{color: "red"}}/>
                </div>
                <p className="sider-hot-news-description mb-1">{item.description}</p>
                <hr style={{
                    color: "rgb(0 0 0 / 85%)",
                    borderTop: "1px solid rgba(0,0,0,.06)"
                }}/>
            </div>
        )
    })

    const topKappers = kappers.map((item) => {
        return (
            <div className="top-kappers">
                <div className="d-flex align-items-center sider-kapper-item mb-3">
                    <Avatar size="small" icon={<i className="fas fa-user-circle"/>}/>
                    <div className="ml-2">
                        <h3 className="sider-kapper-title m-0">{item.name}</h3>
                        <div className="sider-kapper-rate d-flex align-items-center">
                            <i className="fas fa-star mr-2"/>
                            <p className="m-0">{item.rate}</p>
                        </div>
                    </div>
                </div>
                <hr style={{
                    color: "rgb(0 0 0 / 85%)",
                    borderTop: "1px solid rgba(0,0,0,.06)"
                }}/>
            </div>
        )
    })

    const forecastCards = cards.map((item) => {
        return (
            <Col className="gutter-row" xs={{span: 24}} md={{span: 12}}>
                <div className="forecast-card p-2">
                    <h3 className="forecast-card-title mb-0">{item.title}</h3>
                    <h5 className="forecast-card-linked-match">{item.linkedMatch}</h5>
                    <hr style={{
                        color: "rgb(0 0 0 / 85%)",
                        borderTop: "rgba(0,0,0,.06)"
                    }}/>
                    <p className="forecast-card-short-description">{item.description}</p>
                    <div className="d-flex align-items-center">
                        <Avatar size="small" icon={<i className="fas fa-user-circle"/>}/>
                        <div className="ml-2">
                            <h3 className="sider-kapper-title m-0">{item.authorName}</h3>
                        </div>
                        <div className="ml-auto">
                            <Button icon={<i className="far fa-heart mr-1"/>}>{item.likes}</Button>
                        </div>
                    </div>
                </div>
            </Col>
        )
    })

    return (
        <div className="App">
            <Drawer title="Главное меню" placement="right" onClose={onClose} visible={visible}>
                <div className="drawer-user d-flex">
                    <Avatar size={64} src={fakeAvatar}/>
                    <div className="drawer-user-info ml-3">
                        <h3 className="drawer-username mt-2">Edward Kvashyn</h3>
                        <Tag color="magenta">Pro</Tag>
                    </div>
                </div>
                <Divider/>
                <Menu mode="inline" theme="light">{mainMenuItem}</Menu>
            </Drawer>
            <Layout>
                <Header>
                    <div className="d-flex align-items-center full-height">
                        <img className="app-logo d-flex align-items-center mr-auto" src={forecastShare}
                             alt="ForecastShare"/>
                        <i className="fas fa-bars d-flex align-items-center" style={{cursor: "pointer"}}
                           onClick={showDrawer}/>
                    </div>
                </Header>
                <div className="app-body">
                    <Layout>
                        <Content>
                            <Menu onClick={handleClick} selectedKeys={[menuCurrent]} mode="horizontal">{menuItem}</Menu>
                            <Row className="p-3" gutter={[16, 16]}>{forecastCards}</Row>
                        </Content>
                        <Sider>
                            <div className="p-3">
                                <h3 className="top-articles-title">ТОП капперы</h3>
                                {topKappers}
                            </div>
                            <div className="p-3">
                                <h3 className="top-articles-title">Наивысший рейтинг</h3>
                                {hotNews}
                            </div>
                        </Sider>
                    </Layout>
                </div>
                <Footer>
                    <div className="d-md-block d-flex m-0">
                        <h5 className="m-0">ForecastShare. Platform for sharing forecasts with sport community.</h5>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="ml-auto" href="#">Telegram Bot</a>
                    </div>
                </Footer>
            </Layout>
        </div>
    );
}

export default App;
