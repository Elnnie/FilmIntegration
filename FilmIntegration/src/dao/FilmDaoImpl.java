package dao;
import model.Film;

public class FilmDaoImpl implements FilmDao {

	private static FilmDaoImpl filmDao = new FilmDaoImpl();

	public static FilmDaoImpl getInstance() {
		return filmDao;
	}

	@Override
	public Film get(String fid) {
		// TODO Auto-generated method stub
		if (fid.equals("test")) {
			Film f = new Film();
			f.setFid("test");
			f.setFname("神奇女侠");
			f.setFirst_run("2017-06-02");
			f.setType("动作 冒险 奇幻");
			f.setArea("美国");
			f.setTime("142分钟");
			f.setDirector("派蒂·杰金斯");
			f.setLeading("盖尔·加朵,克里斯·派恩,罗宾·怀特,丹尼·休斯顿");
			f.setPoint_maoyan("8.6");
			f.setPoint_nuomi("8.6");
			f.setPoint_taopp("8.6");
			f.setStory("故事讲述亚马逊公主戴安娜·普林斯（盖尔·加朵 饰），经过在家乡天堂岛的训练，取得上帝赐予的武器与装备，化身神奇女侠，与空军上尉史蒂夫·特雷弗（克里斯·派恩 饰）一同来到人类世界，一起捍卫和平、拯救世界，在一战期间上演了震撼人心的史诗传奇。");
			return f;
		}
		return null;
	}

}
