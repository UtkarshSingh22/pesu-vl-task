import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCount, updateCount } from "../actions/peopleCount";
import Male from "../icons/male-user.png";
import Female from "../icons/woman-avatar.png";
import Boy from "../icons/boy.png";
import Girl from "../icons/girl.png";
import styles from "./styles/People.module.css";

const Settings = () => {
    const [count, setCount] = useState({});
    const navigate = useNavigate();

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

    const updateNumber = (e) => {
        const { name, value } = e.target;
        setCount((prevCount) => ({
            ...prevCount,
            [name]: parseInt(value, 10),
        }));
    };

    const submitHandler = async () => {
        try {
            await updateCount(count);
            navigate("/");
        } catch (err) {
            console.log("Something went wrong", err);
        }
    };

    return (
        <div className={styles.parent}>
            <div className={styles.main}>
                <div>
                    <img src={Male} alt="male" />
                    <input
                        type="number"
                        name="male"
                        value={count.male}
                        onChange={updateNumber}
                    />
                </div>
                <div>
                    <img src={Female} alt="female" />
                    <input
                        type="number"
                        name="female"
                        value={count.female}
                        onChange={updateNumber}
                    />
                </div>
                <div>
                    <img src={Boy} alt="boy" />
                    <input
                        type="number"
                        name="boy"
                        value={count.boy}
                        onChange={updateNumber}
                    />
                </div>
                <div>
                    <img src={Girl} alt="girl" />
                    <input
                        type="number"
                        name="girl"
                        value={count.girl}
                        onChange={updateNumber}
                    />
                </div>
            </div>
            <button className={styles.button} onClick={submitHandler}>
                Submit
            </button>
        </div>
    );
};

export default Settings;
