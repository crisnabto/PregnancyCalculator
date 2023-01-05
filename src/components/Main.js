import React, { useState } from "react";
import styles from '../css modules/Main.module.css';
// import { GiPartyFlags } from 'react-icons/fa';
// import Context from "../context/Context";

function Main() {
    // const { setMethod } = useContext(Context);
    const [method, setMethod] = useState('US gestational age');
    const [lastPeriod, setLastPeriod] = useState();
    const [dueDate, setDueDate] = useState();
    const [weeks, setWeeks] = useState();
    const [days, setDays] = useState();
    const [showResult, setShowResult] = useState(false);
    const today = new Date();

    const getFullDate = () => {
        const day = ('0' + today.getDate()).slice(-2);
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const year = today.getFullYear();
        const todaysDate = `${month}-${day}-${year}`;
        return todaysDate;
    }

    const calculatePregnancy = () => {
        const todaysDate = getFullDate();

        const diffInMs = new Date(todaysDate) - new Date(lastPeriod);
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
        return diffInDays;
    }

    const calculate = () => {
        const time = calculatePregnancy();
        const weeksPreg = Math.floor(time / 7);
        const daysPreg = Math.floor(time % 7);

        const daysToAdd = (weeksPreg * 7) + daysPreg;
        const totalDaysToAdd = 280 - daysToAdd;
        // const result = new Date();
        today.setDate(today.getDate() + totalDaysToAdd);
        const fullDueDate = getFullDate();
        console.log(today);

        setDueDate(fullDueDate);
        setWeeks(weeksPreg);
        setDays(daysPreg);
        setShowResult(true);
    }

    return (
        <div className={styles.mainContainer}>
            <h2>Pregnancy Due Date Calculator</h2>
            <div className={styles.inputBox}>
                <p>Select Method</p>
                <label htmlFor="method">
                    <select
                        id="method"
                        name="method"
                        onChange={ ({ target: { value }}) => setMethod(value) }
                        defaultValue={ method }
                    >
                        <option>Last period</option>
                        <option>US gestational age</option>

                    </select>

                </label>

                <p>First day of your last period</p>
                <label htmlFor="info">
                    <input
                        id="info"
                        type="date"
                        onChange={ ({ target: { value }}) => setLastPeriod(value)}
                    >

                    </input>

                </label>
            </div>

            <button
                onClick={ calculate }
            >
                Calculate My Due Date
            </button>

            { showResult && (
                <div className={ styles.resultsBox }>
                    <div>
                        <p>&#x1F389; Congratulations! You are {weeks} weeks and {days} days pregnant </p>
                        <p>Your due date is: {dueDate} &#x1F476;</p>
                    </div>
                </div>
            )
            
            }
        </div>
    )
}

export default Main;