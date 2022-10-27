import React, {useEffect, useState} from 'react';
import beanJson from "../../assets/json/beans.json";
import './SceneRenderer.css';

function SceneRenderer() {
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    const [pageLoadCount, setPageLoadCount] = useState(0);
    const [bean, setBean] = useState(Object);

    useEffect(() => {
        if (pageLoadCount === 0) {
            setPageLoadCount(pageLoadCount + 1);

            const beansListLength = beanJson.length;
            const rand = getRandomInt(beansListLength);
            const beanProfile = beanJson[rand];
            setBean(beanProfile);
            changeBackgroundColor(beanProfile.background.hex);
            fadeInBean();
        }
    })

    function changeBackgroundColor(color: string): void {
        document.body.style.backgroundColor = color;
    }

    function fadeInBean(): void {
        setTimeout(() => {
            const elem = document.getElementById("bean-img")
            if (elem) {
                elem.style.opacity = "1";
            }
        }, 300)
    }

    const beanAltText = `Azuki Bean ${bean.id}`;
    const beanImageSrc = `../../assets/images/final-${bean.id}.png`;

    return (
            <div>
                <div className="image-wrapper">
                    <img id="bean-img" src={beanImageSrc} alt={beanAltText}/>
                    <div className="credits">
                        <figcaption>This bean belongs to: <strong><a href={bean.twitterHandle}>${bean.name}</a></strong></figcaption>
                    </div>
                </div>
            </div>
            );
}

export default SceneRenderer;
