import { useState, useEffect } from "react";
import { getCount } from "../actions/peopleCount";
import Male from "../icons/male-user.png";
import Female from "../icons/woman-avatar.png";
import Boy from "../icons/boy.png";
import Girl from "../icons/girl.png";
import styles from "./styles/People.module.css";

const People = () => {
    const [count, setCount] = useState({});

    useEffect(() => {
        try {
            fetchData();
        } catch (err) {
            alert("Can't fetch data");
        }
    }, []);

    const fetchData = async () => {
        let { data } = await getCount();

        const peopleCount = data[0];
        delete peopleCount["_id"];
        delete peopleCount["__v"];

        setCount(peopleCount);
    };

    return (
        <div className={styles.main}>
            <div>
                <img src={Male} alt="male" />
                <div>{count.male}</div>
            </div>
            <div>
                <img src={Female} alt="female" />
                <div>{count.female}</div>
            </div>
            <div>
                <img src={Boy} alt="boy" />
                <div>{count.boy}</div>
            </div>
            <div>
                <img src={Girl} alt="girl" />
                <div>{count.girl}</div>
            </div>
        </div>
    );
};

export default People;
