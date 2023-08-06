"use client"

import React, { useEffect, useState } from "react";
import Title from "../../components/title";
import { TitleType } from "../../constants/TitleType";
import BookContainer from "@/components/book_container";
import styles from './page.module.css'
import axios from "axios";
import { DominoSpinner } from "react-spinners-kit";

export default function HomePage() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    console.log(API_KEY);
    const [isLoading, setLoading] = useState(true);
    const setStateDelay = async () => {
        await setTimeout(() => setLoading(false), 5000);
    }
    //setStateDelay();
    // useEffect(() => {
    //     axios
    //     .get(`${BASE_URL}/svc/books/v3/lists/overview.json?api-key=${API_KEY}`)
    //     .then((response) => {
    //         console.log(response);
    //         setLoading(false);
    //     }, (e) => {
    //         console.error(e);
    //         setLoading(false);
    //     });
    // }, []);

    if (isLoading) {
        return(
            <div className={styles.homePage}>
                <div className={styles.loading}>
                    <DominoSpinner
                    size={200}
                    color="#ffffff"
                    loading={isLoading}/>
                </div>
            </div>
        );
    }
    return (
        <div className={styles.homePage}>
            <div className={styles.leftContainer}>
                <Title 
                    titleType={TitleType.H1}
                    title="NY Times Bestselling Book Catalog"
                />
            </div>
            <div className={styles.rightContainer}>
                <BookContainer
                    imageUrl="https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg"
                />                   
            </div>
        </div>

    );
}