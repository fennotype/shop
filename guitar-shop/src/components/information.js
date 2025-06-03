
    import React from 'react';

    const AboutUs = () => {
    return (
        <div className="about-container">
        <h1 className="main-title">О компании</h1>

        <section className="about-section">
            <h2 className="section-title">ООО "АТЛАС НТС"</h2>
            <p className="section-text">
            ООО "АТЛАС НТС" — динамично развивающаяся компания, специализирующаяся на поставке и продаже керамической плитки, керамогранита и сопутствующих товаров для отделки. Мы предлагаем широкий ассортимент продукции от ведущих производителей, включая бренд Kerama Marazzi.
            </p>
            <p className="section-text">
            Наша миссия — предоставлять клиентам качественные строительные и отделочные материалы по конкурентоспособным ценам, обеспечивая высокий уровень сервиса и индивидуальный подход.
            </p>
        </section>

        <section className="about-section">
            <h2 className="section-title">О бренде Kerama Marazzi</h2>
            <p className="section-text">
            Kerama Marazzi — один из лидеров российского рынка керамической плитки и керамогранита, входящий в международную группу Marazzi Group. Продукция Kerama Marazzi известна высоким качеством, стильным дизайном и широкой линейкой коллекций, вдохновлённых различными культурами и архитектурными традициями.
            </p>
            <p className="section-text">
            Компания активно развивает технологии производства, предлагая как классические, так и инновационные решения для интерьеров и экстерьеров. Kerama Marazzi — выбор тех, кто ценит надёжность, эстетику и долговечность.
            </p>
        </section>

        <section className="about-section">
            <h2 className="section-title">Почему выбирают нас</h2>
            <ul className="advantages-list">
            <li>Официальный дистрибьютор продукции Kerama Marazzi</li>
            <li>Широкий ассортимент и актуальные коллекции</li>
            <li>Гибкая система скидок и программа лояльности</li>
            <li>Квалифицированная консультация и сопровождение</li>
            <li>Быстрая доставка и удобные способы оплаты</li>
            </ul>
        </section>
        </div>
    );
    };

    export default AboutUs;
