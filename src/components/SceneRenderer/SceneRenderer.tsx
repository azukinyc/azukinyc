import React, {useEffect, useState} from 'react';
import bean from '../../assets/images/bean-7783.png'
import beanJson from "../../assets/json/beans.json"

function SceneRenderer() {

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    const [pageLoadCount, setPageLoadCount] = useState(0)
    const [imgSrc, setImgSrc] = useState("")
    const [beanId, setBeanId] = useState(0)

    useEffect(() => {
        if (pageLoadCount === 0) {
            setPageLoadCount(pageLoadCount + 1);

            const beansListLength = beanJson.length;
            const rand = getRandomInt(beansListLength);
            const beanProfile = beanJson[rand];

            changeBackgroundColor(beanProfile.background.hex)
            setBeanImageSrc(`../../assets/images/final-${beanProfile.id}.png`)
            setBeanId(beanProfile.id)
            console.log(beanProfile);

        }
    })

    function changeBackgroundColor(color: string): void {
        document.body.style.backgroundColor = color
    }

    function setBeanImageSrc(imageSrc: string): void {
        setImgSrc(imageSrc)
    }

    const beanAltText = `Azuki Bean ${beanId}`

    return (
            <div className="image-wrapper">
                <img src={imgSrc} alt={beanAltText}/>
            </div>
            );
}

export default SceneRenderer;
