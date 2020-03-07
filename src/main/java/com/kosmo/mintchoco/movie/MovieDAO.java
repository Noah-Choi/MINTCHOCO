package com.kosmo.mintchoco.movie;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.ui.Model;

import com.kosmo.mintchoco.common.JDBCUtil;

/*
 * 담당자 : 천세문, 김정호
 */

public class MovieDAO {
	// 변수
	private Connection conn = null;
	private PreparedStatement stmt = null;
	private ResultSet rs = null;
	
	// 쿼리
	final private String SELECT_MOVIE_LIST = "SELECT * FROM MOVIE";
	final private String SELECT_MOVIE_ONE = "SELECT * FROM MOVIE WHERE MOVIE_NUMBER = ?";
	
	// 영화 번호, 포스터 주소, 	티저 링크, 영화 제목, 영화 분류, 영화 감독, 영화 배우, 상영 등급, 상영 시간, 개봉 일자, 유튜브 링크, 네이버 링크, 	게시일, 	줄거리
	final private String INSERT_MOVIE = "INSERT INTO MOVIE VALUES(MOVIE_SEQ.NEXTVAL, concat(concat('mov_poster_', MOVIE_SEQ.CURRVAL), '.jpg'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, DEFAULT, ?)";
	final private String DELETE_MOVIE = "update movie set MOVIE_POSTER = '_', MOVIE_TEASER = '_', MOVIE_TITLE = '_', MOVIE_KIND = '_', MOVIE_DIRECTOR = '_', MOVIE_ACTOR = '_', MOVIE_GRADE = '_', MOVIE_TIME = 0, MOVIE_DATE = '_', MOVIE_YOUTUBE_URL = '_', MOVIE_NAVER_URL = '_', MOVIE_CONTENT = '_' where  MOVIE_NUMBER = ?";
	
	// 메소드
	public List<MovieVO> selectMovieList() {
		List<MovieVO> movieList = new ArrayList<MovieVO>();
		try {
			conn = JDBCUtil.getConnection();
			stmt = conn.prepareStatement(SELECT_MOVIE_LIST);
			rs = stmt.executeQuery();
			while(rs.next()) {
				MovieVO movieVO = new MovieVO();
				movieVO.setMovieNumber(rs.getInt("movie_number"));
				movieVO.setMoviePoster(rs.getString("movie_poster"));
				movieVO.setMovieTeaser(rs.getString("movie_teaser"));
				movieVO.setMovieTitle(rs.getString("movie_title"));
				movieVO.setMovieKind(rs.getString("movie_kind"));
				movieVO.setMovieDirector(rs.getString("movie_director"));
				movieVO.setMovieActor(rs.getString("movie_actor"));
				movieVO.setMovieGrade(rs.getString("movie_grade"));
				movieVO.setMovieTime(rs.getString("movie_time"));
				movieVO.setMovieDate(rs.getString("movie_date"));
				movieVO.setMovieYoutubeUrl(rs.getString("movie_youtube_url"));
				movieVO.setMovieNaverUrl(rs.getString("movie_naver_url"));
				movieVO.setMovieIndate(rs.getString("movie_indate"));
				movieVO.setMovieContent(rs.getString("movie_content"));
				movieList.add(movieVO);
			}
			
		} catch(Exception e) {
			System.out.println("Error - selectMovieList()\n");
			e.printStackTrace();
		} finally {
			JDBCUtil.close(rs, stmt, conn);
		}
		return movieList;
	}
	
	// 메소드
	public void insertMovie(MovieVO movieVO) {
		
		try {
			
			conn = JDBCUtil.getConnection();
			stmt = conn.prepareStatement(INSERT_MOVIE);
			stmt.setString(1, movieVO.getMovieTeaser());
			stmt.setString(2, movieVO.getMovieTitle());
			stmt.setString(3, movieVO.getMovieKind());
			stmt.setString(4, movieVO.getMovieDirector());
			stmt.setString(5, movieVO.getMovieActor());
			stmt.setString(6, movieVO.getMovieGrade());
			stmt.setString(7, movieVO.getMovieTime());
			stmt.setString(8, movieVO.getMovieDate());
			stmt.setString(9, movieVO.getMovieYoutubeUrl());
			stmt.setString(10, movieVO.getMovieNaverUrl());
			stmt.setString(11, movieVO.getMovieContent());
			
			stmt.executeUpdate();
			
		} catch(Exception e) {
			System.out.println("Error - selectMovieList()\n");
			e.printStackTrace();
		} finally {
			JDBCUtil.close(rs, stmt, conn);
		}
		
	}
	
	// 메소드
	public void deleteMovie(String movieNumber) {
		
		try {
			conn = JDBCUtil.getConnection();
			stmt = conn.prepareStatement(DELETE_MOVIE);
			stmt.setString(1, movieNumber);
			stmt.executeUpdate();
			
		} catch(Exception e) {
			System.out.println("Error - selectMovieList()\n");
			e.printStackTrace();
		} finally {
			JDBCUtil.close(stmt, conn);
		}

	}

	// 메소드
	public MovieVO selectOneMovie(String movieNuber) {
		
		MovieVO movieVO = new MovieVO();
		
		try {
			conn = JDBCUtil.getConnection();
			stmt = conn.prepareStatement(SELECT_MOVIE_ONE);
			stmt.setString(1, movieNuber);
			rs = stmt.executeQuery();
			if(rs.next()) {
				
				movieVO.setMovieNumber(rs.getInt("movie_number"));
				movieVO.setMoviePoster(rs.getString("movie_poster"));
				movieVO.setMovieTeaser(rs.getString("movie_teaser"));
				movieVO.setMovieTitle(rs.getString("movie_title"));
				movieVO.setMovieKind(rs.getString("movie_kind"));
				movieVO.setMovieDirector(rs.getString("movie_director"));
				movieVO.setMovieActor(rs.getString("movie_actor"));
				movieVO.setMovieGrade(rs.getString("movie_grade"));
				movieVO.setMovieTime(rs.getString("movie_time"));
				movieVO.setMovieDate(rs.getString("movie_date"));
				movieVO.setMovieYoutubeUrl(rs.getString("movie_youtube_url"));
				movieVO.setMovieNaverUrl(rs.getString("movie_naver_url"));
				movieVO.setMovieIndate(rs.getString("movie_indate"));
				movieVO.setMovieContent(rs.getString("movie_content"));
				
			}
			
		} catch(Exception e) {
			System.out.println("Error - selectMovieList()\n");
			e.printStackTrace();
		} finally {
			JDBCUtil.close(rs, stmt, conn);
		}
		return movieVO;
	}
}
