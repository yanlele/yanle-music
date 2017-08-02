import {playMode} from 'common/js/config'

const state={
  singer:{},//歌手信息
  playing:false,//播放状态
  fullScreen:false,//是否全屏
  playlist:[],//播放列表
  sequenceList:[],//列表顺序
  mode:playMode.sequence,//播放模式
  currentIndex:-1,//当前播放歌曲的索引
  disc:{},//歌单的对象
};

export default state
