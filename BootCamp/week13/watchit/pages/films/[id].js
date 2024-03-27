import { useRouter } from 'next/router';
import MovieReviewList from '@/components/MovieReviewList';
import styles from '@/styles/Movie.module.css';
import axios from '@/lib/axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Spinner from '@/components/Spinner';

export async function getServerSideProps(context) {
  const movieId = context.params.id;

  let movie;
  try {
    const res = await axios.get(`/movies/${movieId}/`);
    movie = res.data;
  } catch {
    return {
      notFound: true,
    };
  }

  const res = await axios.get(`/movie_reviews/?movie_id=${movieId}`);
  const movieReviews = res.data.results ?? [];

  return {
    props: {
      movie,
      movieReviews,
    },
  };
}

const labels = {
  rating: {
    12: '12세이상관람가',
    15: '15세이상관람가',
    19: '청소년관람불가',
    all: '전체관람가',
  },
};

export default function Movie({ movie, movieReviews }) {

  if (!movie) return (
    <div className={styles.loading}>
      <Spinner />
      <p>로딩중 입니다. 잠시만 기다려주세요.</p>
    </div>
  );


  return (
    <>
      <Head>
        <title>{movie.title} - watchit</title>
      </Head>
      <div className={styles.header}>
        <div className={styles.poster}>
          <Image fill
            src={movie.posterUrl}
            alt={movie.name}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.englishTitle}>{movie.englishTitle}</div>
          <h1 className={styles.title}>{movie.title}</h1>
          <table className={styles.infoTable}>
            <tbody>
              <tr>
                <th>개봉</th> <td>{movie.date}</td>
              </tr>
              <tr>
                <th>장르</th> <td>{movie.genre}</td>
              </tr>
              <tr>
                <th>국가</th> <td>{movie.country}</td>
              </tr>
              <tr>
                <th>등급</th> <td>{labels.rating[movie.rating]}</td>
              </tr>
              <tr>
                <th>러닝타임</th> <td>{movie.runningTime}분</td>
              </tr>
              <tr>
                <th>평점</th>{' '}
                <td className={styles.starRating}>★{movie.starRating}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>소개</h2>
        <p className={styles.description}>{movie.description}</p>
        <span className={styles.readMore}>더보기</span>
      </section>
      <div className={styles.reviewSections}>
        <section>
          <h2 className={styles.sectionTitle}>내 리뷰 작성하기</h2>
        </section>
        <section>
          <h2 className={styles.sectionTitle}>리뷰</h2>
          <MovieReviewList movieReviews={movieReviews} />
        </section>
      </div>
    </>
  );
}
