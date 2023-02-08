import React from 'react';
import check from '../../assets/svgs/checks.svg'
import beanSelfie from '../../assets/images/final-7132.png'
import styles from './VVChecks.module.css'

 const url = (id: number): string => {
    //https://azkimg.imgix.net/images_squareface/final-14989.png?fm=jpg&w=1536
    return 'https://azkimg.imgix.net/images_squareface/final-' + id + '.png?fm=jpg&w=40'
}

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 6)
function VVChecks() {

    const arr: string[] = []

    for (let i = 0; i < 80; i++) {
        arr.push(url(randomIntFromInterval(0,20000)))
    }

    console.log(arr)

    return (
        <div className={styles.vvchecks}>
            <div className={styles.frame}>
                <div className={styles.canvas}>
                    {[...Array(80)].map((x, i) =>
                    <div key={i} className={styles.cell}>
                        <img src={arr[i]} className="" alt="check"/>
                    </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default VVChecks;
