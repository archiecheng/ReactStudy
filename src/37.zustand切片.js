// zustand
import { useEffect } from "react";
import { create } from "zustand";
const URL = "http://geek.itheima.net/v1_0/channels";
// 1. 拆分子模块 再组合起来
const createCounterStore = (set) => {
  return {
    // 状态数据
    count: 0,
    // 修改状态数据的方法
    inc: () => {
      // 基于原数据做计算
      set((state) => ({ count: state.count + 1 }));
      // set({count: 100})
    },
  };
};

const createChannelStore = (set) => {
  return {
    channelList: [],
    fetchGetList: async () => {
      const res = await fetch(URL);
      const jsonRes = await res.json();
      console.log(jsonRes);
      set({
        channelList: jsonRes.data.channels,
      });
    },
  }
}

// 2. 组合
const useStore = create((...a) => {
  return {
    ...createCounterStore(...a),
    ...createChannelStore(...a)
  };
});

// 2. 绑定 store 到组件
// useStore => { count, inc }
function App() {
  const { count, inc, fetchGetList, channelList } = useStore();
  useEffect(() => {
    fetchGetList();
  }, [fetchGetList]);
  return (
    <div className="App">
      <button onClick={inc}>{count}</button>
      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
