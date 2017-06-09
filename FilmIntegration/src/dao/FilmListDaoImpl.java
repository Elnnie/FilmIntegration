package dao;

import java.util.ArrayList;
import java.util.List;

import model.Film;

public class FilmListDaoImpl implements FilmListDao {
	private static FilmListDaoImpl filmListDao = new FilmListDaoImpl();

	public static FilmListDaoImpl getInstance() {
		return filmListDao;
	}

	public List getList() {
		List list = new ArrayList<Film>();
		
		Film f1 = new Film();
		f1.setFname("新木乃伊");
		f1.setImgPath("https://img.alicdn.com/bao/uploaded/i4/TB1mM_jRXXXXXbuXFXXXXXXXXXX_.jpg_300x300.jpg");
		f1.setPoint_maoyan("6.7");
		f1.setPoint_nuomi("6.9");
		f1.setPoint_taopp("7.4");
		list.add(f1);
		
		Film f2 = new Film();
		f2.setFname("神奇女侠");
		f2.setImgPath("https://img.alicdn.com/bao/uploaded/i3/TB17nqdRXXXXXagXXXXXXXXXXXX_.jpg_160x240.jpg");
		f2.setPoint_maoyan("8.6");
		f2.setPoint_nuomi("8.6");
		f2.setPoint_taopp("8.6");
		list.add(f2);
		
		Film f3 = new Film();
		f3.setFname("异形：契约");
		f3.setImgPath("https://img.alicdn.com/bao/uploaded/i1/TB1BDi4RpXXXXb0XFXXXXXXXXXX_.jpg_300x300.jpg");
		f3.setPoint_maoyan("7.6");
		f3.setPoint_nuomi("7.4");
		f3.setPoint_taopp("7.7");
		list.add(f3);
		
		Film f4 = new Film();
		f4.setFname("李雷和韩梅梅——昨日重现 ");
		f4.setImgPath("https://img.alicdn.com/bao/uploaded/i1/TB1zplLRFXXXXamXFXXXXXXXXXX_.jpg_300x300.jpg");
		f4.setPoint_maoyan("8.2");
		f4.setPoint_nuomi("7.4");
		f4.setPoint_taopp("8.0");
		list.add(f4);
		
		Film f5 = new Film();
		f5.setFname("加勒比海盗5：死无对证");
		f5.setImgPath("https://img.alicdn.com/bao/uploaded/i2/TB1QXSmQVXXXXcDXXXXXXXXXXXX_.jpg_300x300.jpg");
		f5.setPoint_maoyan("8.9");
		f5.setPoint_nuomi("8.9");
		f5.setPoint_taopp("8.8");
		list.add(f5);
		
		return list;
	}
}
