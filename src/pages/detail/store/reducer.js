import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '衡水中学',
  content: '<img src="http://upload-images.jianshu.io/upload_images/12190099-ff3c55f962d64d54.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" alt="" /><p>吕教授表示：“我们没有互联网，我们只有因特网，我们实际用的是美国的网，用它的服务器，美国总统有权随时关掉一个国家的互联网通道，控制它是很方便的事。我每天用手机上着的网，是按照规定租用给租用费，像我们使用电话一样。”</p><p>吕述望，现任中科院信息安全国家重点实验室教授，北京知识安全工程中心主任，博士生导师。90年代初当网络在中国兴起的时候，他却关注起网络安全，因为密码植入的土壤——网络如果不安全，密码便毫无安全可言。从那时候开始，吕述望一直担心从美国传进来的新生技术因特网，隐藏着安全问题。</p><p>有些网友第一次了解这件事，纷纷表示有些压抑和恐慌。其实租用美国网络这件事并不是什么秘密，记得我小时候上计算机课的时候，老师就提到过。</p><p>实话实说，全球13台根域名服务器有10台位于美国，美国在互联网上的霸权远大于其现实霸权。以电子邮件为例，全球所有电子邮件都要到美国“转一圈”，什么密码都没用，美国情报机构想看都能看到。世界上没一个国家在网络安全方面对美国是放心的。</p><p>美国曾在战争的特殊时间里清除过伊拉克、利比亚的国家根域名，使得那两个国家的全部网站从国际互联网上消失。从理论上说，美国也随时可以从国际互联网中清除.cn根域名，把任何国家打回“石器时代”。</p>'
})

export default (state = defaultState, action) => {

  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state;
  }
}