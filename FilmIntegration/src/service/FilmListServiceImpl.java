/**
 * 
 */
package service;

import java.util.List;

import dao.DaoFactory;

public class FilmListServiceImpl implements FilmListService {
	private static FilmListService filmListService=new FilmListServiceImpl();
	public static FilmListService getInstance()
	{
		return filmListService;
	}
	
	public List getList() {
		return DaoFactory.getFilmListDao().getList();
	}
}
