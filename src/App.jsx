import React, {useState} from 'react';
import {Layout, Drawer, Button, Avatar, Tag, Divider, Menu, Row, Col} from 'antd';
import './css/blastercss.css';
import './index.css';
import fakeAvatar from './images/temp-avatar.jpg';
import forecastShare from './images/forecastshare.png';

const style = {background: '#0092ff', padding: '8px 0'};
const {Header, Footer, Sider, Content} = Layout;

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
                <Menu mode="inline" theme="light">
                    <Menu.Item key="home" icon={<i className="fas fa-home"/>}>
                        Главная
                    </Menu.Item>
                    <Menu.Item key="cabinet" icon={<i className="fas fa-user-alt"/>}>
                        Мой кабинет
                    </Menu.Item>
                    <Menu.Item key="settings" icon={<i className="fas fa-cog"/>}>
                        Мои настройки
                    </Menu.Item>
                    <Menu.Item key="quit" icon={<i className="fas fa-sign-out-alt"/>}>
                        Выйти
                    </Menu.Item>
                </Menu>
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
                            <Menu onClick={handleClick} selectedKeys={[menuCurrent]} mode="horizontal">
                                <Menu.Item key="hot">
                                    Горячее
                                </Menu.Item>
                                <Menu.Item key="soccer">
                                    Футбол
                                </Menu.Item>
                                <Menu.Item key="tennis">
                                    Теннис
                                </Menu.Item>
                            </Menu>
                            <div className="p-3">
                                <Row gutter={[16, 16]}>
                                    <Col className="gutter-row" xs={{span: 24}} md={{span: 12}}>
                                        <div className="forecast-card p-2">
                                            <h3 className="forecast-card-title mb-0">Динамо - Шахтер</h3>
                                            <h5 className="forecast-card-linked-match"> Dynamo(1.89) - Barcelona
                                                (1.89)</h5>
                                            <hr style={{
                                                color: "rgb(0 0 0 / 85%)",
                                                borderTop: "rgba(0,0,0,.06)"
                                            }}/>
                                            <p className="forecast-card-short-description">Occaecati hic sequi tempore
                                                est omnis sit est minima. Rem
                                                vel sit explicabo quae quod repudiandae inventore animi… Asperiores
                                                doloribus repudiandae architecto adipisci ipsum architecto odio</p>
                                            <div className="d-flex align-items-center">
                                                <Avatar size="small" icon={<i className="fas fa-user-circle"/>}/>
                                                <div className="ml-2">
                                                    <h3 className="sider-kapper-title m-0">Alexey Horbunov</h3>
                                                </div>
                                                <div className="ml-auto">
                                                    <Button icon={<i className="far fa-heart mr-1"/>}>13</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" xs={{span: 24}} md={{span: 12}}>
                                        <div className="forecast-card p-2">
                                            <h3 className="forecast-card-title mb-0">Бавария - Барселона</h3>
                                            <h5 className="forecast-card-linked-match"> Bayern(1.64) - Barcelona
                                                (3.24)</h5>
                                            <hr style={{
                                                color: "rgb(0 0 0 / 85%)",
                                                borderTop: "rgba(0,0,0,.06)"
                                            }}/>
                                            <p className="forecast-card-short-description">Asperiores doloribus
                                                repudiandae
                                                architecto adipisci ipsum architecto odio. Doloremque minima tenetur
                                                aspernatur
                                                ab quia architecto. Occaecati hic sequi tempore est omnis sit est
                                                minima. Rem
                                                vel sit explicabo quae quod repudiandae inventore animi…</p>
                                            <div className="d-flex align-items-center">
                                                <Avatar size="small" icon={<i className="fas fa-user-circle"/>}/>
                                                <div className="ml-2">
                                                    <h3 className="sider-kapper-title m-0">Edward Kvashyn</h3>
                                                </div>
                                                <div className="ml-auto">
                                                    <Button type="primary" icon={<i className="far fa-heart mr-1"/>}>62</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" xs={{span: 24}} md={{span: 12}}>
                                        <div className="forecast-card p-2">
                                            <h3 className="forecast-card-title mb-0">Бавария - Барселона</h3>
                                            <h5 className="forecast-card-linked-match"> Bayern(1.64) - Barcelona
                                                (3.24)</h5>
                                            <hr style={{
                                                color: "rgb(0 0 0 / 85%)",
                                                borderTop: "rgba(0,0,0,.06)"
                                            }}/>
                                            <p className="forecast-card-short-description">Asperiores doloribus
                                                repudiandae
                                                architecto adipisci ipsum architecto odio. Doloremque minima tenetur
                                                aspernatur
                                                ab quia architecto. Occaecati hic sequi tempore est omnis sit est
                                                minima. Rem
                                                vel sit explicabo quae quod repudiandae inventore animi…</p>
                                            <div className="d-flex align-items-center">
                                                <Avatar size="small" icon={<i className="fas fa-user-circle"/>}/>
                                                <div className="ml-2">
                                                    <h3 className="sider-kapper-title m-0">Edward Kvashyn</h3>
                                                </div>
                                                <div className="ml-auto">
                                                    <Button icon={<i className="far fa-heart mr-1"/>}>62</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" xs={{span: 24}} md={{span: 12}}>
                                        <div className="forecast-card p-2">
                                            <h3 className="forecast-card-title mb-0">Динамо - Шахтер</h3>
                                            <h5 className="forecast-card-linked-match"> Dynamo(1.89) - Barcelona
                                                (1.89)</h5>
                                            <hr style={{
                                                color: "rgb(0 0 0 / 85%)",
                                                borderTop: "rgba(0,0,0,.06)"
                                            }}/>
                                            <p className="forecast-card-short-description">Occaecati hic sequi tempore
                                                est omnis sit est minima. Rem
                                                vel sit explicabo quae quod repudiandae inventore animi… Asperiores
                                                doloribus repudiandae architecto adipisci ipsum architecto odio</p>
                                            <div className="d-flex align-items-center">
                                                <Avatar size="small" icon={<i className="fas fa-user-circle"/>}/>
                                                <div className="ml-2">
                                                    <h3 className="sider-kapper-title m-0">Alexey Horbunov</h3>
                                                </div>
                                                <div className="ml-auto">
                                                    <Button icon={<i className="far fa-heart mr-1"/>}>13</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </Content>
                        <Sider>
                            <div className="p-3">
                                <h3 className="top-articles-title">ТОП капперы</h3>
                                <div className="d-flex align-items-center sider-kapper-item mb-3">
                                    <Avatar size="small" icon={<i className="fas fa-user-circle"/>}/>
                                    <div className="ml-2">
                                        <h3 className="sider-kapper-title m-0">Alexey Horbunov</h3>
                                        <div className="sider-kapper-rate d-flex align-items-center">
                                            <i className="fas fa-star mr-2"/>
                                            <p className="m-0">5.0</p>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{
                                    color: "rgb(0 0 0 / 85%)",
                                    borderTop: "1px solid rgba(0,0,0,.06)"
                                }}/>
                                <div className="d-flex align-items-center sider-kapper-item mb-3">
                                    <Avatar size="small" icon={<i className="fas fa-user-circle"/>}/>
                                    <div className="ml-2">
                                        <h3 className="sider-kapper-title m-0">Timofii Fedorchuk</h3>
                                        <div className="d-flex align-items-center">
                                            <i className="fas fa-star mr-2"/>
                                            <p className="sider-kapper-rate m-0">5.0</p>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{
                                    color: "rgb(0 0 0 / 85%)",
                                    borderTop: "1px solid rgba(0,0,0,.06)"
                                }}/>
                                <div className="d-flex align-items-center sider-kapper-item mb-3">
                                    <Avatar size="small" icon={<i className="fas fa-user-circle"/>}/>
                                    <div className="ml-2">
                                        <h3 className="sider-kapper-title m-0">Edward Kvashyn</h3>
                                        <div className="d-flex align-items-center">
                                            <i className="fas fa-star mr-2"/>
                                            <p className="sider-kapper-rate m-0">5.0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3">
                                <h3 className="top-articles-title">Наивысший рейтинг</h3>
                                <div className="sider-hot-news">
                                    <div className="d-flex align-items-center">
                                        <h3 className="sider-hot-news-title m-0">Арсенал - Бавария</h3>
                                        <i className="fab fa-hotjar ml-auto" style={{color: "red"}}/>
                                    </div>
                                    <p className="sider-hot-news-description mb-1">Lorem ipsum dolor topos leryw takos
                                        lowa
                                        tied mderka totla</p>
                                    <hr style={{
                                        color: "rgb(0 0 0 / 85%)",
                                        borderTop: "1px solid rgba(0,0,0,.06)"
                                    }}/>
                                </div>
                                <div className="sider-hot-news">
                                    <div className="d-flex align-items-center">
                                        <h3 className="sider-hot-news-title m-0">Динамо - Шахтер</h3>
                                        <i className="fab fa-hotjar ml-auto" style={{color: "red"}}/>
                                    </div>
                                    <p className="sider-hot-news-description mb-1">Ipsum dolor totla topos leryw lorem
                                        takos
                                        lowa tied mderka </p>
                                    <hr style={{
                                        color: "rgb(0 0 0 / 85%)",
                                        borderTop: "1px solid rgba(0,0,0,.06)"
                                    }}/>
                                </div>
                                <div className="sider-hot-news">
                                    <div className="d-flex align-items-center">
                                        <h3 className="sider-hot-news-title m-0">Челси - МЮ</h3>
                                        <i className="fab fa-hotjar ml-auto" style={{color: "red"}}/>
                                    </div>
                                    <p className="sider-hot-news-description mb-1">Lorem ipsum dolor topos leryw takos
                                        lowa
                                        tied mderka totla</p>
                                    <hr style={{
                                        color: "rgb(0 0 0 / 85%)",
                                        borderTop: "1px solid rgba(0,0,0,.06)"
                                    }}/>
                                </div>
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
