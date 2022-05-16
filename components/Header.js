import React from 'react';
import Head from 'next/head';
import "../styles/Home.module.css"
import styles from "../styles/Home.module.css"
import Link from 'next/link'
import Image from "next/image"
import logo from "../public/images/Frame 7.png"

const Header = () => {
    return (
        <div>
        <Head>
        <title>Yangi web site amaliyot</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />
        </Head>
        <nav className='container-fluid pt-3 text-white text-capitalize d-flex justify-content-between align-items-center'>
            <div className={styles.logo}>
                <Image
                src={logo}
                alt='logo'
                placeholder='blur'
                className={styles.logoImg}
                    />
            </div>
            <div className={styles.bar}>
            <ul className='menu d-flex justify-content-center align-items-center'>
                <li className='list-group-item '>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className='list-group-item'>
                    <Link href="/">
                        <a>about</a>
                    </Link>
                </li>
                <li className='list-group-item'>
                    <Link href="/">
                        <a>skills</a>
                    </Link>
                </li>
                <li className='list-group-item'>
                    <Link href="/">
                        <a>portfolio</a>
                    </Link>
                </li>
                <li className='list-group-item'>
                    <Link href="/">
                        <a>contact</a>
                    </Link>
                </li>
                <li className='list-group-item'>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
            </ul>
            </div>
            <div className={styles.btn}>
                    hire mee
                </div>
        </nav>
        </div>
    );
};

export default Header;