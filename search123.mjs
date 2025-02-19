import pinyin from 'js-pinyin'



/* 
sInputValue:输入的字串
aJuliet:列表([{value:'xxx'}...])
*/
export let search123=(sInputValue,aJuliet)=>{
  let aResult=[]


  // .value
  let defaultAJuliet=[
    {
      value:'优化对象的同时保持动画效果',
      path: "/article/optimize-lots-of-objects-animated",
    },
    {
      value:'《罗密欧与朱丽叶》（Romeo and Juliet）',
      path: "/article/RomeoandJuliet",
    },
    {
      value:'mdn scrollIntoView',
      path: "/article/scrollIntoView",
    },
    {
      value:'中国铁路12306',
      path: "/article/CHINARAILWAY",
    },
  ]
  aJuliet=aJuliet||defaultAJuliet


  // .getFullChars() 转化为拼音
  aResult=aJuliet.map(v=>{
    v['js-pinyin']=pinyin.getFullChars(v.value)
    return v
  })

  // console.log('pinyin',pinyin,aResult)

  // 简拼/全拼/汉字
  sInputValue=sInputValue.split('').join('.*')
  // console.log(sInputValue)
  // 构建正则
  let re=new RegExp(sInputValue,'i')
  aResult=aResult.filter(v=>{
    let b=re.test(v.value) || re.test(v['js-pinyin'])
    return b
  })


  // aResult=aResult.map(v=>v.value)
  return aResult
}