import React, {useEffect, useState} from 'react';
import beanJson from "../../assets/json/beans.json"

function SceneRenderer() {
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    const [pageLoadCount, setPageLoadCount] = useState(0)
    const [beanImgSrc, setBeanImgSrc] = useState("")
    const [beanId, setBeanId] = useState(0)

    useEffect(() => {
        if (pageLoadCount === 0) {
            setPageLoadCount(pageLoadCount + 1);

            const beansListLength = beanJson.length;
            const rand = getRandomInt(beansListLength);
            const beanProfile = beanJson[rand];

            changeBackgroundColor(beanProfile.background.hex)
            setBeanId(beanProfile.id)
            setBeanImgSrc(`../../assets/images/final-${beanProfile.id}.png`)
        }
    })

    function changeBackgroundColor(color: string): void {
        document.body.style.backgroundColor = color
    }

    const beanAltText = `Azuki Bean ${beanId}`

    return (
            <div className="image-wrapper">
                <img src={beanImgSrc} alt={beanAltText}/>
            </div>
            );
}

export default SceneRenderer;
