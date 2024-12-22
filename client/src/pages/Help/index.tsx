import { Image, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtIcon } from 'taro-ui';

import logo from '@/assets/images/banner.jpg';
import { renderCustomHeader } from '@/utils/render';

import './index.less';

export default function Help() {
  const gotoHome = () => {
    Taro.navigateBack();
  };
  return (
    <View className="help-page">
      {renderCustomHeader()}
      <View className="help-page__navbar">
        <AtIcon value="chevron-left" onClick={gotoHome} className="icon"></AtIcon>
        <Text className="title">{`// 🤝 Help`}</Text>
      </View>
      <View className="help-page__banner">
        <Image src={logo} mode="widthFix" />
      </View>
      <View className="help-page__content">
        <View className="block">
          <Text className="title">关于小程序：</Text>
          <Text>🐞 全名叫 Throw new Error()，用来给王子恒的好朋友选酒使的。</Text>
          <Text>🤦 不然每次来喝酒都不知道该喝什么。</Text>
          <Text>🤔 至于为什么叫这个倒霉名字，可能是希望每一个来喝酒的朋友都能把自己的错误和遗憾留到酒里吧。</Text>
          <Text>🧑‍💻 职业病大爆发，小程序技术栈：Taro + React + Less + Webpack + WXCloud Serverless。</Text>
        </View>
        <View className="block">
          <Text className="title">关于王子恒：</Text>
          <Text>👋 如果你偶然发现了这个小程序，那么这个人很神秘，没有留下任何痕迹。</Text>
          <Text>🎉 但是祝你生来笨拙 不会假装 爱憎分明 一生坦诚。</Text>
        </View>
        <View className='block'>
          <Text className='title'>关于2024总结限定：</Text>
          <Text>🌙 激烈的喧嚣震荡，沸沸扬扬。</Text>
          <Text>👋🏻 为渺小的我们唱一支勇气的歌，在纵深的生命力永远蓬勃永远尽兴永远不留遗憾。</Text>
        </View>
      </View>
    </View>
  );
}
